import {ReactNode} from "react";


export default function ContentLayout({ children }: { children: ReactNode}) {

    return (
        <section className={"w-full h-full bg-gray-400 rounded-2xl"}>
            {children}
        </section>
    )
}