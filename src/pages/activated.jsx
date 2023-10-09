import Footer from "./ui/footer";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../context/auth';


function Activated({ verify }) {


    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams();
    const Navigate = useNavigate();


    useEffect(() => {
        if (verified) {
            // Delay the navigation by 3 seconds (adjust the delay as needed)
            const delay = 3000;
            const timer = setTimeout(() => {
                Navigate('/');
            }, delay);

            // Clear the timer if the component unmounts or if 'verified' changes
            return () => {
                clearTimeout(timer);
            };
        }
    }, [verified, Navigate]);

    useEffect(() => {
        if (!verified) {
            // Only verify the account when the component mounts
            verify(uid, token);
            setVerified(true);
        }
    }, [uid, token, verify, verified]);

    return (
        <div>
            <section className="bg-[#151719]">
                <header className="">
                    <nav className="bg-black border-gray-500 px-4 lg:px-6 py-2.5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="https://nextierlab.co" className="flex items-center">
                                <img src={`/${'./nextierlab-logo.svg'}`} className="mr-3 h-8" alt="Nextierlab Logo" />
                            </a>
                            <div className="flex items-center lg:order-2"></div>
                        </div>
                    </nav>
                </header>

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:ml-96 lg:mr-96 lg:mt-56 lg:mb-56 mt-40 mb-44">
                    <div className="items-center justify-center">
                        <h1 class="mb-1 lgtext-left text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Your account has been successfully verified!
                        </h1>
                    </div>

                    <div className="items-center justify-center">
                        <h2 class="text-left text-base font-normal text-white mb-10 tracking-tight text-gray-900 md:text-2xl">
                            Thank you for verifying your account. You can now access all the features and services provided by our platform.
                        </h2>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}

export default connect(null, { verify })(Activated);
