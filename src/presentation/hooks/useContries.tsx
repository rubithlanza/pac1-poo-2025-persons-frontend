import { useState } from "react"
import { getPaginationCountriesAction } from "../../core/actions/countries/get-pagination-countries.action";
import { useQuery } from "@tanstack/react-query";

export const useCountries =()=>{

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setsearchTerm] = useState("");

    const countriesPaginationQuery = useQuery({
        queryKey: ["xountries", page, pageSize, searchTerm], //unique key for the query
        queryFn: () => getPaginationCountriesAction(page, pageSize, searchTerm),
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus : false,
    });

    return{
        //Properties
        page,
        pageSize,
        searchTerm,
        countriesPaginationQuery,

        //Methods
        setPage,
        setPageSize,
        setsearchTerm
    }
}