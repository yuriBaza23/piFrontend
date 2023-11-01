import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BsPower } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuth";

interface SidebarItems {
    name: string;
    href: string;
    icon: any;
}
interface SidebarProps {
    sidebarItems?: SidebarItems[]; 
}
  
export default function Sidebar({sidebarItems}: SidebarProps) {
    const { signOut } = useAuth();
    const router = useRouter();

    const logout = useCallback(async () => {
        await signOut();
        router.push("/");
    }, [signOut, router])

    return (
        <div>
            <aside className="sidebar">
                <div>
                    <div className="sidebar__top">
                        <Image
                            src="https://i.imgur.com/HI8Xaw5.png"
                            width={80}
                            height={80}
                            className="sidebar__logo"
                            alt="logo" />
                    </div>
                    <ul className="sidebar__list">
                        {sidebarItems?.map(({name, href, icon: Icon}) => (
                            <li className="sidebar__item" key={name}>
                                <Link href={href} className="sidebar__link">
                                    <span className="sidebar__icon"><Icon/></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="sidebar__list">
                    <li className="sidebar__item" key='logout'>
                        <button className="sidebar__link power" onClick={logout}>
                            <span className="sidebar__icon"><BsPower/></span>
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
        
    );
}