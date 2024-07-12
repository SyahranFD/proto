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

async function getFilterSearch(query: string) : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    search: query,
                    is_finish: 0
                }
            }

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

async function getSoftwareDevelopmentProject() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    category: "software development",
                    is_finish: 0
                }
            }

        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getProjectDesign() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    category: "design",
                    is_finish: 0
                }
            }

        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getProject2DAnimation() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    category: "2d animation",
                    is_finish: 0
                }
            }

        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}

async function getProject3DAnimation() : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
                params: {
                    category: "3d animation",
                    is_finish: 0
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

async function getRecommendationProject(category: string) : Promise<Project[]> {
    try {
        const res = await instance.get<ProjectResponse>(
            `/project/index`,
            {
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

async function sendRequestProject(projectId: string, expertise: string) : Promise<ProjectStore> {
    try {
        const res = await instance.post<ProjectStoreResponse>(
            `/project/${projectId}/send-request`,
            {
                expertise: expertise
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
    getSoftwareDevelopmentProject,
    getProjectDesign,
    getProject2DAnimation,
    getProject3DAnimation,
    getFilterSearch
}
