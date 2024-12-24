import { FaLaptopCode, FaChartLine, FaBriefcase, FaGraduationCap, FaBuilding, FaMedkit, FaMusic, FaGamepad, FaFilm } from 'react-icons/fa';

const categoriesData = [
    {
        id: 1,
        icon: FaLaptopCode,
        title: 'Công nghệ',
        description: 'Tìm kiếm công việc liên quan đến công nghệ trong các ngành công nghiệp tiên tiến.',
    },
    {
        id: 2,
        icon: FaChartLine,
        title: 'Phân tích',
        description: 'Khám phá cơ hội trong phân tích dữ liệu và trí tuệ kinh doanh.',
    },
    {
        id: 3,
        icon: FaBriefcase,
        title: 'Kinh doanh',
        description: 'Khám phá các vị trí trong quản lý kinh doanh và doanh nghiệp.',
    },
    {
        id: 4,
        icon: FaGraduationCap,
        title: 'Giáo dục',
        description: 'Tìm kiếm cơ hội trong lĩnh vực giáo dục và học thuật.',
    },
    {
        id: 5,
        icon: FaBuilding,
        title: 'Bất động sản',
        description: 'Khám phá các vị trí trong phát triển và quản lý bất động sản.',
    },
    {
        id: 6,
        icon: FaMedkit,
        title: 'Chăm sóc sức khỏe',
        description: 'Khám phá công việc trong ngành y tế và chăm sóc sức khỏe.',
    },
    {
        id: 7,
        icon: FaMusic,
        title: 'Giải trí',
        description: 'Khám phá cơ hội trong lĩnh vực giải trí và âm nhạc.',
    },
    {
        id: 8,
        icon: FaGamepad,
        title: 'Trò chơi',
        description: 'Tìm kiếm công việc trong thế giới thú vị của trò chơi và thể thao điện tử.',
    },
    // {
    //     id: 9,
    //     icon: FaFilm,
    //     title: 'Truyền thông & Điện ảnh',
    //     description: 'Khám phá sự nghiệp trong sản xuất truyền thông và ngành điện ảnh.',
    // },
    // Thêm các danh mục khác khi cần
];

export default categoriesData;
