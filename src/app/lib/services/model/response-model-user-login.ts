// To parse this data:
//
//   import { Convert, ResponseModelUserLogin } from "./file";
//
//   const responseModelUserLogin = Convert.toResponseModelUserLogin(json);

export interface ResponseModelUserLogin {
    data:  Data;
    token: string;
}

export interface Data {
    id:                 string;
    full_name:          string;
    email:              string;
    password:           string;
    age:                number;
    job:                string;
    profile_picture:    string;
    profile_background: string;
    expertise:          Expertise[];
    portfolio_platform: PortfolioPlatform[];
}

export interface Expertise {
    id:   string;
    name: string;
}

export interface PortfolioPlatform {
    id:   string;
    name: string;
    url:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toResponseModelUserLogin(json: string): ResponseModelUserLogin {
        return JSON.parse(json);
    }

    public static responseModelUserLoginToJson(value: ResponseModelUserLogin): string {
        return JSON.stringify(value);
    }
}
