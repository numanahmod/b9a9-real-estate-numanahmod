import { Link, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
       
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span> <span className="text-red-800"> 404</span>
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
			<div><a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to <Link to="/" className='fond-bold link link-hover text-2xl text-green-700 font-bold'> Homepage</Link></a></div>
		</div>
	</div>
</section>
        </>
    );
};

export default ErrorPage;