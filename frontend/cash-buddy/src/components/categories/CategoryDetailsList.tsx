import {useNavigate} from 'react-router-dom';
import {categories} from '../../data/mockData';
import CategoryDetails from './CategoryDetails';


export default function CategoryDetailsList() {
    const navigate = useNavigate();

    const handleAddCategoryClick = () => {
        navigate('/categories/add');
    };

    return (
        <div className="centered-container">
            <div className="list-container">
                <div className="list-actions">
                    <button
                        className="btn btn-center"
                        onClick={handleAddCategoryClick}
                    >
                        + Add Category
                    </button>
                </div>

                {categories.map((cat, index) => (
                    <div key={index} className="list-item">
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