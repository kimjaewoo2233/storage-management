"use client"
import { usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {navItems} from "@/constants/items";
import {cn} from "@/lib/utils";

interface Props {
    fullName: string;
    avatar: string;
    email: string;
}

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <aside className="remove-scrollbar h-screen w-[90px] overflow-auto px-5 py-7 sm:flex lg:w-[280px] xl:w-[325px]">
            <Link href={"/"}>
                <Image
                    src="/assets/icons/logo-full-brand.svg"
                    alt="logo"
                    width={160}
                    height={50}
                    className="hidden h-auto lg:block"
                />

                <Image
                    src="/assets/icons/logo-brand.svg"
                    alt="logo"
                    width={52}
                    height={52}
                    className="lg:hidden"
                />
            </Link>


            <nav className="h5 mt-9 flex-1 gap-1">
                <ul className="flex flex-col flex-1 gap-6">
                    {navItems.map(({ url, name, icon: Icon}) => (
                        <Link href={url} key={name}>
                            <li className="flex text-gray-500 gap-4 rounded-xl lg:w-full justify-center lg:justify-start items-center h5 lg:px-[30px] h-[52px] lg:rounded-full">
                                <Icon size={24} className={cn("w-6 filter invert opacity-25",{
                                    "invert-0 opacity-100": url === pathname
                                })}/>
                                <p className="hidden lg:block">{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}