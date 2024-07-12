// types.ts
export interface PortfolioPlatform {
    id: string;
    full_name: string;
    name: string;
    url: string;
}

export interface Expertise {
    id: string;
    full_name: string;
    name: string;
}

export interface UserData {
    id: string;
    full_name: string;
    email: string;
    age: number | null;
    job: string | null;
    profile_picture: string;
    profile_background: string | null;
    expertise: Expertise[];
    portfolio_platform: PortfolioPlatform[];
}

export interface CurrentUserResponse {
    data: UserData;
}

export interface PortofolioResponse {
    name: string | null;
    url: string | null;
}
