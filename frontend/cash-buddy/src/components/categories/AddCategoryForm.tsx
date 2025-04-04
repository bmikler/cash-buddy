import {SubmitHandler, useForm} from 'react-hook-form';
import {Frequency} from '../../types/Frequency';
import {useNavigate} from 'react-router-dom';
import {categories} from '../../data/mockData';
import {Category} from '../../types/Category';


type FormFields = {
    name: string;
    limit: number;
    frequency: Frequency;
};

export default function AddCategoryForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormFields>({
        defaultValues: {frequency: Frequency.MONTHLY},
    });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        const newCat: Category = {
            id: 1,
            name: data.name,
            limit: data.limit,
            frequency: data.frequency,
        };
        categories.push(newCat);
        navigate('/categories');
    };

    const handleBackClick = () => {
        navigate('/categories');
    };

    return (
        <div className="form-card">
            <button className="back-btn" onClick={handleBackClick}>
                &larr; Back
            </button>

            <h2>Add New Category</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="form-label">Category Name:</label>
                    <input
                        {...register('name', {
                            required: "Category name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters long",
                            }
                        })}
                        type="text"
                        className="form-input"
                        placeholder="e.g. Groceries"
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Limit:</label>
                    <input
                        {...register('limit', {
                            required: "Limit is required",
                            min: {
                                value: 0.01,
                                message: "Limit must be greater than 0",
                            },
                            pattern: {
                                value: /^\d+(\.\d{1,2})?$/,
                                message: "Limit must have max 2 decimal places",
                            }
                        })}
                        type="number"
                        step="0.01"
                        className="form-input"
                        placeholder="e.g. 300.00"
                    />
                    {errors.limit && <p className="error-message">{errors.limit.message}</p>}
                </div>

                <div className="form-group">
                    <label className="form-label">Frequency:</label>
                    <select
                        {...register('frequency', {required: "Frequency is required" })}
                        className="form-select"
                    >
                    </select>
                    {errors.frequency && (
                        <p className="error-message">{errors.frequency.message}</p>
                    )}
                </div>

                <button className="form-btn" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}