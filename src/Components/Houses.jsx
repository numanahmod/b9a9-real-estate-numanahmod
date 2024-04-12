/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./Houses.css";



const Houses = ({book}) => {

    const {image, segment_name, status, facilities, location, price, Id} = book;


    return (
        <div className="shadow-2xl w-[100%] mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline p-3 m-5 mr-6 rounded-lg">
				<div className=" bg-gray-100 rounded-lg justify-center items-center pt-3 pb-3 pl-3 pr-3">
                <img role="presentation" className="w-[350px] h-[300px] rounded-md" src={image} />
                </div>
				<div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold text-black ">{segment_name}</h3>
                <div className=" text-black"> <span className=" font-bold">For: </span> {status} </div>
                    <p className="font-bold text-green-600 gap-10"> <span>#{facilities[0]}</span> <span className="pl-10"> #{facilities[1]}</span> </p>

					
					<p className=" text-black font-semibold"> <span className=" font-bold">Location: </span>  {location} </p>

                    <div className="flex justify-between   font-semibold text-neutral-950 mb-8 pb-6">
                       
                        <div className="inline-flex gap-2"> <span className=" font-bold text-red-500"> Price: </span>  {price} 
                       </div>
                    </div>
                    <Link className=" ml-20 justify-center items-center -mb-4" to={`/property/${Id}`}><button className="btn btn1 text-black ">View Property</button></Link>
				</div>
			</div>
    );
};

export default Houses;