import MobileNavigation from "@/components/mobile-navigation";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: ReactNode){

    return (
        <section className="flex h-screen">
            <Sidebar/>
            <section className="flex h-full flex-1 flex-col">
                <MobileNavigation/>
                <Header/>
                <div
                    className="remove-scrollbar h-full flex-1 overflow-auto bg-light-400  sm:rounded-[30px] sm:px-5 sm:py-5 !important">
                  <section className="w-full h-full bg-gray-400 rounded-2xl">
                      {children}
                  </section>
                </div>
            </section>
        </section>
    )
}