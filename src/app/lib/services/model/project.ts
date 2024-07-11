export interface ProjectResponse {
    data: Project[];
}

export interface DetailProjectResponse {
    data: Project;
}

export interface Project {
    id:              string;
    room_id:         string;
    owner:           string;
    title:           string;
    description:     string;
    max_participant: number;
    category:        string;
    image:           string;
    is_owner:        boolean;
    is_paid:         boolean;
    is_finish:       boolean;
    is_joined:       boolean;
    participant:     Participant[];
    skill:           Skill[];
    tool:            Tool[];
}

export interface Participant {
    id:        string;
    full_name: string;
    expertise: string;

}

export interface Skill {
    id:           string;
    name:         string;
    is_available: number;
}

export interface Tool {
    id:   string;
    name: string;
}
