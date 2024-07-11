import instance from "@/app/lib/services/instance/instance";
import {Project, ProjectResponse} from "@/app/lib/services/model/project";

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
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
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
        const res = await instance.get<ProjectResponse>(
            `/project/show`,
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getRecommendationProject() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    category: "software development",
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
        const res = await instance.get<ProjectResponse>(
            `/project/show/${id}`,
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

// async function storeProject(request: ProjectRequest ) : Promise<ProjectStore> {
//     try {
//         const res = await instance.post<ProjectStoreResponse>(
//             `/project/store`,
//             {
//                 title: request.title,
//                 description: request.description,
//                 max_participant: request.max_participant,
//                 category: request.category,
//                 is_paid: request.is_paid
//             }
//         );
//         return res.data.data;
//     }catch (err) {
//         throw err;
//     }
// }


export {
    getAllProject,
    getFeedProject,
    getCurrentProject,
    getProjectById,
    getRecommendationProject
}
