import axios from "axios"
import { useQuery } from "react-query"
import { API_ADVETISEMENT } from "../config/endpoint"

const getAdvestise = async () => {
    const { data } = await axios.get(API_ADVETISEMENT)

    return data
}

const useAdvestimentQuery = () => {
    return useQuery(['advestise'], getAdvestise, {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        staleTime: 50000000
    })
}

export default useAdvestimentQuery