import React, { useContext } from 'react';
import { GlobalStateContext } from '../provider/GlobalStateProvider';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const Columns = () => {
    const navigate = useNavigate();
    const { data, setData } = useContext(GlobalStateContext);

    const handleDelete = (row) => {
        setData(data.filter((item) => item.id !== row.id));
        toast.error("Data deleted successfully!");
    };

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',
            accessorFn: row => `${row.first_name} ${row.last_name}`,
        },
        {
            header: 'Email',
            accessorKey: 'email',
            
        },
        {
            header: 'Gender',
            accessorKey: 'gender',
           
        },
        {
            header: 'Date of Birth',
            accessorKey: 'dob',
            
            accessorFn: row => format(new Date(row.dob), 'MM/dd/yyyy'),
        },
        {
            header: 'Action',
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <button
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        onClick={() => navigate(`/form/${row.original.id}`)}
                    >
                        Edit
                    </button>
                    <button
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        onClick={() => handleDelete(row.original)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return columns;
};

export default Columns;
