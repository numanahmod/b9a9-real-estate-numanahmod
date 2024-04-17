
import { useContext } from 'react';
import '../Components/Navbar.css'
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';



const ProfileUpdate = () => {
    const { user,setUser ,   updateUserProfile }=useContext(AuthContext);
    const handleUpdateProfile = e => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget)
        
		const username = form.get('username');
		const photo = form.get('photo');
	
      
        console.log(username, photo);
        //create user 
        
			updateUserProfile(username, photo) 
      .then(()=>{
        setUser((prevUser) => {
          return {...prevUser, displayName: username, photoURL: photo}
       })
      })    
        .catch(error => {
            console.error(error);
        })
    }
    
    
    return (
       <>
       <div className=" min-h-screen">
       <Helmet>
            <title> Your Dream Home | Update Profile </title>
           </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse gap-40">
    <div className="text-center lg:ml-32 lg:mr-32 border-2 p-6 bg-orange-100 mt-6">
    <h1 className='text-2xl font-bold mb-8'>My profile </h1>
    {user && <div tabIndex={0} role="button" className="w-44 h-44 btn-circle avatar" >
        
        <div className="w-60 rounded-full" >  
            <img className=""  alt="please, Reload" src={user?.photoURL} />
        </div>
      </div>}
      <p className="py-2"> <span className='font-bold'>User name:</span> <span className=' bg-slate-400 rounded-sm p-1 font-bold'>{user?.displayName} </span></p>
      
      <p className="py-2"> <span className='font-bold'>Photo URL: </span> <span className=' bg-slate-400 rounded-sm p-1 font-bold'>{user?.photoURL} </span> </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-20">
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl ">
	<h1 className="text-2xl font-bold text-center "> Update profile  </h1>
	<form onSubmit={handleUpdateProfile} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Username</label>
			<input type="text" name="username" id="username" placeholder="username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block font-bold">Photo URL</label>
			<input type="text" name="photo" placeholder="photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
		</div>
        
		
		<button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-green-600"> Confirm update  </button>
	</form>
	
	
	
</div>
    </div>
  </div>
</div>
       </>
    );
};

export default ProfileUpdate;