import './Home.css'

import slider1 from '/slider1.jpg'
import slider2 from '/slider2.jpg'
import slider3 from '/slider3.jpg'
import slider4 from '/slider4.jpg'
import { useLoaderData } from 'react-router-dom';
import Houses from '../Components/Houses'

const Home = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>
           
            {/* banner */}
            <div className="carousel  bg-base-200 m-12 rounded-lg">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src={slider1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img src={slider2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src={slider4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
            {/* Houses */}
            <h1 className='text-center text-2xl font-bold mb-8'> Our Estates for rent and sale  </h1>

            <section className="text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{/* bookCards */}
            {books.map(book =>(
                <Houses book={book} key={book.Id} />
            ) )}
			
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 bg-gray-900 text-gray-400 text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>

        </div>
    );
};

export default Home;