"use client"


import {useState} from "react";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { MdMenu } from 'react-icons/md';
import Image from "next/image";
import {RxAvatar} from "react-icons/rx";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {navItems} from "@/constants/items";
import Link from "next/link";

export default function MobileNavigation() {

    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <header className="flex h-[60px] justify-end px-5 sm:hidden !important">
            {/*<Image*/}
            {/*    src="/assets/icons/logo-full-brand.svg"*/}
            {/*    alt="logo"*/}
            {/*    width={120}*/}
            {/*    height={52}*/}
            {/*    className="h-auto"*/}
            {/*/>*/}

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <MdMenu size={44} className={cn("transition-opacity duration-300",{
                        "opacity-0 pointer-events-none": open,
                        "opacity-100": !open
                    })}/>
                </SheetTrigger>
                <SheetContent className="h-screen px-3 pt-0 !important z-20 bg-white-200">
                    <SheetTitle>
                        <div
                            className="my-3 flex items-center gap-2 rounded-full p-1 text-white-100 sm:justify-center lg:justify-start lg:p-3 !important">
                            <RxAvatar size={44} style={{color: "gray"}}
                                      className="aspect-square rounded-full object-cover"/>

                            <div className="sm:hidden lg:block">
                                <p>Kim Jae woo</p>
                                <p>ta3844@ucware.net</p>
                            </div>
                        </div>
                        <Separator className={" w-full mb-4 bg-gray-200"}/>
                    </SheetTitle>
                    <nav className="h5 mt-9 flex-1 gap-1">
                        <ul className="flex flex-col flex-1 gap-6">
                            {navItems.map(({url, name, icon: Icon}) => (
                                <Link href={url} key={name}>
                                    <li className="flex flex-row items-center gap-5 px-5">
                                        <Icon size={24} className={cn("w-6 filter invert opacity-25", {
                                            "invert-0 opacity-100": url === pathname
                                        })}/>
                                        <p className="">{name}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}