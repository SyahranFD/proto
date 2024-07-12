"use client"


import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Input } from "@/app/components/ui/input";
import { useDebouncedCallback } from 'use-debounce';
import { IoSearch } from "react-icons/io5";

function InputSearch ()  {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
       
        const params = new URLSearchParams(searchParams);
        if (term) {
          params.set('query', term);
        } else {
          params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
      }, 300);


   return(
    <div className="w-full mt-8">
    <Input
    leftIcon={<IoSearch size={24}  className="mr-3"/>}
      placeholder="Search Project"
      className={"h-14 rounded-lg "}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  </div>
    
   );

}



export default InputSearch;