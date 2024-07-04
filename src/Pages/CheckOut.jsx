


const CheckOut = () => {
  
  
    
    const handlebookservice = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
       
        const mobile = form.mobile.value;

       
              
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="hero md:h-96" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1770590288/photo/woman-call-center-and-headache-in-stress-anxiety-or-mistake-in-customer-service-or-support-at.jpg?s=612x612&w=0&k=20&c=vy78RgOPACDI8maMGroyig8oEeXK5FRP8ChGtJkvsbQ=)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="p-5 mt-10 text-center">
                        <h1 className="mb-5 text-5xl font-bold">Confirm Your Booking </h1>
                        <p className="mb-5">Please fill up the form</p>
                    </div>
                </div>
            </div>
        
            <div className='flex justify-center items-center mt-6'>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h2>
                    <form onSubmit={handlebookservice}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                defaultValue="Konika"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                                Service Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="service"
                                type="text"
                                name='service'
                                value="Marriage"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name='email'
                                defaultValue=""
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                Mobile No
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobile"
                                type="tel"
                                name='mobile'
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date"
                                type="date"
                                name='date'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                                Reason for Booking
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                                id="reason"
                                name='reason'
                            ></input>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' value='Confirm Order'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
