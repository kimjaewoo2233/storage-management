import { MdDashboard } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";

export const navItems = [
    {
        name: "Dashboard",
        icon: MdDashboard, // 아이콘 컴포넌트를 직접 설정
        url: "/",
    },
    {
        name: "Documents",
        icon: AiOutlineFile, // 아이콘 컴포넌트를 직접 설정
        url: "/document",
    },
];