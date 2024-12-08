import {ReactNode} from "react";
import {redirect} from "next/navigation";
import Sidebar from "@/components/sidebar";
import MobileNavigation from "@/components/mobile-navigation";
import Header from "@/components/header";


export const dynamic = "force-dynamic";

interface ParallelRoutingProps {
    sidebar: ReactNode;
    content: ReactNode;
}

export default async function Layout({ content, sidebar }: ParallelRoutingProps){
    // const currentUser = await getCurrentUser();
    //
    // if(!currentUser) return redirect("/sign-in");

    return (
        <main className="flex h-screen">
            {sidebar || <div>Sidebar Placeholder</div>}
            <section className="flex h-full flex-1 flex-col">
                <MobileNavigation/>
                <Header/>
                <div className="remove-scrollbar h-full flex-1 overflow-auto bg-light-400  sm:rounded-[30px] sm:px-5 sm:py-5 !important">
                    {content}
                </div>
            </section>
        </main>
    )
}