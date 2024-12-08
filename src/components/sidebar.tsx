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
        <aside className="remove-scrollbar h-screen w-[90px] overflow-auto px-5 py-7 flex flex-col lg:w-[280px] xl:w-[325px] shadow-md">
            <Link href={"/"}>
                {/*<Image*/}
                {/*    src="/assets/icons/logo-full-brand.svg"*/}
                {/*    alt="logo"*/}
                {/*    width={160}*/}
                {/*    height={50}*/}
                {/*    className="hidden h-auto lg:block"*/}
                {/*/>*/}

                <div className={"flex flex-row items-center gap-5"}>
                    <Image
                        src="/assets/icons/logo-brand.svg"
                        alt="logo"
                        width={52}
                        height={52}
                        // className="lg:hidden"
                    />
                    <span className="font-bold text-[18px] text-gray-500">UC Storage</span>
                </div>
            </Link>


            <nav className="h5 mt-9 flex-1 gap-1">
                <ul className="flex flex-col flex-1 gap-6">
                    {navItems.map(({ url, name, icon: Icon}) => (
                        <Link href={url} key={name}>
                            <li className={ cn("flex text-gray-500 gap-4 rounded-xl lg:w-full justify-center lg:justify-start items-center h5 lg:px-[30px] h-[52px] lg:rounded-full transition-all duration-300 ease-in-out",{
                                "bg-primary rounded-xl shadow-search": url === pathname
                            })}>
                                <Icon size={24} className={cn("w-6 filter invert opacity-25 transition-transform duration-300 ease-in-out",{
                                    "invert-0 opacity-100 text-white-100": url === pathname
                                })}/>
                                <p className={cn("hidden lg:block opacity-25 transition-transform duration-300 ease-in-out", {
                                    "text-white-100 opacity-100": url === pathname
                                })}>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}