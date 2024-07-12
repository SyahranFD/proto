
"use server"
import instance from "@/app/lib/services/instance/instance";
import {Project, ProjectResponse} from "@/app/lib/services/model/project";
import {getItem} from "@/app/lib/services/session/local-storage";
import {verifySession} from "@/app/lib/services/session/session";


async function getAllProject() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getFeedProject() : Promise<Project[]> {
    try {
        const {token} = await verifySession()
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {

                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                params: {
                    is_finish: 1
                }
            }

        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getCurrentProject() : Promise<Project[]> {
    try {
        const {token} = await verifySession()
        const res = await instance.get<ProjectResponse>(
            `/project/show`,
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

async function getRecommendationProject(category: string) : Promise<Project[]> {
    try {
        const {token} = await verifySession()
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                params: {
                    category: category,
                    limit: 4,
                    is_finish: 0
                }
            }
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getProjectById(id: string) : Promise<Project> {
    try {

        const {token} = await verifySession()
        const res = await instance.get<ProjectResponse>(
            `/project/show/${id}`,
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

async function storeProject(request: ProjectRequest ) : Promise<ProjectStore> {
    try {
        const res = await instance.post<ProjectStoreResponse>(
            `/project/store`,
            {
                title: request.title,
                description: request.description,
                max_participant: request.max_participant,
                category: request.category,
                is_paid: request.is_paid
            }
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function sendRequestProject(projectId: string, expertise: string) : Promise<ProjectStore> {
    try {
        const {token} = await verifySession()
        const res = await instance.post<ProjectStoreResponse>(
            `/project/${projectId}/send-request`,

            {
                expertise: expertise
            },
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


export {
    getAllProject,
    getFeedProject,
    getCurrentProject,
    getProjectById,
    getRecommendationProject,
    sendRequestProject,
    storeProject
}
