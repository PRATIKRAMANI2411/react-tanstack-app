import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { GlobalStateContext } from '../provider/GlobalStateProvider';
import { format } from 'date-fns';
import { toast } from 'react-toastify';


const schema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    gender: yup.string().required('Gender is required'),
    dob: yup.date().required('Date of birth is required'),
});

const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, setData } = useContext(GlobalStateContext);

    const existingRecord = data.find((item) => item.id.toString() === id);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            dob: '',
        },
    });

    useEffect(() => {
        if (existingRecord) {
            setValue('first_name', existingRecord.first_name);
            setValue('last_name', existingRecord.last_name);
            setValue('email', existingRecord.email);
            setValue('gender', existingRecord.gender);
            const formattedDob = format(new Date(existingRecord.dob), 'yyyy-MM-dd');
            setValue('dob', formattedDob);
        }
    }, [existingRecord, setValue]);

    const onSubmit = (formData) => {
        if (existingRecord) {

            const updatedData = data.map((item) =>
                item.id.toString() === id ? { ...item, ...formData } : item
            );
            setData(updatedData);
            toast.success('Record updated successfully!');
        } else {
            const newId = data[data.length - 1].id + 1;
            const newUser = { id: newId, ...formData };
            setData([...data, newUser]);
            toast.success('New record created successfully!');
        }

        reset();
        navigate('/table');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        id="first_name"
                        {...register('first_name')}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="first name"
                    />
                    {errors.first_name && (
                        <span className="text-sm text-red-600">{errors.first_name.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        id="last_name"
                        {...register('last_name')}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="last name"
                    />
                    {errors.last_name && (
                        <span className="text-sm text-red-600">{errors.last_name.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        {...register('email')}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="email"
                    />
                    {errors.email && (
                        <span className="text-sm text-red-600">{errors.email.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="gender"
                        {...register('gender')}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">--Select Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.gender && (
                        <span className="text-sm text-red-600">{errors.gender.message}</span>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        {...register('dob')}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.dob && (
                        <span className="text-sm text-red-600">{errors.dob.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                    {existingRecord ? 'Update' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
