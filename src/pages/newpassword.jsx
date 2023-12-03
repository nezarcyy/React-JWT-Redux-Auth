import Footer from "./ui/footer";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../context/auth";

function Newpass({ match, reset_password_confirm }) {

    const Navigate = useNavigate();

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
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
                                <img src={`/${'./nextierlab-logo.svg'}`} class="mr-3 h-8" alt="Nextierlab Logo" />
                            </a>
                        </div>
                    </nav>
                </header>


                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-28 lg:mb-20">
                    <div class="mt-24 mb-20 w-full shadow sm:max-w-md xl:p-0">
                        <div class="p-6 sm:p-8">
                            <h1 class="mb-1 text-left text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Set a New Password
                            </h1>
                            <h2 class="text-left text-base font-normal text-white mb-10 tracking-tight text-gray-900 md:text-2xl">
                                You're almost there! Please enter your new password below
                            </h2>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={e => onSubmit(e)}>
                                <div>
                                    <label for="password" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                                    <input type="password" name="new_password" id="password" placeholder="••••••••" class="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" required=""
                                    value={new_password}
                                    onChange={e => onChange(e)}
                                    />
                                </div>
                                <div>
                                    <label for="confirmPassword" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Confirm new password</label>
                                    <input type="password" name="re_new_password" id="confirmPassword" placeholder="••••••••" class="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" required=""
                                    value={re_new_password}
                                    onChange={e => onChange(e)}
                                    />
                                </div>
                                <button type="submit" class="lg:w-96 mb-2 py-3 px-5 w-full rounded-lg text-sm font-medium text-center text-black border-yellow-300 cursor-pointer bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-400 disabled:bg-yellow-300 disabled:pointer-events-none">Update password</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    );
}

export default connect(null, { reset_password_confirm })(Newpass);