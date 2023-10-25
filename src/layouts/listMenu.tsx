// Mui Icon
import ArticleIcon from "@mui/icons-material/Article";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";

export interface listMenuType {
  path: string;
  title: string;
  icon: string;
  iconActive: string;
}

export const listMenu: listMenuType[] = [
  {
    path: "/students",
    title: "Students",
    icon: "/icons/sisOff.png",
    iconActive: "/icons/sisOn.png",
  },
  {
    path: "/subjects",
    title: "Subjects",
    icon: "/icons/bookOff.png",
    iconActive: "/icons/bookOn.png",
  },
];
