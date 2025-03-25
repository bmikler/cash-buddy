import {Frequency} from "../../types/Frequency.ts";

export default function CategoryDetails (
    props: {
        description: string,
        limit: number,
        type: Frequency
    }
) {
    return (
        <div>
            <p>{props.description}</p>
            <p>{props.type}</p>
            <p>{props.limit}</p>
        </div>
    );
}