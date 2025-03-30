import {SubmitHandler, useForm} from "react-hook-form";
import {Category} from "../../types/Category.ts";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../../styles/AddForm.css";
import {Expense} from "../../types/Expense.ts";
import {expenses} from "../../data/mockData.ts";


type ExpenseFormFields = {
    description: string;
    value: number;
    category: string;
};

export default function AddExpenseForm() {

    const navigate = useNavigate();
    const location = useLocation();
    const category = (location.state as { category: Category })?.category;

    if (!category) {
        console.error("Category not found");
        navigate("/expenses");
    }

    const {register, handleSubmit, formState: {errors}} = useForm<ExpenseFormFields>({
        defaultValues: {
            category: "",
        },
    });

    const onSubmit: SubmitHandler<ExpenseFormFields> = (data) => {
        let expense: Expense = {
            id: 1,
            description: data.description,
            date: new Date().toISOString(),
            value: data.value,
            categoryId: category?.id
        };


        console.log("Expense Submitted:", JSON.stringify(expense, null, 2));
        expenses.push(expense)
        navigate("/expenses");
    };

    const handleBackClick = () => {
        navigate("/expenses");
    }


    return (
        <div className="add-form">
            <button className="back-btn" onClick={handleBackClick}>
                &larr; Back
            </button>

            <h2> {category?.name} </h2>

            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label">
                    Description
                    <input
                        {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 1,
                                message: "Description cannot be empty",
                            },
                        })}
                        type="text"
                        placeholder="Expense Description"
                        className="form-input"
                    />

                </label>
                {errors.description && (<p className="error">{errors.description.message}</p>)}

                <label className="form-label">
                    Value
                    <input
                        {...register("value", {
                            min: {
                            value: 0.01,
                            message: "Value must be greater than 0",
                        },
                            required: "Value is required",
                            pattern: {
                                value: /^\d+(\.\d{1,2})?$/,
                                message: "Value must have max 2 decimal places",
                            },
                        })}
                        type="number"
                        step="0.01"
                        placeholder="Expense Value"
                        className="form-input"
                    />
                    {errors.value && <p className="error">{errors.value.message}</p>}
                </label>
                {errors.value && <p className="error">{errors.value.message}</p>}

                <button type="submit" className="submit-btn">
                    Add
                </button>
            </form>
        </div>

    );
}