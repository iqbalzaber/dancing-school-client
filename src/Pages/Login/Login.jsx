import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { saveUser } from '../../components/SaveUser/SaveUser';

const Login = () => {
    const { signIn,loading,signInWithGoogle,setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        setLoading(true)
        console.log(result.user)
        saveUser(result.user)
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: ' Log in Successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(result => {
        console.log(result.user)
        setLoading(true)
     
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen gap-x-10">
            <div className="py-36 pr-44">
            <iframe className="h-96 w-96" src="https://embed.lottiefiles.com/animation/124956"></iframe>
            </div>
          <form className="bg-white rounded px-8 pt-6 pb-8 shadow-lg ps-24">
        <h2 className="text-2xl text-center text-gray-700 font-bold mb-8">Login Form</h2>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={`w-full px-3 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500`}
          />
          {errors.email && <span role="alert" className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className={`w-full px-3 py-2 rounded border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500`}
          />
          {errors.password && <span role="alert" className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>

        <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <FaSpinner className='m-auto animate-spin' size={24} />
              ) : (
                'Continue'
              )}
            </button>

        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have  an account?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up Now
          </Link>
          .
        </p>
      </form>
      
  
    </div>
  );
};

export default Login;
