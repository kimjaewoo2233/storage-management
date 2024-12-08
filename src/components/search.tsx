

import { IoIosSearch } from "react-icons/io";
import {Input} from "@/components/common/Input";


export default function Search() {

    return (
        <div className="w-full">
            <div className={"relative"}>
                <IoIosSearch size={24} className={"absolute left-2 top-1.5"}/>
                <Input
                    placeholder="Search..."
                    className="pl-10 body-2 w-[482px] rounded-[30px] placehoder:body-1  border-none shadow-black-40"
                />
            </div>
        </div>
    )
}