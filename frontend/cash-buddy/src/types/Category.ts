import {Frequency} from "./Frequency.ts";

export interface Category {
    id: number;
    name: string;
    frequency: Frequency;
    limit: number;
}