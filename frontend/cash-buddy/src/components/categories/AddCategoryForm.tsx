import { SubmitHandler, useForm } from "react-hook-form";
import { Frequency } from "../../types/Frequency";
import { useNavigate } from "react-router-dom";
import "../../styles/AddCategoryForm.css";
import {categories} from "../../data/mockData.ts";
import {Category} from "../../types/Category.ts";

type FormFields = {
    name: string;
    limit: number;
    frequency: Frequency;
};

export default function AddCategoryForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        defaultValues: { frequency: Frequency.MONTHLY },
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        let category: Category = {id: 1, name: data.name, limit: data.limit, frequency: data.frequency}
        categories.push(category)
        navigate("/categories");
        // You’d typically do an API call or something else here
    };

    // Handler for the “Back” button
    const handleBackClick = () => {
        navigate("/categories");
    };

    return (
        <div className="add-category-form">
            {/* Back button at the top */}
            <button className="back-btn" onClick={handleBackClick}>
                &larr; Back
            </button>

            <h2>Add New Category</h2>

            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                {/* NAME Field */}
                <label className="form-label">
                    Category Name
                    <input
                        {...register("name", {
                            required: "Category name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters long",
                            },
                        })}
                        type="text"
                        placeholder="e.g. Groceries"
                        className="form-input"
                    />
                </label>
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                {/* LIMIT Field */}
                <label className="form-label">
                    Limit
                    <input
                        {...register("limit", {
                            required: "Limit is required",
                            min: {
                                value: 0.01,
                                message: "Limit must be greater than 0",
                            },
                            pattern: {
                                value: /^\d+(\.\d{1,2})?$/,
                                message: "Limit must have max 2 decimal places",
                            },
                        })}
                        type="number"
                        step="0.01"
                        placeholder="e.g. 300"
                        className="form-input"
                    />
                </label>
                {errors.limit && <p className="error-message">{errors.limit.message}</p>}

                {/* FREQUENCY Field */}
                <label className="form-label">
                    Frequency
                    <select
                        {...register("frequency", { required: "Frequency is required" })}
                        className="form-select"
                    >
                        {Object.values(Frequency).map((freq) => (
                            <option key={freq} value={freq}>
                                {freq}
                            </option>
                        ))}
                    </select>
                </label>
                {errors.frequency && (
                    <p className="error-message">{errors.frequency.message}</p>
                )}

                <button type="submit" className="submit-btn">
                    Add
                </button>
            </form>
        </div>
    );
}