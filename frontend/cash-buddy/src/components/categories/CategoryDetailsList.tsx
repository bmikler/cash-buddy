import CategoryDetails from "./CategoryDetails.tsx";
import "../../styles/Categories.css"
import {categories} from "../../data/mockData.ts";
import { useNavigate } from "react-router-dom";




export default function CategoryDetailsList() {

    const navigate = useNavigate();

    const handleAddCategoryClick = () => {
        navigate("/categories/add");
    };

    return (
        <div className="list-wrapper">
            <button className="add-category-btn" onClick={handleAddCategoryClick}>+ Add Category</button>

            <div className="category-list-container">
                {categories.map((cat, index) => (
                    <div className="list-item-card" key={index}>
                        <CategoryDetails
                            description={cat.name}
                            limit={cat.limit}
                            type={cat.frequency}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}