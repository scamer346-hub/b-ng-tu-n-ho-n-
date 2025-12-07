
import React, { useState, useRef } from 'react';
import { ElementData } from '../types';
import { generatePronunciation } from '../services/geminiService';
import { decodeBase64, decodeAudioData } from '../services/audioUtils';
import { CloseIcon, AtomIcon, BeakerIcon, InfoIcon, VolumeIcon } from './Icons';

interface ElementDetailProps {
  element: ElementData;
  onClose: () => void;
}

const ElementDetail: React.FC<ElementDetailProps> = ({ element, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playPronunciation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
            sampleRate: 24000
        });
      }

      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      const base64Audio = await generatePronunciation(element.name); // Using English Name
      if (base64Audio) {
        const bytes = decodeBase64(base64Audio);
        const buffer = await decodeAudioData(bytes, audioContextRef.current);
        
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setIsPlaying(false);
        source.start(0);
      } else {
        setIsPlaying(false);
      }
    } catch (e) {
      console.error(e);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
    }}>
      <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative flex flex-col">
        
        {/* Header with big symbol */}
        <div className="relative h-40 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-t-2xl flex items-center px-8 overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
          >
            <CloseIcon />
          </button>

          <div className="flex items-center gap-6 z-10 w-full">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center justify-center text-white shadow-lg">
                <span className="text-sm opacity-80">{element.number}</span>
                <span className="text-4xl font-bold">{element.symbol}</span>
            </div>
            <div className="text-white flex-1">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    {element.vietnameseName}
                    <span className="text-lg font-normal opacity-60">({element.name})</span>
                    <button 
                        onClick={playPronunciation}
                        className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all ${isPlaying ? 'scale-95 opacity-80' : 'hover:scale-105'}`}
                        title="Phát âm tên tiếng Anh"
                    >
                        <VolumeIcon className={`w-5 h-5 ${isPlaying ? 'animate-pulse text-indigo-300' : ''}`} />
                    </button>
                </h2>
                <p className="text-indigo-200 text-lg opacity-90">{element.category}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 text-gray-300">
            {/* Basic Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                    <h3 className="flex items-center gap-2 text-indigo-400 font-semibold mb-3">
                        <InfoIcon className="w-5 h-5" /> Thông tin cơ bản
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-gray-700/50 pb-2">
                            <span className="text-gray-400">Khối lượng nguyên tử</span>
                            <span className="font-mono text-white">{element.atomicMass}</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-700/50 pb-2">
                            <span className="text-gray-400">Trạng thái tự nhiên</span>
                            <span className="text-white">{element.standardState}</span>
                        </li>
                        <li className="flex justify-between pt-1">
                            <span className="text-gray-400">Cấu hình e-</span>
                            <span className="font-mono text-white text-xs">{element.electronConfiguration}</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <h3 className="flex items-center gap-2 text-indigo-400 font-semibold mb-3">
                        <AtomIcon className="w-5 h-5" /> Mô tả
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                        {element.summary}
                    </p>
                </div>
            </div>

            {/* Applications */}
            <div>
                <h3 className="flex items-center gap-2 text-pink-400 font-semibold mb-4">
                    <BeakerIcon className="w-5 h-5" /> 5 Ứng dụng thực tế
                </h3>
                <div className="grid gap-3">
                    {element.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                            </span>
                            <p className="text-sm text-gray-200">{app}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetail;
