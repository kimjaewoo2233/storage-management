import {ReactNode} from "react";
import {redirect} from "next/navigation";
import Sidebar from "@/components/sidebar";


export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: ReactNode}){
    // const currentUser = await getCurrentUser();
    //
    // if(!currentUser) return redirect("/sign-in");

    return (
        <main className="flex h-screen">
            <Sidebar/>
            <section className="flex h-full flex-1 flex-col">
                <div className="remove-scrollbar h-full flex-1 overflow-auto bg-light-400 px-5 py-7  sm:mr-7 sm:rounded-[30px] md:mb-7 md:px-9 md:py-10 !important">
                    {children}
                </div>
            </section>
        </main>
    )
}