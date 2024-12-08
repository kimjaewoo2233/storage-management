import Search from "@/components/search";


export default function Header() {


    return (
        <header className="sticky -top-px z-50  p-5 lg:py-7 hidden sm:flex">
            <Search/>
        </header>
    )
}