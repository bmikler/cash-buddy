import {Frequency} from "./Frequency.ts";

export interface Category {
    id: String;
    name: string;
    frequency: Frequency;
    limit: number;
}