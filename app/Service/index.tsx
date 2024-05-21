import React from 'react'
import Button from '../components/Hero/buttonPolos'

const Card = () => {
    return (
        <div>
            <div className="mx-5 lg:mx-20 overflow-hidden bg-white rounded-xl border shadow-lg">
                <div className="flex flex-col overflow-hidden bg-white sm:flex-row ">
                    <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                        <h2 className="text-xl font-bold text-black md:text-2xl lg:text-4xl">Contact Us<span className='text-hijauTulisan'> for Free Career Consultation!</span> </h2>
                        <p className="text-xs lg:text-sm mt-4  text-gray-700">If you are still uncertain about the career path you want to take, Purwadhika Career Network team is ready to assist you. Consultations are available every Monday to Thursday from 10:00-11:00 AM and 4:00-5:00 PM (WIB). <br /><br /> Fill in the data below to speak with our team.</p>
                        <form>
                            <div className="relative mt-2 w-full">
                                <input type="text" id="email" value="email@gmail.com" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <input type="text" id="text" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Message</label>
                            </div>

                        </form>

                        <Button href='https://wa.link/zdtc2y' className='hover:bg-hijauMuda mt-3 bg-black hover:text-black text-white text-base'>
                            Send
                        </Button>
                    </div>

                    <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                        <img className="h-full w-full object-cover" alt="smilel boys" src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Card
