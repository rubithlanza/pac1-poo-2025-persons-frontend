import { useQuery } from "@tanstack/react-query";
import { countsAction } from "../../core/actions/statistics/counts.action";

export const UseStatistics = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['statistics/counts'], //Unique key
        queryFn: countsAction, //Funtion to fetch data 
        staleTime : 5000, //24 hours cache
        refetchOnWindowFocus : false, 
    });

    return {
        //Properties
        data,
        isLoading,
        error
        //Methons
    }
    
}