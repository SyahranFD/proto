import instance from "@/app/lib/services/instance/instance";
import {AxiosError} from "axios";
import {useMutation, useQuery} from "react-query";

interface ActionProps<T> {
    endpoint: string;
    params?: object;
    onSuccess?: (response: T) => void;
    onError?: (error: AxiosError) => Promise<unknown> | void;
}

export function useFetch<T>({endpoint, params}: ActionProps<T>) {
    return useQuery<T, AxiosError>({
        queryFn: async () => {
            const res = await instance.get<T>(endpoint, {

                headers: {
                },
                params,
            });


            return res.data;
        },
        retry: false,
        refetchOnWindowFocus: false,
        queryKey: [endpoint, params],
    });
}

export function usePost<T, R>({
                                  endpoint,
                                  onError,
                                  onSuccess,

                              }: ActionProps<T>) {
    return useMutation<T, AxiosError, R>({
        mutationFn: async (body: R) => {
            const res = await instance.post<T>(endpoint, body, {});
            return res.data;
        },
        onError,
        onSuccess,
    });
}