// To parse this data:
//
//   import { Convert, ResponseModelProjectDetail } from "./file";
//
//   const responseModelProjectDetail = Convert.toResponseModelProjectDetail(json);

export interface ResponseModelProjectDetail {
    data: Data;
}

export interface Data {
    id:                    string;
    room_id:               string;
    owner:                 string;
    owner_profile_picture: string;
    owner_job:             null;
    title:                 string;
    description:           string;
    max_participant:       number;
    category:              string;
    image:                 null;
    is_owner:              boolean;
    is_paid:               boolean;
    is_finish:             boolean;
    is_joined:             boolean;
    is_participant:        boolean;
    participant:           any[];
    skill:                 any[];
    tool:                  any[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toResponseModelProjectDetail(json: string): ResponseModelProjectDetail {
        return JSON.parse(json);
    }

    public static responseModelProjectDetailToJson(value: ResponseModelProjectDetail): string {
        return JSON.stringify(value);
    }
}
