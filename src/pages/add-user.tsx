import { useForm } from "react-hook-form";
import { InputUser } from "../helpers/type";
import { addNewUser } from "../helpers/api";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
    const {register,formState:{errors},reset,handleSubmit}  =useForm()
    const navigate = useNavigate()
    const onsubmit = (data: InputUser
    ) => {
        addNewUser(data).then(() => {
            reset()
            navigate("/")
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Add User</h1>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                </div>
                {/* Surname */}
                <div className="mb-4">
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                    <input
                        type="text"
                        id="surname"
                        {...register("surname", { required: "Surname is required" })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {errors.surname && <p className="text-red-600">{errors.surname.message}</p>}
                </div>
                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        id="age"
                        {...register("age", { required: "Age is required", min: { value: 0, message: "Age must be positive" } })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {errors.age && <p className="text-red-600">{errors.age.message}</p>}
                </div>
                {/* Salary */}
                <div className="mb-6">
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        {...register("salary", { required: "Salary is required", min: { value: 0, message: "Salary must be positive" } })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {errors.salary && <p className="text-red-600">{errors.salary.message}</p>}
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Add User
                </button>
            </form>
        </div>
    );      
};
