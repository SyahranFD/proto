
interface ProjectRequest{
    title: string;
    description: string;
    max_participant: number;
    category: string;
    is_paid: number;
}

interface ProjectSkillRequest{
    name: string;
}

interface ProjectStoreResponse {
    data: ProjectStore
}

interface ProjectStore {
    title:           string;
    description:     string;
    max_participant: number;
    category:        string;
    is_paid:         boolean;
    id:              string;
    room_id:         string;
    user_id:         string;
    updated_at:      Date;
    created_at:      Date;
}
