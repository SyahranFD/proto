import instance from "@/app/lib/services/instance/instance";
import {Project, ProjectResponse} from "@/app/lib/services/model/project";
import { CurrentUserResponse, UserData } from "../model/current_user";

async function getCurrentUser() : Promise<UserData> {
    try {
        const res = await instance.get<CurrentUserResponse>(
            `/users/show`,
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}



export {
    getCurrentUser,
}
