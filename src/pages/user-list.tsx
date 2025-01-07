import { useState } from "react";
import { IUser } from "../helpers/type";
import { useEffect } from "react";
import { getAllUsers,deleteUser} from "../helpers/api";
import { Link } from "react-router-dom";
export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

     const handleDelete = (id:string) =>{
      deleteUser(id)
      .then(response => {
          setUsers(users.filter((user) => user.id !== id ))
      })
    }
  return (
    <>
     <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">User List</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-300"
            >
              <div className="mb-4">
                <Link
                  to={`/user/${user.id}`}
                  className="text-indigo-600 hover:underline text-lg font-medium"
                >
                  View Info
                </Link>
              </div>
              <div className="text-center mb-6">
                    <Link
                    to="/add"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                    >
                    Add New User
                    </Link>
                </div>
              <div className="text-2xl font-semibold text-gray-700">
                {user.name[0].toUpperCase()}
                {user.surname[0].toUpperCase()}
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {user.name} {user.surname}
                </h2>
                <p className="text-gray-600">Age: {user.age}</p>
                <p className="text-gray-600">Salary: ${user.salary.toLocaleString()}</p>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};