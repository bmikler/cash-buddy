// import { SubmitHandler, useForm } from "react-hook-form";
// // import "../../cash-buddy/src/styles/forms.css";
//
// // Mock list of categories (replace with real data from backend later)
// const mockCategories = ["Groceries", "Rent", "Utilities", "Leisure", "Travel"];
//
// type ExpenseFormFields = {
//     description: string;
//     value: number;
//     category: string;
// };
//
// export default function AddExpenseForm() {
//     const { register, handleSubmit, formState: { errors } } = useForm<ExpenseFormFields>({
//         defaultValues: {
//             category: "",
//         },
//     });
//
//     const onSubmit: SubmitHandler<ExpenseFormFields> = (data) => {
//         console.log("Expense Submitted:", data);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     {...register("description", {
//                         required: "Description is required",
//                         minLength: {
//                             value: 1,
//                             message: "Description cannot be empty",
//                         },
//                     })}
//                     type="text"
//                     placeholder="Expense Description"
//                 />
//                 {errors.description && (
//                     <p className="error">{errors.description.message}</p>
//                 )}
//
//                 <input
//                     {...register("value", {
//                         required: "Value is required",
//                         min: {
//                             value: 0.01,
//                             message: "Value must be greater than 0",
//                         },
//                         pattern: {
//                             value: /^\d+(\.\d{1,2})?$/,
//                             message: "Value must have max 2 decimal places",
//                         },
//                     })}
//                     type="number"
//                     step="0.01"
//                     placeholder="Expense Value"
//                 />
//                 {errors.value && <p className="error">{errors.value.message}</p>}
//
//                 <select
//                     {...register("category", {
//                         required: "Category is required",
//                     })}
//                 >
//                     <option value="">Select a Category</option>
//                     {mockCategories.map((cat) => (
//                         <option key={cat} value={cat}>
//                             {cat}
//                         </option>
//                     ))}
//                 </select>
//                 {errors.category && <p className="error">{errors.category.message}</p>}
//
//                 <button type="submit">Add Expense</button>
//             </form>
//         </div>
//     );
// }