
import React from 'react';
import { elements } from '../data/periodicTableData';
import { ElementData, ElementCategory } from '../types';

interface PeriodicTableProps {
  onSelectElement: (element: ElementData) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ onSelectElement }) => {
  // Enhanced color palette for a modern dark UI with glassmorphism feel
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case ElementCategory.ALKALI_METAL: return 'bg-red-500/10 border-red-500/30 text-red-100 hover:bg-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:border-red-400';
      case ElementCategory.ALKALINE_EARTH_METAL: return 'bg-orange-500/10 border-orange-500/30 text-orange-100 hover:bg-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:border-orange-400';
      case ElementCategory.TRANSITION_METAL: return 'bg-pink-500/10 border-pink-500/30 text-pink-100 hover:bg-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:border-pink-400';
      case ElementCategory.POST_TRANSITION_METAL: return 'bg-blue-400/10 border-blue-400/30 text-blue-100 hover:bg-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:border-blue-300';
      case ElementCategory.METALLOID: return 'bg-teal-500/10 border-teal-500/30 text-teal-100 hover:bg-teal-500/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:border-teal-400';
      case ElementCategory.REACTIVE_NONMETAL: return 'bg-green-500/10 border-green-500/30 text-green-100 hover:bg-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:border-green-400';
      case ElementCategory.NOBLE_GAS: return 'bg-purple-500/10 border-purple-500/30 text-purple-100 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-400';
      case ElementCategory.LANTHANIDE: return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-100 hover:bg-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400';
      case ElementCategory.ACTINIDE: return 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-100 hover:bg-fuchsia-500/30 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:border-fuchsia-400';
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-200 hover:bg-gray-500/30 hover:shadow-[0_0_20px_rgba(107,114,128,0.4)] hover:border-gray-400';
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto p-4 sm:p-8 overflow-x-auto min-h-screen flex flex-col items-center">
        <div className="text-center mb-12 relative z-10">
             <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-400 mb-3 tracking-tighter drop-shadow-lg">
                BẢNG TUẦN HOÀN
             </h1>
             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full opacity-50"></div>
             <p className="text-indigo-200/60 text-sm mt-3 tracking-[0.2em] font-light uppercase">Khám phá các nguyên tố hoá học</p>
        </div>

        <div className="relative min-w-[1200px] pb-12 select-none flex justify-center">
            {/* Main Grid */}
            <div className="grid grid-cols-18 gap-2 auto-rows-[minmax(80px,auto)] relative" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
                
                {elements.map((element) => (
                    <button
                        key={element.number}
                        onClick={() => onSelectElement(element)}
                        className={`
                            group relative flex flex-col justify-between p-2 rounded-lg border backdrop-blur-md transition-all duration-300 ease-out
                            ${getCategoryStyles(element.category)}
                            h-[90px] w-full
                        `}
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos,
                        }}
                    >
                        <div className="flex justify-between items-start w-full leading-none">
                            <span className="text-xs opacity-50 font-mono group-hover:opacity-100 transition-opacity text-white">{element.number}</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md group-hover:scale-110 transition-transform origin-center">{element.symbol}</span>
                        <span className="text-[10px] truncate w-full opacity-70 group-hover:opacity-100 group-hover:text-white transition-opacity font-medium tracking-wide">{element.vietnameseName}</span>
                        
                        {/* Decorative Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-md pointer-events-none"></div>
                    </button>
                ))}
            </div>
        </div>

        {/* Legend */}
        <div className="w-full max-w-5xl border-t border-white/5 pt-8 bg-gradient-to-b from-transparent to-black/20 rounded-b-3xl pb-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-4">
                {Object.values(ElementCategory).filter(c => c !== ElementCategory.UNKNOWN).map((cat) => {
                     const style = getCategoryStyles(cat);
                     // Extract bg color class for the dot
                     const bgClass = style.match(/bg-[\w-]+/)?.[0] || 'bg-gray-500';
                     const borderClass = style.match(/border-[\w-]+/)?.[0] || 'border-gray-500';
                     
                     return (
                        <div key={cat} className="flex items-center gap-3 group cursor-default p-2 rounded-lg hover:bg-white/5 transition-colors">
                            <div className={`w-3 h-3 rounded-full ${bgClass} ${borderClass} border shadow-sm group-hover:scale-125 transition-transform`}></div>
                            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase group-hover:text-gray-200 transition-colors">{cat}</span>
                        </div>
                     );
                })}
            </div>
        </div>
    </div>
  );
};

export default PeriodicTable;
