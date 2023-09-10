import Image from "next/image";
import Link from "next/link";
import { BsGrid } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { useRouter } from "next/router";


const sidebarItems = [
    {
      name: "Home",
      href: "/",
      icon: BsGrid,
    },
    {
      name: "About",
      href: "/about",
      icon: BsPeople,
    },
  ];
  
export default function Sidebar() {
    return (
        <div>
            <aside className="sidebar">
                <div className="sidebar__top">
                    <Image
                        src="https://i.imgur.com/HI8Xaw5.png"
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        alt="logo" />
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({name, href, icon: Icon}) => (
                        <li className="sidebar__item" key={name}>
                            <Link href={href} className="sidebar__link">
                                <span className="sidebar__icon"><Icon/></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
        
    );
}