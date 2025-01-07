import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../helpers/api";
import { IUser } from "../helpers/type";

export const User = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserById(id!).then(setUser);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">User Details</h1>
        
        {user ? (
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Name: </span>{user.name}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Surname: </span>{user.surname}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Age: </span>{user.age}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Salary: </span>${user.salary.toLocaleString()}
            </p>
          </div>
        ) : (
          <p className="text-center text-red-600">User not found</p>
        )}
      </div>
    </div>
  );
};
