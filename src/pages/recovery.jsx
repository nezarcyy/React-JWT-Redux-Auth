import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../context/auth';
import Footer from "./ui/footer";

function Recovery({ reset_password }) {

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <section class="bg-[#151719]">


                <header className="">
                    <nav class="bg-black border-gray-500 px-4 lg:px-6 py-2.5">
                        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="https://nextierlab.co" class="flex items-center">
                                <img src="./nextierlab-logo.svg" class="mr-3 h-8" alt="Nextierlab Logo" />
                            </a>
                            <div class="flex items-center lg:order-2">
                                <a href="/signin" class="text-white focus:ring-4 border border-yellow-400 focus:ring-yellow-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800">Sign in</a>
                            </div>
                        </div>
                    </nav>
                </header>


                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-28 lg:mb-20">
                    <div class="mt-32 mb-32 w-full shadow sm:max-w-md xl:p-0">
                        <div class="p-6 sm:p-8">
                            <h1 class="text-left mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Reset Password
                            </h1>
                            <h2 class="text-left text-base font-normal text-white mb-10 tracking-tight text-gray-900 md:text-2xl">
                                You will recieve a new password by email
                            </h2>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={e => onSubmit(e)}>
                                <div>
                                    <label for="email" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
                                    <input type="email" name="email" id="email" class="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="name@company.com" required=""
                                    value={email}
                                    onChange={e => onChange(e)}
                                    ></input>
                                </div>

                                <button type="submit" class="lg:w-96 mb-2 py-3 px-5 w-full rounded-lg text-sm font-medium text-center text-black border-yellow-300 cursor-pointer bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-400">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}

export default connect(null, { reset_password })(Recovery);