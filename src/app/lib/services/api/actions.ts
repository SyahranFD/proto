import instance from "@/app/lib/services/instance/instance";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import {verifySession} from "@/app/lib/services/session/session";

interface ActionProps<T> {
  endpoint: string;
  params?: object;
  onSuccess?: (response: T) => void;
  onError?: (error: AxiosError) => Promise<unknown> | void;
}

export function useFetch<T>({ endpoint, params }: ActionProps<T>) {
  return useQuery<T, AxiosError>({
    queryFn: async () => {

      const {token} = await verifySession()
      const res = await instance.get<T>(endpoint, {
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
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
export function usePut<T, R>({ endpoint, onError, onSuccess }: ActionProps<T>) {
  return useMutation<T, AxiosError, R>({
    mutationFn: async (body: R) => {
      const res = await instance.put<T>(endpoint, body, {});
      return res.data;
    },
    onError,
    onSuccess,
  });
}
