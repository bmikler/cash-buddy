import {Frequency} from "../../types/Frequency.ts";

export default function CategoryDetails (
    props: {
        description: string,
        limit: number,
        type: Frequency
    }
) {
    return (
        <div className="category-details">
            <div className="details-top">
                <p className="description">{props.description}</p>

                {/* limit + edit button in one row */}
                <div className="limit-edit-row">
                    <p className="limit">
                        Limit: <span>{props.limit}</span>
                    </p>
                </div>
            </div>

            <p className="freq-type">
                Frequency: <span>{props.type}</span>
            </p>
        </div>
    );
}