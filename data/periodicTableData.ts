
import { ElementData, ElementCategory } from '../types';

export const elements: ElementData[] = [
  { 
    number: 1, symbol: 'H', name: 'Hydrogen', vietnameseName: 'Hiđro', category: ElementCategory.REACTIVE_NONMETAL, group: 1, period: 1, xpos: 1, ypos: 1,
    summary: 'Nguyên tố nhẹ nhất và phổ biến nhất trong vũ trụ. Ở điều kiện thường, nó là một chất khí không màu, không mùi, dễ cháy.',
    atomicMass: '1.008 u', standardState: 'Khí', electronConfiguration: '1s1',
    applications: ['Nhiên liệu tên lửa', 'Sản xuất amoniac (phân bón)', 'Hydro hóa dầu thực vật', 'Hàn cắt kim loại', 'Nhiên liệu sạch (pin nhiên liệu)']
  },
  { 
    number: 2, symbol: 'He', name: 'Helium', vietnameseName: 'Heli', category: ElementCategory.NOBLE_GAS, group: 18, period: 1, xpos: 18, ypos: 1,
    summary: 'Khí hiếm nhẹ thứ hai, trơ về mặt hóa học, không màu, không mùi. Có điểm sôi thấp nhất trong tất cả các nguyên tố.',
    atomicMass: '4.0026 u', standardState: 'Khí', electronConfiguration: '1s2',
    applications: ['Bơm bóng bay, khinh khí cầu', 'Làm mát nam châm siêu dẫn (máy MRI)', 'Khí lặn biển sâu', 'Môi trường khí trơ khi hàn', 'Laser Helium-Neon']
  },
  { 
    number: 3, symbol: 'Li', name: 'Lithium', vietnameseName: 'Liti', category: ElementCategory.ALKALI_METAL, group: 1, period: 2, xpos: 1, ypos: 2,
    summary: 'Kim loại mềm, màu trắng bạc, nhẹ nhất trong các kim loại. Phản ứng mạnh với nước.',
    atomicMass: '6.94 u', standardState: 'Rắn', electronConfiguration: '[He] 2s1',
    applications: ['Pin sạc (Lithium-ion)', 'Điều trị rối loạn lưỡng cực', 'Hợp kim nhôm cho hàng không', 'Dầu mỡ bôi trơn chịu nhiệt', 'Gốm sứ chịu nhiệt']
  },
  { 
    number: 4, symbol: 'Be', name: 'Beryllium', vietnameseName: 'Beryli', category: ElementCategory.ALKALINE_EARTH_METAL, group: 2, period: 2, xpos: 2, ypos: 2,
    summary: 'Kim loại nhẹ, cứng, màu xám thép. Rất độc hại nhưng có tính chất vật lý tuyệt vời.',
    atomicMass: '9.0122 u', standardState: 'Rắn', electronConfiguration: '[He] 2s2',
    applications: ['Cửa sổ tia X', 'Lò phản ứng hạt nhân', 'Hợp kim đồng-beryllium (dụng cụ không đánh lửa)', 'Vệ tinh và tàu vũ trụ', 'Loa âm thanh cao cấp']
  },
  { 
    number: 5, symbol: 'B', name: 'Boron', vietnameseName: 'Bo', category: ElementCategory.METALLOID, group: 13, period: 2, xpos: 13, ypos: 2,
    summary: 'Á kim màu đen cứng, khó nóng chảy. Rất quan trọng cho sự phát triển của thực vật.',
    atomicMass: '10.81 u', standardState: 'Rắn', electronConfiguration: '[He] 2s2 2p1',
    applications: ['Thủy tinh chịu nhiệt (Borosilicate)', 'Chất tẩy rửa (Borax)', 'Gậy đánh golf, cần câu', 'Áo giáp chống đạn', 'Pháo hoa (màu xanh lá)']
  },
  { 
    number: 6, symbol: 'C', name: 'Carbon', vietnameseName: 'Cacbon', category: ElementCategory.REACTIVE_NONMETAL, group: 14, period: 2, xpos: 14, ypos: 2,
    summary: 'Nguyên tố của sự sống, tồn tại ở nhiều dạng thù hình như than chì, kim cương.',
    atomicMass: '12.011 u', standardState: 'Rắn', electronConfiguration: '[He] 2s2 2p2',
    applications: ['Nhiên liệu hóa thạch (than đá)', 'Trang sức (kim cương)', 'Ruột bút chì (than chì)', 'Sợi carbon siêu bền', 'Lọc nước và không khí (than hoạt tính)']
  },
  { 
    number: 7, symbol: 'N', name: 'Nitrogen', vietnameseName: 'Nitơ', category: ElementCategory.REACTIVE_NONMETAL, group: 15, period: 2, xpos: 15, ypos: 2,
    summary: 'Khí không màu, chiếm 78% khí quyển Trái đất. Cần thiết cho mọi sinh vật sống.',
    atomicMass: '14.007 u', standardState: 'Khí', electronConfiguration: '[He] 2s2 2p3',
    applications: ['Sản xuất phân bón', 'Bảo quản thực phẩm', 'Làm lạnh sâu (Nitơ lỏng)', 'Thuốc nổ (TNT)', 'Bơm lốp xe đua']
  },
  { 
    number: 8, symbol: 'O', name: 'Oxygen', vietnameseName: 'Oxy', category: ElementCategory.REACTIVE_NONMETAL, group: 16, period: 2, xpos: 16, ypos: 2,
    summary: 'Khí không màu, duy trì sự cháy và sự sống. Chiếm 21% khí quyển.',
    atomicMass: '15.999 u', standardState: 'Khí', electronConfiguration: '[He] 2s2 2p4',
    applications: ['Hô hấp y tế', 'Sản xuất thép', 'Hàn cắt kim loại', 'Xử lý nước', 'Nhiên liệu tên lửa']
  },
  { 
    number: 9, symbol: 'F', name: 'Fluorine', vietnameseName: 'Flo', category: ElementCategory.REACTIVE_NONMETAL, group: 17, period: 2, xpos: 17, ypos: 2,
    summary: 'Khí màu vàng nhạt, có tính phản ứng mạnh nhất trong tất cả các nguyên tố.',
    atomicMass: '18.998 u', standardState: 'Khí', electronConfiguration: '[He] 2s2 2p5',
    applications: ['Kem đánh răng (chống sâu răng)', 'Chất chống dính (Teflon)', 'Làm lạnh (CFCs - hạn chế)', 'Làm giàu uranium', 'Khắc thủy tinh']
  },
  { 
    number: 10, symbol: 'Ne', name: 'Neon', vietnameseName: 'Neon', category: ElementCategory.NOBLE_GAS, group: 18, period: 2, xpos: 18, ypos: 2,
    summary: 'Khí hiếm không màu, phát ra ánh sáng đỏ cam rực rỡ khi có dòng điện chạy qua.',
    atomicMass: '20.180 u', standardState: 'Khí', electronConfiguration: '[He] 2s2 2p6',
    applications: ['Đèn quảng cáo neon', 'Đèn báo điện áp cao', 'Laser khí', 'Môi trường làm lạnh', 'Thu lôi']
  },
  { 
    number: 11, symbol: 'Na', name: 'Sodium', vietnameseName: 'Natri', category: ElementCategory.ALKALI_METAL, group: 1, period: 3, xpos: 1, ypos: 3,
    summary: 'Kim loại kiềm mềm, màu trắng bạc, phản ứng mãnh liệt với nước.',
    atomicMass: '22.990 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s1',
    applications: ['Muối ăn (NaCl)', 'Đèn đường (ánh sáng vàng)', 'Xà phòng và chất tẩy rửa', 'Chất làm mát lò phản ứng hạt nhân', 'Sản xuất thủy tinh']
  },
  { 
    number: 12, symbol: 'Mg', name: 'Magnesium', vietnameseName: 'Magiê', category: ElementCategory.ALKALINE_EARTH_METAL, group: 2, period: 3, xpos: 2, ypos: 3,
    summary: 'Kim loại nhẹ, màu trắng bạc. Cháy tạo ra ánh sáng trắng chói lòa.',
    atomicMass: '24.305 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s2',
    applications: ['Vỏ laptop, máy ảnh (hợp kim nhẹ)', 'Pháo hoa (ánh sáng trắng)', 'Thuốc chống axit dạ dày', 'Vành xe ô tô thể thao', 'Phụ gia phân bón']
  },
  { 
    number: 13, symbol: 'Al', name: 'Aluminium', vietnameseName: 'Nhôm', category: ElementCategory.POST_TRANSITION_METAL, group: 13, period: 3, xpos: 13, ypos: 3,
    summary: 'Kim loại nhẹ, màu trắng bạc, chống ăn mòn tốt và dẫn điện tốt.',
    atomicMass: '26.982 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s2 3p1',
    applications: ['Vỏ máy bay', 'Lon nước ngọt', 'Giấy bạc gói thực phẩm', 'Khung cửa sổ', 'Dây dẫn điện cao thế']
  },
  { 
    number: 14, symbol: 'Si', name: 'Silicon', vietnameseName: 'Silic', category: ElementCategory.METALLOID, group: 14, period: 3, xpos: 14, ypos: 3,
    summary: 'Á kim màu xám, là nguyên tố phổ biến thứ hai trong vỏ Trái đất (sau Oxy).',
    atomicMass: '28.085 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s2 3p2',
    applications: ['Chip máy tính (bán dẫn)', 'Tấm pin năng lượng mặt trời', 'Thủy tinh và gốm sứ', 'Chất bịt kín silicone', 'Xi măng']
  },
  { 
    number: 15, symbol: 'P', name: 'Phosphorus', vietnameseName: 'Photpho', category: ElementCategory.REACTIVE_NONMETAL, group: 15, period: 3, xpos: 15, ypos: 3,
    summary: 'Phi kim đa dạng, tồn tại ở dạng trắng (độc, dễ cháy) hoặc đỏ (ổn định hơn).',
    atomicMass: '30.974 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s2 3p3',
    applications: ['Đầu que diêm', 'Phân bón (Super lân)', 'Pháo hoa', 'Thuốc trừ sâu', 'Sản xuất thép']
  },
  { 
    number: 16, symbol: 'S', name: 'Sulfur', vietnameseName: 'Lưu huỳnh', category: ElementCategory.REACTIVE_NONMETAL, group: 16, period: 3, xpos: 16, ypos: 3,
    summary: 'Phi kim màu vàng chanh, giòn, không mùi (nhưng hợp chất thường có mùi hôi).',
    atomicMass: '32.06 u', standardState: 'Rắn', electronConfiguration: '[Ne] 3s2 3p4',
    applications: ['Sản xuất axit sunfuric', 'Lưu hóa cao su', 'Thuốc diệt nấm', 'Thuốc súng', 'Xà phòng trị mụn']
  },
  { 
    number: 17, symbol: 'Cl', name: 'Chlorine', vietnameseName: 'Clo', category: ElementCategory.REACTIVE_NONMETAL, group: 17, period: 3, xpos: 17, ypos: 3,
    summary: 'Khí màu vàng lục, mùi hắc, độc hại nhưng có tính sát khuẩn mạnh.',
    atomicMass: '35.45 u', standardState: 'Khí', electronConfiguration: '[Ne] 3s2 3p5',
    applications: ['Khử trùng nước hồ bơi', 'Sản xuất nhựa PVC', 'Thuốc tẩy trắng', 'Muối ăn', 'Dược phẩm']
  },
  { 
    number: 18, symbol: 'Ar', name: 'Argon', vietnameseName: 'Argon', category: ElementCategory.NOBLE_GAS, group: 18, period: 3, xpos: 18, ypos: 3,
    summary: 'Khí hiếm phổ biến nhất trên Trái đất (gần 1% khí quyển), hoàn toàn trơ.',
    atomicMass: '39.948 u', standardState: 'Khí', electronConfiguration: '[Ne] 3s2 3p6',
    applications: ['Bóng đèn sợi đốt', 'Hàn kim loại (khí bảo vệ)', 'Cửa sổ cách nhiệt', 'Bảo quản tài liệu cổ', 'Laser y tế']
  },
  { 
    number: 19, symbol: 'K', name: 'Potassium', vietnameseName: 'Kali', category: ElementCategory.ALKALI_METAL, group: 1, period: 4, xpos: 1, ypos: 4,
    summary: 'Kim loại kiềm mềm, màu trắng bạc, phản ứng rất mạnh với nước.',
    atomicMass: '39.098 u', standardState: 'Rắn', electronConfiguration: '[Ar] 4s1',
    applications: ['Phân bón (NPK)', 'Xà phòng lỏng', 'Muối i-ốt (Kali iodua)', 'Thuốc nổ', 'Hoạt động thần kinh']
  },
  { 
    number: 20, symbol: 'Ca', name: 'Calcium', vietnameseName: 'Canxi', category: ElementCategory.ALKALINE_EARTH_METAL, group: 2, period: 4, xpos: 2, ypos: 4,
    summary: 'Kim loại thiết yếu cho sự sống, thành phần chính của xương và răng.',
    atomicMass: '40.078 u', standardState: 'Rắn', electronConfiguration: '[Ar] 4s2',
    applications: ['Xi măng và bê tông', 'Thạch cao', 'Xương và răng giả', 'Khử lưu huỳnh trong thép', 'Phấn viết bảng']
  },
  { 
    number: 21, symbol: 'Sc', name: 'Scandium', vietnameseName: 'Scandi', category: ElementCategory.TRANSITION_METAL, group: 3, period: 4, xpos: 3, ypos: 4,
    summary: 'Kim loại chuyển tiếp nhẹ, hiếm, thường được tìm thấy cùng các nguyên tố đất hiếm.',
    atomicMass: '44.956 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d1 4s2',
    applications: ['Khung xe đạp siêu nhẹ', 'Gậy bóng chày', 'Đèn sân vận động', 'Công nghệ hàng không vũ trụ', 'Đầu dò dầu khí']
  },
  { 
    number: 22, symbol: 'Ti', name: 'Titanium', vietnameseName: 'Titan', category: ElementCategory.TRANSITION_METAL, group: 4, period: 4, xpos: 4, ypos: 4,
    summary: 'Kim loại siêu bền, nhẹ, chống ăn mòn tuyệt vời, tương thích sinh học.',
    atomicMass: '47.867 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d2 4s2',
    applications: ['Khớp nhân tạo, nẹp xương', 'Vỏ máy bay, tàu ngầm', 'Gọng kính', 'Sơn trắng (Titan oxit)', 'Gậy golf']
  },
  { 
    number: 23, symbol: 'V', name: 'Vanadium', vietnameseName: 'Vanadi', category: ElementCategory.TRANSITION_METAL, group: 5, period: 4, xpos: 5, ypos: 4,
    summary: 'Kim loại cứng, màu xám bạc, chủ yếu dùng làm hợp kim thép.',
    atomicMass: '50.942 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d3 4s2',
    applications: ['Dụng cụ cầm tay (thép vanadi)', 'Lò xo giảm xóc', 'Động cơ phản lực', 'Sản xuất axit sunfuric', 'Pin lữu trữ năng lượng']
  },
  { 
    number: 24, symbol: 'Cr', name: 'Chromium', vietnameseName: 'Crom', category: ElementCategory.TRANSITION_METAL, group: 6, period: 4, xpos: 6, ypos: 4,
    summary: 'Kim loại cứng, bóng, chống gỉ rất tốt.',
    atomicMass: '51.996 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d5 4s1',
    applications: ['Mạ crom trang trí', 'Thép không gỉ (Inox)', 'Thuốc nhuộm', 'Băng từ', 'Ngọc hồng bảo (tạo màu đỏ)']
  },
  { 
    number: 25, symbol: 'Mn', name: 'Manganese', vietnameseName: 'Mangan', category: ElementCategory.TRANSITION_METAL, group: 7, period: 4, xpos: 7, ypos: 4,
    summary: 'Kim loại màu xám hồng, giòn, quan trọng trong sản xuất thép.',
    atomicMass: '54.938 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d5 4s2',
    applications: ['Đường ray xe lửa', 'Lon nước nhôm (làm cứng)', 'Pin kiềm', 'Sản xuất thép', 'Thuốc tím khử trùng']
  },
  { 
    number: 26, symbol: 'Fe', name: 'Iron', vietnameseName: 'Sắt', category: ElementCategory.TRANSITION_METAL, group: 8, period: 4, xpos: 8, ypos: 4,
    summary: 'Kim loại quan trọng nhất trong lịch sử nhân loại, thành phần chính của máu.',
    atomicMass: '55.845 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d6 4s2',
    applications: ['Xây dựng (bê tông cốt thép)', 'Ô tô, tàu thuyền', 'Công cụ lao động', 'Vận chuyển oxy trong máu', 'Nam châm']
  },
  { 
    number: 27, symbol: 'Co', name: 'Cobalt', vietnameseName: 'Coban', category: ElementCategory.TRANSITION_METAL, group: 9, period: 4, xpos: 9, ypos: 4,
    summary: 'Kim loại từ tính, cứng, màu bạc xanh. Hợp chất của nó có màu xanh đặc trưng.',
    atomicMass: '58.933 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d7 4s2',
    applications: ['Pin xe điện', 'Nam châm vĩnh cửu', 'Động cơ tua bin khí', 'Màu xanh gốm sứ', 'Điều trị ung thư (Cobalt-60)']
  },
  { 
    number: 28, symbol: 'Ni', name: 'Nickel', vietnameseName: 'Niken', category: ElementCategory.TRANSITION_METAL, group: 10, period: 4, xpos: 10, ypos: 4,
    summary: 'Kim loại màu trắng bạc, bóng, chống ăn mòn tốt.',
    atomicMass: '58.693 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d8 4s2',
    applications: ['Tiền xu', 'Thép không gỉ', 'Pin sạc', 'Dây đàn guitar', 'Xúc tác hydro hóa dầu']
  },
  { 
    number: 29, symbol: 'Cu', name: 'Copper', vietnameseName: 'Đồng', category: ElementCategory.TRANSITION_METAL, group: 11, period: 4, xpos: 11, ypos: 4,
    summary: 'Kim loại màu đỏ cam, dẫn điện và nhiệt rất tốt, kháng khuẩn tự nhiên.',
    atomicMass: '63.546 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s1',
    applications: ['Dây điện', 'Ống nước', 'Tượng đúc (hợp kim đồng)', 'Tiền xu', 'Bo mạch điện tử']
  },
  { 
    number: 30, symbol: 'Zn', name: 'Zinc', vietnameseName: 'Kẽm', category: ElementCategory.TRANSITION_METAL, group: 12, period: 4, xpos: 12, ypos: 4,
    summary: 'Kim loại màu xám xanh, thường dùng để bảo vệ thép khỏi bị ăn mòn.',
    atomicMass: '65.38 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s2',
    applications: ['Mạ kẽm chống gỉ (tôn)', 'Pin kiềm', 'Đúc tiền', 'Kem chống nắng (Oxit kẽm)', 'Hợp kim đồng thau']
  },
  { 
    number: 31, symbol: 'Ga', name: 'Gallium', vietnameseName: 'Gali', category: ElementCategory.POST_TRANSITION_METAL, group: 13, period: 4, xpos: 13, ypos: 4,
    summary: 'Kim loại mềm, nóng chảy ngay trong lòng bàn tay (29.76°C).',
    atomicMass: '69.723 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s2 4p1',
    applications: ['Đèn LED (màu xanh)', 'Nhiệt kế y tế (thay thủy ngân)', 'Tấm pin mặt trời', 'Gương laze', 'Chất bán dẫn']
  },
  { 
    number: 32, symbol: 'Ge', name: 'Germanium', vietnameseName: 'Tecmani', category: ElementCategory.METALLOID, group: 14, period: 4, xpos: 14, ypos: 4,
    summary: 'Á kim màu xám trắng, tính chất tương tự Silic.',
    atomicMass: '72.630 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s2 4p2',
    applications: ['Sợi quang học', 'Ống kính camera hồng ngoại', 'Transistor đời đầu', 'Chất xúc tác nhựa', 'Pin mặt trời vệ tinh']
  },
  { 
    number: 33, symbol: 'As', name: 'Arsenic', vietnameseName: 'Asen', category: ElementCategory.METALLOID, group: 15, period: 4, xpos: 15, ypos: 4,
    summary: 'Á kim khét tiếng độc hại, nhưng cũng có ứng dụng công nghệ cao.',
    atomicMass: '74.922 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s2 4p3',
    applications: ['Thuốc diệt cỏ', 'Đèn LED', 'Chất bán dẫn (Gallium arsenide)', 'Bảo quản gỗ', 'Hợp kim ắc quy chì']
  },
  { 
    number: 34, symbol: 'Se', name: 'Selenium', vietnameseName: 'Selen', category: ElementCategory.REACTIVE_NONMETAL, group: 16, period: 4, xpos: 16, ypos: 4,
    summary: 'Phi kim có tính quang dẫn (dẫn điện khi có ánh sáng).',
    atomicMass: '78.971 u', standardState: 'Rắn', electronConfiguration: '[Ar] 3d10 4s2 4p4',
    applications: ['Máy photocopy', 'Cảm biến ánh sáng', 'Thủy tinh màu đỏ', 'Dầu gội trị gàu', 'Thực phẩm bổ sung']
  },
  { 
    number: 35, symbol: 'Br', name: 'Bromine', vietnameseName: 'Brom', category: ElementCategory.REACTIVE_NONMETAL, group: 17, period: 4, xpos: 17, ypos: 4,
    summary: 'Chất lỏng màu đỏ nâu, bốc khói, mùi hôi khó chịu. Là phi kim lỏng duy nhất.',
    atomicMass: '79.904 u', standardState: 'Lỏng', electronConfiguration: '[Ar] 3d10 4s2 4p5',
    applications: ['Chất chống cháy', 'Phim ảnh cũ', 'Thuốc trừ sâu', 'Khoan dầu khí', 'Dược phẩm']
  },
  { 
    number: 36, symbol: 'Kr', name: 'Krypton', vietnameseName: 'Krypton', category: ElementCategory.NOBLE_GAS, group: 18, period: 4, xpos: 18, ypos: 4,
    summary: 'Khí hiếm không màu, được dùng trong các loại đèn đặc biệt.',
    atomicMass: '83.798 u', standardState: 'Khí', electronConfiguration: '[Ar] 3d10 4s2 4p6',
    applications: ['Đèn flash máy ảnh', 'Đèn pha sân bay', 'Cửa sổ cách nhiệt cao cấp', 'Laser phẫu thuật mắt', 'Đèn huỳnh quang']
  },
  {
    number: 37, symbol: 'Rb', name: 'Rubidium', vietnameseName: 'Rubiđi', category: ElementCategory.ALKALI_METAL, group: 1, period: 5, xpos: 1, ypos: 5,
    summary: 'Kim loại kiềm rất mềm, phản ứng cực mạnh. Được dùng trong đồng hồ nguyên tử.',
    atomicMass: '85.468 u', standardState: 'Rắn', electronConfiguration: '[Kr] 5s1',
    applications: ['Đồng hồ nguyên tử (GPS)', 'Pháo hoa màu tím', 'Tế bào quang điện', 'Động cơ ion', 'Nghiên cứu y học']
  },
  {
    number: 38, symbol: 'Sr', name: 'Strontium', vietnameseName: 'Stronti', category: ElementCategory.ALKALINE_EARTH_METAL, group: 2, period: 5, xpos: 2, ypos: 5,
    summary: 'Kim loại kiềm thổ, cháy với ngọn lửa màu đỏ rực.',
    atomicMass: '87.62 u', standardState: 'Rắn', electronConfiguration: '[Kr] 5s2',
    applications: ['Pháo hoa đỏ', 'Sơn phát quang', 'Nam châm gốm', 'Sản xuất kẽm', 'Kem đánh răng (giảm ê buốt)']
  },
  {
    number: 39, symbol: 'Y', name: 'Yttrium', vietnameseName: 'Yttri', category: ElementCategory.TRANSITION_METAL, group: 3, period: 5, xpos: 3, ypos: 5,
    summary: 'Kim loại chuyển tiếp màu bạc, thường được phân loại là đất hiếm.',
    atomicMass: '88.906 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d1 5s2',
    applications: ['Đèn LED trắng', 'Thấu kính máy ảnh', 'Chất siêu dẫn', 'Laser y tế', 'Màn hình màu (photpho đỏ)']
  },
  {
    number: 40, symbol: 'Zr', name: 'Zirconium', vietnameseName: 'Zirconi', category: ElementCategory.TRANSITION_METAL, group: 4, period: 5, xpos: 4, ypos: 5,
    summary: 'Kim loại chuyển tiếp cứng, màu xám trắng, chịu ăn mòn cực tốt.',
    atomicMass: '91.224 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d2 5s2',
    applications: ['Vỏ thanh nhiên liệu hạt nhân', 'Đá giả kim cương (Zirconia)', 'Dao gốm', 'Chất chống mồ hôi', 'Lò phản ứng hóa học']
  },
  {
    number: 41, symbol: 'Nb', name: 'Niobium', vietnameseName: 'Niobi', category: ElementCategory.TRANSITION_METAL, group: 5, period: 5, xpos: 5, ypos: 5,
    summary: 'Kim loại màu xám, dẻo, thường dùng trong hợp kim siêu dẫn.',
    atomicMass: '92.906 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d4 5s1',
    applications: ['Nam châm siêu dẫn (MRI)', 'Động cơ tên lửa', 'Đường ống dẫn khí', 'Trang sức (không gây dị ứng)', 'Thép hợp kim']
  },
  {
    number: 42, symbol: 'Mo', name: 'Molybdenum', vietnameseName: 'Molipden', category: ElementCategory.TRANSITION_METAL, group: 6, period: 5, xpos: 6, ypos: 5,
    summary: 'Kim loại có điểm nóng chảy rất cao, cần thiết cho dinh dưỡng thực vật.',
    atomicMass: '95.95 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d5 5s1',
    applications: ['Thép chịu lực cao', 'Bộ phận lò nung', 'Chất bôi trơn', 'Điện cực lò thủy tinh', 'Xúc tác lọc dầu']
  },
  {
    number: 43, symbol: 'Tc', name: 'Technetium', vietnameseName: 'Tecneti', category: ElementCategory.TRANSITION_METAL, group: 7, period: 5, xpos: 7, ypos: 5,
    summary: 'Nguyên tố nhân tạo đầu tiên, phóng xạ, dùng trong chẩn đoán y tế.',
    atomicMass: '(98) u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d5 5s2',
    applications: ['Chụp ảnh y tế (xạ hình)', 'Truy tìm khối u', 'Nguồn tia beta chuẩn', 'Chống ăn mòn thép', 'Nghiên cứu hạt nhân']
  },
  {
    number: 44, symbol: 'Ru', name: 'Ruthenium', vietnameseName: 'Ruteni', category: ElementCategory.TRANSITION_METAL, group: 8, period: 5, xpos: 8, ypos: 5,
    summary: 'Kim loại quý hiếm, cứng, thuộc nhóm platin.',
    atomicMass: '101.07 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d7 5s1',
    applications: ['Đầu đọc ổ cứng', 'Bugi máy bay', 'Trang sức', 'Pin mặt trời', 'Chất xúc tác hóa học']
  },
  {
    number: 45, symbol: 'Rh', name: 'Rhodium', vietnameseName: 'Rhodi', category: ElementCategory.TRANSITION_METAL, group: 9, period: 5, xpos: 9, ypos: 5,
    summary: 'Kim loại quý hiếm nhất và đắt nhất, có độ phản chiếu cao.',
    atomicMass: '102.91 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d8 5s1',
    applications: ['Bộ chuyển đổi xúc tác ô tô', 'Gương đèn pha', 'Mạ trang sức (bạch kim)', 'Tiếp điểm điện', 'Động cơ tua bin']
  },
  {
    number: 46, symbol: 'Pd', name: 'Palladium', vietnameseName: 'Paladi', category: ElementCategory.TRANSITION_METAL, group: 10, period: 5, xpos: 10, ypos: 5,
    summary: 'Kim loại quý màu trắng bạc, có khả năng hấp thụ hydro đáng kinh ngạc.',
    atomicMass: '106.42 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10',
    applications: ['Bộ lọc khí thải xe hơi', 'Điện tử (tụ điện gốm)', 'Trang sức (vàng trắng)', 'Nha khoa', 'Lọc khí hydro']
  },
  {
    number: 47, symbol: 'Ag', name: 'Silver', vietnameseName: 'Bạc', category: ElementCategory.TRANSITION_METAL, group: 11, period: 5, xpos: 11, ypos: 5,
    summary: 'Kim loại dẫn điện và dẫn nhiệt tốt nhất trong tất cả kim loại.',
    atomicMass: '107.87 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s1',
    applications: ['Trang sức, đồ gia dụng', 'Tấm pin mặt trời', 'Mạch điện tử', 'Gương soi', 'Diệt khuẩn y tế']
  },
  {
    number: 48, symbol: 'Cd', name: 'Cadmium', vietnameseName: 'Cadimi', category: ElementCategory.TRANSITION_METAL, group: 12, period: 5, xpos: 12, ypos: 5,
    summary: 'Kim loại mềm, màu trắng xanh, rất độc hại.',
    atomicMass: '112.41 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2',
    applications: ['Pin sạc (Ni-Cd)', 'Sắc tố màu vàng/đỏ', 'Mạ chống ăn mòn', 'Thanh điều khiển lò hạt nhân', 'Pin mặt trời màng mỏng']
  },
  {
    number: 49, symbol: 'In', name: 'Indium', vietnameseName: 'Indi', category: ElementCategory.POST_TRANSITION_METAL, group: 13, period: 5, xpos: 13, ypos: 5,
    summary: 'Kim loại rất mềm, dính, dùng trong màn hình cảm ứng.',
    atomicMass: '114.82 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2 5p1',
    applications: ['Màn hình cảm ứng (ITO)', 'Màn hình LCD', 'Hợp kim nhiệt độ nóng chảy thấp', 'Đèn LED', 'Chất bán dẫn']
  },
  {
    number: 50, symbol: 'Sn', name: 'Tin', vietnameseName: 'Thiếc', category: ElementCategory.POST_TRANSITION_METAL, group: 14, period: 5, xpos: 14, ypos: 5,
    summary: 'Kim loại màu bạc, không độc, dễ uốn.',
    atomicMass: '118.71 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2 5p2',
    applications: ['Hàn điện tử', 'Hộp đựng thực phẩm', 'Hợp kim đồng thau', 'Kính phẳng', 'Mạ thép']
  },
  {
    number: 51, symbol: 'Sb', name: 'Antimony', vietnameseName: 'Antimon', category: ElementCategory.METALLOID, group: 15, period: 5, xpos: 15, ypos: 5,
    summary: 'Á kim màu xám bạc, giòn.',
    atomicMass: '121.76 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2 5p3',
    applications: ['Chất chống cháy', 'Ắc quy chì-axit', 'Đạn dược', 'Vi mạch', 'Thủy tinh']
  },
  {
    number: 52, symbol: 'Te', name: 'Tellurium', vietnameseName: 'Telua', category: ElementCategory.METALLOID, group: 16, period: 5, xpos: 16, ypos: 5,
    summary: 'Á kim màu trắng bạc, hiếm gặp.',
    atomicMass: '127.60 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2 5p4',
    applications: ['Pin mặt trời (CdTe)', 'Đĩa quang (DVD-RW)', 'Làm cứng chì', 'Chip nhớ', 'Cao su']
  },
  {
    number: 53, symbol: 'I', name: 'Iodine', vietnameseName: 'Iốt', category: ElementCategory.REACTIVE_NONMETAL, group: 17, period: 5, xpos: 17, ypos: 5,
    summary: 'Chất rắn màu tím đen, thăng hoa thành khí màu tím. Cần thiết cho tuyến giáp.',
    atomicMass: '126.90 u', standardState: 'Rắn', electronConfiguration: '[Kr] 4d10 5s2 5p5',
    applications: ['Thuốc sát trùng', 'Thực phẩm bổ sung', 'Thuốc cản quang', 'Đèn pha ô tô', 'Phòng phóng xạ']
  },
  {
    number: 54, symbol: 'Xe', name: 'Xenon', vietnameseName: 'Xenon', category: ElementCategory.NOBLE_GAS, group: 18, period: 5, xpos: 18, ypos: 5,
    summary: 'Khí hiếm nặng, không màu. Phát sáng màu xanh lam trong điện trường.',
    atomicMass: '131.29 u', standardState: 'Khí', electronConfiguration: '[Kr] 4d10 5s2 5p6',
    applications: ['Đèn pha xe hơi cao cấp', 'Đèn chiếu phim IMAX', 'Động cơ đẩy ion', 'Thuốc mê y tế', 'Đèn flash cường độ cao']
  },
  {
    number: 55, symbol: 'Cs', name: 'Caesium', vietnameseName: 'Xesi', category: ElementCategory.ALKALI_METAL, group: 1, period: 6, xpos: 1, ypos: 6,
    summary: 'Kim loại hoạt động mạnh nhất, nóng chảy ngay trong ngày nắng ấm.',
    atomicMass: '132.91 u', standardState: 'Rắn', electronConfiguration: '[Xe] 6s1',
    applications: ['Đồng hồ nguyên tử (chuẩn thời gian)', 'Khoan dầu khí', 'Thiết bị nhìn đêm', 'Pin quang điện', 'Động cơ ion']
  },
  {
    number: 56, symbol: 'Ba', name: 'Barium', vietnameseName: 'Bari', category: ElementCategory.ALKALINE_EARTH_METAL, group: 2, period: 6, xpos: 2, ypos: 6,
    summary: 'Kim loại kiềm thổ mềm, nặng, phản ứng mạnh.',
    atomicMass: '137.33 u', standardState: 'Rắn', electronConfiguration: '[Xe] 6s2',
    applications: ['Chụp X-quang dạ dày', 'Pháo hoa màu xanh lá', 'Dung dịch khoan dầu', 'Sơn trắng', 'Thủy tinh quang học']
  },
  {
    number: 57, symbol: 'La', name: 'Lanthanum', vietnameseName: 'Lantan', category: ElementCategory.LANTHANIDE, group: 3, period: 6, xpos: 4, ypos: 9,
    summary: 'Kim loại đất hiếm đầu tiên, mềm, dễ cắt.',
    atomicMass: '138.91 u', standardState: 'Rắn', electronConfiguration: '[Xe] 5d1 6s2',
    applications: ['Pin xe lai (Hybrid)', 'Ống kính máy ảnh', 'Đá đánh lửa', 'Xúc tác lọc dầu', 'Kính nhìn đêm']
  },
  {
    number: 72, symbol: 'Hf', name: 'Hafnium', vietnameseName: 'Hafni', category: ElementCategory.TRANSITION_METAL, group: 4, period: 6, xpos: 4, ypos: 6,
    summary: 'Kim loại chuyển tiếp bóng, chống ăn mòn, hấp thụ neutron tốt.',
    atomicMass: '178.49 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d2 6s2',
    applications: ['Thanh điều khiển lò hạt nhân', 'Chip vi xử lý (Intel)', 'Mỏ cắt plasma', 'Hợp kim chịu nhiệt', 'Tàu ngầm hạt nhân']
  },
  {
    number: 73, symbol: 'Ta', name: 'Tantalum', vietnameseName: 'Tantan', category: ElementCategory.TRANSITION_METAL, group: 5, period: 6, xpos: 5, ypos: 6,
    summary: 'Kim loại hiếm, cứng, xanh xám, chống ăn mòn tuyệt đối.',
    atomicMass: '180.95 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d3 6s2',
    applications: ['Tụ điện điện thoại', 'Dụng cụ phẫu thuật', 'Cấy ghép xương', 'Động cơ phản lực', 'Thấu kính máy ảnh']
  },
  {
    number: 74, symbol: 'W', name: 'Tungsten', vietnameseName: 'Vonfram', category: ElementCategory.TRANSITION_METAL, group: 6, period: 6, xpos: 6, ypos: 6,
    summary: 'Kim loại có điểm nóng chảy cao nhất (3422°C). Rất cứng và nặng.',
    atomicMass: '183.84 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d4 6s2',
    applications: ['Dây tóc bóng đèn', 'Mũi khoan, dụng cụ cắt', 'Vỏ tên lửa', 'Điện cực hàn', 'Đối trọng máy bay']
  },
  {
    number: 78, symbol: 'Pt', name: 'Platinum', vietnameseName: 'Bạch kim', category: ElementCategory.TRANSITION_METAL, group: 10, period: 6, xpos: 10, ypos: 6,
    summary: 'Kim loại quý, nặng, dẻo, không bị oxy hóa.',
    atomicMass: '195.08 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d9 6s1',
    applications: ['Trang sức cao cấp', 'Xúc tác ô tô', 'Máy tạo nhịp tim', 'Thuốc chống ung thư', 'Đầu tư vàng/bạch kim']
  },
  {
    number: 79, symbol: 'Au', name: 'Gold', vietnameseName: 'Vàng', category: ElementCategory.TRANSITION_METAL, group: 11, period: 6, xpos: 11, ypos: 6,
    summary: 'Kim loại quý màu vàng, dẻo nhất, không bị ăn mòn. Biểu tượng của sự giàu có.',
    atomicMass: '196.97 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d10 6s1',
    applications: ['Trang sức, tiền tệ', 'Đầu nối điện tử', 'Răng giả', 'Kính phi hành gia (chắn bức xạ)', 'Điều trị viêm khớp']
  },
  {
    number: 80, symbol: 'Hg', name: 'Mercury', vietnameseName: 'Thủy ngân', category: ElementCategory.TRANSITION_METAL, group: 12, period: 6, xpos: 12, ypos: 6,
    summary: 'Kim loại duy nhất ở dạng lỏng ở nhiệt độ thường. Rất độc.',
    atomicMass: '200.59 u', standardState: 'Lỏng', electronConfiguration: '[Xe] 4f14 5d10 6s2',
    applications: ['Nhiệt kế (đời cũ)', 'Đèn huỳnh quang', 'Công tắc điện', 'Khai thác vàng (thủ công)', 'Nha khoa (trám Amalgam)']
  },
  {
    number: 82, symbol: 'Pb', name: 'Lead', vietnameseName: 'Chì', category: ElementCategory.POST_TRANSITION_METAL, group: 14, period: 6, xpos: 14, ypos: 6,
    summary: 'Kim loại nặng, mềm, độc hại, chắn bức xạ tốt.',
    atomicMass: '207.2 u', standardState: 'Rắn', electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2',
    applications: ['Ắc quy ô tô', 'Chắn tia X', 'Đạn dược', 'Trọng lượng cân bằng', 'Hàn (đã hạn chế)']
  },
  {
    number: 92, symbol: 'U', name: 'Uranium', vietnameseName: 'Urani', category: ElementCategory.ACTINIDE, group: 3, period: 7, xpos: 7, ypos: 10,
    summary: 'Kim loại phóng xạ nặng, nguồn nhiên liệu hạt nhân chính.',
    atomicMass: '238.03 u', standardState: 'Rắn', electronConfiguration: '[Rn] 5f3 6d1 7s2',
    applications: ['Nhiên liệu nhà máy điện hạt nhân', 'Vũ khí hạt nhân', 'Áo giáp xe tăng (Urani nghèo)', 'Đạn xuyên giáp', 'Định tuổi đất đá']
  },
  // Add placeholder data for remaining elements to ensure app functionality
  ...[
    // Period 6 Lanthanides
    { n: 58, s: 'Ce', na: 'Cerium', vn: 'Xeri', c: ElementCategory.LANTHANIDE },
    { n: 59, s: 'Pr', na: 'Praseodymium', vn: 'Praseodymi', c: ElementCategory.LANTHANIDE },
    { n: 60, s: 'Nd', na: 'Neodymium', vn: 'Neodymi', c: ElementCategory.LANTHANIDE },
    { n: 61, s: 'Pm', na: 'Promethium', vn: 'Prometi', c: ElementCategory.LANTHANIDE },
    { n: 62, s: 'Sm', na: 'Samarium', vn: 'Samari', c: ElementCategory.LANTHANIDE },
    { n: 63, s: 'Eu', na: 'Europium', vn: 'Europi', c: ElementCategory.LANTHANIDE },
    { n: 64, s: 'Gd', na: 'Gadolinium', vn: 'Gadolini', c: ElementCategory.LANTHANIDE },
    { n: 65, s: 'Tb', na: 'Terbium', vn: 'Tecbi', c: ElementCategory.LANTHANIDE },
    { n: 66, s: 'Dy', na: 'Dysprosium', vn: 'Dysprosi', c: ElementCategory.LANTHANIDE },
    { n: 67, s: 'Ho', na: 'Holmium', vn: 'Holmi', c: ElementCategory.LANTHANIDE },
    { n: 68, s: 'Er', na: 'Erbium', vn: 'Erbi', c: ElementCategory.LANTHANIDE },
    { n: 69, s: 'Tm', na: 'Thulium', vn: 'Thuli', c: ElementCategory.LANTHANIDE },
    { n: 70, s: 'Yb', na: 'Ytterbium', vn: 'Ytterbi', c: ElementCategory.LANTHANIDE },
    { n: 71, s: 'Lu', na: 'Lutetium', vn: 'Luteti', c: ElementCategory.LANTHANIDE },
    // Period 6 Transition/Post
    { n: 75, s: 'Re', na: 'Rhenium', vn: 'Reni', c: ElementCategory.TRANSITION_METAL },
    { n: 76, s: 'Os', na: 'Osmium', vn: 'Osmi', c: ElementCategory.TRANSITION_METAL },
    { n: 77, s: 'Ir', na: 'Iridium', vn: 'Iridi', c: ElementCategory.TRANSITION_METAL },
    { n: 81, s: 'Tl', na: 'Thallium', vn: 'Tali', c: ElementCategory.POST_TRANSITION_METAL },
    { n: 83, s: 'Bi', na: 'Bismuth', vn: 'Bismut', c: ElementCategory.POST_TRANSITION_METAL },
    { n: 84, s: 'Po', na: 'Polonium', vn: 'Poloni', c: ElementCategory.POST_TRANSITION_METAL },
    { n: 85, s: 'At', na: 'Astatine', vn: 'Astatin', c: ElementCategory.METALLOID },
    { n: 86, s: 'Rn', na: 'Radon', vn: 'Radon', c: ElementCategory.NOBLE_GAS },
    // Period 7
    { n: 87, s: 'Fr', na: 'Francium', vn: 'Franci', c: ElementCategory.ALKALI_METAL },
    { n: 88, s: 'Ra', na: 'Radium', vn: 'Radi', c: ElementCategory.ALKALINE_EARTH_METAL },
    { n: 89, s: 'Ac', na: 'Actinium', vn: 'Actini', c: ElementCategory.ACTINIDE },
    { n: 90, s: 'Th', na: 'Thorium', vn: 'Thori', c: ElementCategory.ACTINIDE },
    { n: 91, s: 'Pa', na: 'Protactinium', vn: 'Protactini', c: ElementCategory.ACTINIDE },
    { n: 93, s: 'Np', na: 'Neptunium', vn: 'Neptuni', c: ElementCategory.ACTINIDE },
    { n: 94, s: 'Pu', na: 'Plutonium', vn: 'Plutoni', c: ElementCategory.ACTINIDE },
    { n: 95, s: 'Am', na: 'Americium', vn: 'Americi', c: ElementCategory.ACTINIDE },
    { n: 96, s: 'Cm', na: 'Curium', vn: 'Curi', c: ElementCategory.ACTINIDE },
    { n: 97, s: 'Bk', na: 'Berkelium', vn: 'Berkeli', c: ElementCategory.ACTINIDE },
    { n: 98, s: 'Cf', na: 'Californium', vn: 'Californi', c: ElementCategory.ACTINIDE },
    { n: 99, s: 'Es', na: 'Einsteinium', vn: 'Einsteini', c: ElementCategory.ACTINIDE },
    { n: 100, s: 'Fm', na: 'Fermium', vn: 'Fecmi', c: ElementCategory.ACTINIDE },
    { n: 101, s: 'Md', na: 'Mendelevium', vn: 'Mendelevi', c: ElementCategory.ACTINIDE },
    { n: 102, s: 'No', na: 'Nobelium', vn: 'Nobeli', c: ElementCategory.ACTINIDE },
    { n: 103, s: 'Lr', na: 'Lawrencium', vn: 'Lawrenci', c: ElementCategory.ACTINIDE },
    { n: 104, s: 'Rf', na: 'Rutherfordium', vn: 'Rutherfordi', c: ElementCategory.TRANSITION_METAL },
    { n: 105, s: 'Db', na: 'Dubnium', vn: 'Dubni', c: ElementCategory.TRANSITION_METAL },
    { n: 106, s: 'Sg', na: 'Seaborgium', vn: 'Seaborgi', c: ElementCategory.TRANSITION_METAL },
    { n: 107, s: 'Bh', na: 'Bohrium', vn: 'Bohri', c: ElementCategory.TRANSITION_METAL },
    { n: 108, s: 'Hs', na: 'Hassium', vn: 'Hassi', c: ElementCategory.TRANSITION_METAL },
    { n: 109, s: 'Mt', na: 'Meitnerium', vn: 'Meitneri', c: ElementCategory.UNKNOWN },
    { n: 110, s: 'Ds', na: 'Darmstadtium', vn: 'Darmstadti', c: ElementCategory.UNKNOWN },
    { n: 111, s: 'Rg', na: 'Roentgenium', vn: 'Roentgeni', c: ElementCategory.UNKNOWN },
    { n: 112, s: 'Cn', na: 'Copernicium', vn: 'Copernici', c: ElementCategory.TRANSITION_METAL },
    { n: 113, s: 'Nh', na: 'Nihonium', vn: 'Nihoni', c: ElementCategory.UNKNOWN },
    { n: 114, s: 'Fl', na: 'Flerovium', vn: 'Flerovi', c: ElementCategory.POST_TRANSITION_METAL },
    { n: 115, s: 'Mc', na: 'Moscovium', vn: 'Moscovi', c: ElementCategory.UNKNOWN },
    { n: 116, s: 'Lv', na: 'Livermorium', vn: 'Livermori', c: ElementCategory.UNKNOWN },
    { n: 117, s: 'Ts', na: 'Tennessine', vn: 'Tennessine', c: ElementCategory.UNKNOWN },
    { n: 118, s: 'Og', na: 'Oganesson', vn: 'Oganesson', c: ElementCategory.UNKNOWN },
  ].map((e) => ({
    number: e.n, symbol: e.s, name: e.na, vietnameseName: e.vn, category: e.c,
    group: 0, period: 0, xpos: 0, ypos: 0, // Will be filled by logic if needed, but for list mapping, coordinate logic below handles it
    summary: 'Nguyên tố hiếm hoặc tổng hợp nhân tạo. Được sử dụng chủ yếu trong nghiên cứu khoa học cơ bản.',
    atomicMass: `(${e.n * 2 + 30}) u`, // Estimate
    standardState: e.c === ElementCategory.NOBLE_GAS ? 'Khí' : 'Rắn',
    electronConfiguration: `[Rn] ...`,
    applications: ['Nghiên cứu hạt nhân', 'Tổng hợp nguyên tố mới', 'Vật lý năng lượng cao', 'Y học hạt nhân', 'Khoa học vật liệu']
  }))
].map(el => {
    // Re-apply positioning logic for the generated ones based on number to ensure grid works
    if (el.xpos === 0) {
        // Simple mapping for demonstration of the rest
        if (el.number >= 58 && el.number <= 71) { el.group = 3; el.period = 6; el.xpos = el.number - 58 + 5; el.ypos = 9; }
        else if (el.number >= 89 && el.number <= 103) { el.group = 3; el.period = 7; el.xpos = el.number - 89 + 4; el.ypos = 10; }
        else if (el.number >= 104) { el.group = el.number - 104 + 4; el.period = 7; el.xpos = el.group; el.ypos = 7; }
        else if (el.number === 84) { el.group = 16; el.period = 6; el.xpos = 16; el.ypos = 6; }
        else if (el.number === 85) { el.group = 17; el.period = 6; el.xpos = 17; el.ypos = 6; }
        else if (el.number === 86) { el.group = 18; el.period = 6; el.xpos = 18; el.ypos = 6; }
        // ... extend logic as needed for others
    }
    // Fix specific positions for common gaps
    const posMap: Record<number, [number, number]> = {
        57: [4, 9], 58: [5, 9], 59: [6, 9], 60: [7, 9], 61: [8, 9], 62: [9, 9], 63: [10, 9], 64: [11, 9], 65: [12, 9], 66: [13, 9], 67: [14, 9], 68: [15, 9], 69: [16, 9], 70: [17, 9], 71: [18, 9],
        87: [1, 7], 88: [2, 7], // Francium and Radium corrected
        89: [4, 10], 90: [5, 10], 91: [6, 10], 92: [7, 10], 93: [8, 10], 94: [9, 10], 95: [10, 10], 96: [11, 10], 97: [12, 10], 98: [13, 10], 99: [14, 10], 100: [15, 10], 101: [16, 10], 102: [17, 10], 103: [18, 10],
        // Period 6 post-lanthanide
        72: [4, 6], 75: [7, 6], 76: [8, 6], 77: [9, 6], 81: [13, 6], 83: [15, 6], 84: [16, 6], 85: [17, 6], 86: [18, 6],
        // Period 7 post-actinide
        104: [4, 7], 105: [5, 7], 106: [6, 7], 107: [7, 7], 108: [8, 7], 109: [9, 7], 110: [10, 7], 111: [11, 7], 112: [12, 7], 113: [13, 7], 114: [14, 7], 115: [15, 7], 116: [16, 7], 117: [17, 7], 118: [18, 7]
    };
    if (posMap[el.number]) {
        el.xpos = posMap[el.number][0];
        el.ypos = posMap[el.number][1];
    }
    return el;
});
