import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Category } from '../../types/Category';
import { Expense } from '../../types/Expense';
import { expenses } from '../../data/mockData';

type ExpenseFormFields = {
    description: string;
    value: number;
};

export default function AddExpenseForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = (location.state as { category: Category })?.category;

    if (!category) {
        console.error('Category not found');
        navigate('/expenses');
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ExpenseFormFields>({
        defaultValues: {
        }
    });

    const onSubmit: SubmitHandler<ExpenseFormFields> = (data) => {
        const newExpense: Expense = {
            id: 1,
            description: data.description,
            date: new Date().toISOString(),
            value: data.value,
            categoryId: category?.id
        };

        expenses.push(newExpense);
        navigate('/expenses');
    };

    const handleBackClick = () => {
        navigate('/expenses');
    };

    return (
        <div className="form-card">
            <button className="back-btn" onClick={handleBackClick}>
                &larr; Back
            </button>

            <h2>{category?.name}</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="form-label">
                        Description:
                    </label>
                    <input
                        {...register('description', {
                            required: 'Description is required',
                            minLength: {
                                value: 1,
                                message: 'Description cannot be empty'
                            }
                        })}
                        type="text"
                        placeholder="e.g. Coffee at Starbucks"
                        className="form-input"
                    />
                    {errors.description && (
                        <p className="error-message">{errors.description.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Value:
                    </label>
                    <input
                        {...register('value', {
                            required: 'Value is required',
                            min: {
                                value: 0.01,
                                message: 'Value must be greater than 0'
                            },
                            pattern: {
                                value: /^\d+(\.\d{1,2})?$/,
                                message: 'Value must have max 2 decimal places'
                            }
                        })}
                        type="number"
                        step="0.01"
                        placeholder="e.g. 9.99"
                        className="form-input"
                    />
                    {errors.value && (
                        <p className="error-message">{errors.value.message}</p>
                    )}
                </div>

                <button className="form-btn" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}