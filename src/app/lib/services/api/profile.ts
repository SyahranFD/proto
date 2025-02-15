import instance from "@/app/lib/services/instance/instance";
import { useFetch, usePost, usePut } from '@/app/lib/services/api/actions';
import { PortofolioResponse, CurrentUserResponse, UserData } from '@/app/lib/services/model/current_user';
import {verifySession} from "@/app/lib/services/session/session";

async function getCurrentUser() : Promise<UserData> {
    try {

        const {token} = await verifySession()
        const res = await instance.get<CurrentUserResponse>(
            `/users/show`,
            {
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            }
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

export const useUserData = () => {
    return useFetch<CurrentUserResponse>({
        endpoint: `/users/show`,
        onError: (error) => {
            console.error("Error fetching user data:", error);
        },
        onSuccess: (data) => {
            console.log("Fetched user data:", data);
        }
    });
};

export const postPortofolioPlatform = () => {
    return usePost<PortofolioResponse, object>({
        endpoint: `/users/portfolio-platform`,
        onError: (error) => {
            console.error("Error post data:", error);
        },
        onSuccess: (data) => {
            console.log("Succes post data:", data);
        }
    });
    
};

export const putEditUser = () => {
    return usePut<UserData, object>({
        endpoint: `/users/update`,
        onError: (error) => {
            console.error("Error post data:", error);
        },
        onSuccess: (data) => {
            console.log("Succes post data:", data);
        }
    });
    
};


export {
    getCurrentUser,
}
