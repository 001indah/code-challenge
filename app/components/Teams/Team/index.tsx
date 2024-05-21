'use client'
import React from 'react';
import useFetchUsers from '../../RandomUser';

interface User {
    login: {
        uuid: string;
    };
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };

}

const Team = () => {
    const { users, loading, error } = useFetchUsers();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading users: {error.message}</p>;

    const jobDescriptions = [
        {
            role: "Chief Executive Officer",
            description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration."
        },
        {
            role: "Product Design Head",
            description: "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development."
        },
        {
            role: "Manager Development",
            description: "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration."
        },
        {
            role: "Principal Software Engineer",
            description: "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field."
        },
        {
            role: "Product Design Head",
            description: "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life."
        }
    ];


    // Ambil 4 data pengguna pertama (atau sesuai jumlah deskripsi pekerjaan yang ada)
    const selectedUsers = users.slice(0, jobDescriptions.length);

    return (
        <div>
            <div className=" bg-abuSedang">
                <div className="container flex justify-center mx-auto lg:pt-16">
                    <div>
                        <p className="text-hijauTulisan font-bold text-lg text-center pb-3">Building Team</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-black font-semibold pb-6 sm:w-4/6 w-5/6 mx-auto">The <span className='highlight'>Talented People</span> Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full bg-abuSedang px-8 pt-10 pb-1">
                    <div className="container mx-auto overflow-x-auto overflow-hidden">
                        <div role="list" aria-label="Behind the scenes People" className="lg:flex md:flex sm:flex xl:justify-between gap-5 grid grid-cols-[1fr,1fr,1fr] md:justify-around sm:justify-around lg:justify-around">
                            {selectedUsers.map((user, index) => (
                                <div key={user.login.uuid} role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-[5rem] mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded-xl overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src={user.picture.large} alt={`Display Picture of ${user.name.first} ${user.name.last}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text:xl lg:text-3xl text-center mb-1">{user.name.first} {user.name.last}</h1>
                                            <p className="text-gray-800 text-xs lg:text-sm text-center">{jobDescriptions[index].role}</p>
                                            <p className="text-center text-gray-600 text-xs lg:text-base pt-3 font-normal">{jobDescriptions[index].description}</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div aria-label="Instagram" role="img">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
