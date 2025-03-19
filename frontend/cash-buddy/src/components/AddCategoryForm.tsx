import '../styles/forms.css';
import { SubmitHandler, useForm } from "react-hook-form";
import {Frequency} from "../types/Frequency.ts";

type FormFields = {
    name: string;
    limit: number;
    frequency: Frequency;
}

export default function AddCategoryForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        defaultValues: { frequency: Frequency.MONTHLY }
    });

    const onSubmit: SubmitHandler<FormFields> = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: "Category name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters long" }
                    })}
                    type="text"
                    placeholder="Category Name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input
                    {...register("limit", {
                        required: "Limit is required",
                        min: { value: 0.01, message: "Limit must be greater than 0" },
                        pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Limit must have max 2 decimal places" }
                    })}
                    type="number"
                    step="0.01"
                    placeholder="Limit"
                />
                {errors.limit && <p className="error">{errors.limit.message}</p>}

                <select {...register("frequency", { required: "Frequency is required" })}>
                    {Object.values(Frequency).map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                    ))}
                </select>
                {errors.frequency && <p className="error">{errors.frequency.message}</p>}

                <button type="submit">Add</button>
            </form>
        </div>
    );
}