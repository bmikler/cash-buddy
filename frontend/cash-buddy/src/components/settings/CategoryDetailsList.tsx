
import { categories } from "../../data/mockData.ts";

export default function CategoryDetailsList() {

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <p>{category.name}</p>
                        <p>{category.frequency}</p>
                        <p>{category.limit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}