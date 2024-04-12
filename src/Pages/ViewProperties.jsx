import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const ViewProperties = () => {
    
const property = useLoaderData()
const {Id} = useParams();
const id = property.find((i) => i.Id == Id);
  
    
    const {image, segment_name,estate_title, description, status, facilities, location, price, area } = id; 
    return (
        <div> 
            
            <div className="mt-12 mb-8 max-w-2xl px-6 py-16 mx-auto space-y-12 border-2">
                
	<article className="space-y-8 bg-gray-800 text-gray-50">
		<div className="space-y-6">
        <h1 className="text-4xl text-center font-bold md:tracking-tight md:text-5xl pb-2 pt-4">{segment_name}</h1>
                <img className='w-full' src={image} alt="" />
			
			
		</div>
		
	</article>
	<div>
		
		<div className="space-y-2">
            <p className='text-2xl text-lime-500'> <span> </span> {estate_title} </p>
			<h4 className="text-lg font-semibold border-t border-dashed border-gray-400 pt-6"> {description} </h4>

            <div className="flex flex-wrap py-6 gap-2 "> <span className='text-xl font-bold'>Facilities: </span> 
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-stone-600 text-white font-bold"> #{facilities[0]} </a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-stone-600 text-white font-bold">#{facilities[1]} </a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-stone-600 text-white font-bold">#{facilities[2]}  </a>
		</div>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline flex"> <span className='text-xl text-green-800 fond-bold flex'>  <span className='text-red-500 font-extrabold text-xl pr-12'>Area:</span> {area} </span> </a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline flex"> <span className=' text-red-700 pr-2 font-extrabold text-xl
                '>Location: </span> <span className='text-xl text-green-800 fond-bold flex'> <IoLocationOutline className='mt-1' /> {location} </span> </a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline flex"> <span className=' text-red-500  font-extrabold text-xl pr-[60px]'>For: </span> <span className='text-xl text-green-800 fond-bold flex '>    {status} </span> </a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline flex"> <span className='text-red-800 font-extrabold text-xl pr-12'>Price: </span> <span className='text-xl text-green-800 fond-bold flex'>   {price} </span> </a>
				</li>
			</ul>
		</div> 
        <Link to='/contact'><button className=' btn btn-secondary ml-60 mt-6'> Contact  </button></Link>
	</div>
</div>
        </div>
    );
};

export default ViewProperties;