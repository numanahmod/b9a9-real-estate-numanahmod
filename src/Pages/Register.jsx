import { useContext, useState } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {
	const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


	const {createUser,  updateUserProfile }=useContext(AuthContext);

	// const location = useLocation();
	// // const navigate = useNavigate(); 
	// console.log('location in the login page', location);
    const handleRegister = e => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget)
        
		const username = form.get('username');
		const photo = form.get('photo');
		const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        console.log(username, photo, email, password, confirmPassword);

		// reset error 
		setSuccess('');
		setRegisterError('')
		

		if (password.length < 6 ) {
			setRegisterError(' Password should be at least 6 characters ');
			return;
		}
		else if (!/[A-Z]/.test(password)){
			setRegisterError(' Your password should have  at least an Uppercase  letter');
			return;

		}
		else if (!/[a-z]/.test(password)){
			setRegisterError('Your  password should have  at least a lowercase  letter');
			return;

		}

		if (password != confirmPassword){
			setRegisterError('Confirm password does not match');
			return;
		}
		
        //create user 
        createUser(email, password)
        .then(result =>{
			toast.success('You have successfully created an account')
			setSuccess('You have successfully created an account');
			updateUserProfile(username, photo)
			.then()
            console.log(result.user );        } )
			.catch(error => {
				console.error(error);
				setRegisterError(error.message)
			}
			)
			// navigate(location?.state? location.state: '/');
		
    }
    return (
        <div className="justify-center place-items-center lg:ml-[450px] md:ml-[200px] m-5  mb-12">
            <Helmet>
            <title> Your Dream Home | Register </title>
           </Helmet>
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mt-12 ">
	<h1 className="text-2xl font-bold text-center ">Please, register </h1>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-4">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Username</label>
			<input type="text" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Photo URL</label>
			<input type="text" name="photo" placeholder="photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
		</div>
        <div>
				<label htmlFor="email" className="block mb-2 font-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
			</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block font-bold">Password</label>
			<div className="flex relative">
			<input type={ showPassword ? "text" : "password"} name="password" id="password" placeholder="password"  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			<span className="absolute top-3 right-2 text-white" onClick={() => setShowPassword(!showPassword)}>
				{
					showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
				}
			</span>
			</div>
			
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block font-bold"> Confirm Password</label>
			<div className="flex relative">
			<input type={ showPassword ? "text" : "password"}  name="confirmPassword" id="password" placeholder="confirm password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			<span className="absolute top-3 right-2 text-white" onClick={() => setShowPassword(!showPassword)}>
				{
					showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
				}
			</span>
			</div>
			<div className="flex justify-end text-xs text-red-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400"> Register </button>
	</form>
	{
		registerError && <p className="text-red-700">
			{registerError}
		</p>
	}
	{
		success && <p className="text-green-700">
			{success}
		</p>
	}
	
	<p className="text-xs text-center sm:px-6 text-gray-950"> Do you already have an account?
		<Link to='/yourAccountLogin' rel="noopener noreferrer" href="#" className="underline text-blue-800 font-bold"> Login  </Link>
	</p>
</div>
        </div>
    );
};

export default Register;