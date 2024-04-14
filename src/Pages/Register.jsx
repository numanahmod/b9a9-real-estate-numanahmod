import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const {createUser }=useContext(AuthContext);
    const handleRegister = e => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget)
        
		const username = form.get('username');
		const photo = form.get('photo');
		const email = form.get('email');
        const password = form.get('password');
        console.log(username, photo, email, password);
        //create user 
        createUser(email, password)
        .then(result =>{
            console.log(result.user );        } )
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="justify-center place-items-center ml-[450px] mb-12">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mt-12 ">
	<h1 className="text-2xl font-bold text-center ">Please, register </h1>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Username</label>
			<input type="text" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Photo URL</label>
			<input type="text" name="photo" id="username" placeholder="photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
		</div>
        <div>
				<label htmlFor="email" className="block mb-2 font-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
			</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block font-bold">Password</label>
			<input type="password" name="password" id="password" placeholder="your password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			<div className="flex justify-end text-xs text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400"> Register </button>
	</form>
	
	
	<p className="text-xs text-center sm:px-6 text-gray-400"> Do you already have an account?
		<Link to='/yourAccountLogin' rel="noopener noreferrer" href="#" className="underline text-blue-800 font-bold"> Login  </Link>
	</p>
</div>
        </div>
    );
};

export default Register;