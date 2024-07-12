"use client"


import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {Input} from "@/app/components/ui/input";

import {IoSearch} from "react-icons/io5";

function InputSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();


    return (
        <div className="w-full mt-8">
            <Input
                leftIcon={<IoSearch size={24} className="mr-3"/>}
                placeholder="Search Project"
                className={"h-14 rounded-lg "}
                onChange={(e) => {
                    const params = new URLSearchParams(searchParams);
                    if (e.target.value) {
                        params.set('query', e.target.value);
                    } else {
                        params.delete('query');
                    }
                    replace(`${pathname}?${params.toString()}`);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>

    );

}


export default InputSearch;