import Footer from './ui/footer';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../context/auth';


function Login({ login, isAuthenticated }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Navigate to='/' />
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
                                <a href="/signup" class="text-white focus:ring-4 border border-yellow-400 focus:ring-yellow-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800">Sign up</a>
                            </div>
                        </div>
                    </nav>
                </header>


                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-28 lg:mb-20">
                    <div class="mt-24 mb-20 w-full shadow sm:max-w-md xl:p-0">
                        <div class="p-6 sm:p-8">
                            <h1 class="mb-1 text-left text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome Back
                            </h1>
                            <h2 class="text-left text-base font-normal text-white mb-10 tracking-tight text-gray-900 md:text-2xl">
                                Sign in to continue to your Dashboard
                            </h2>
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={e => onSubmit(e)}>
                                <div>
                                    <label for="email" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name='email' id="form2Example17" class="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="name@company.com" required 
                                    value={email}
                                    onChange={e => onChange(e)}
                                    ></input>
                                </div>
                                <div>
                                    <label for="password" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name='password' id="form2Example27" placeholder="••••••••" class="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" required
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength='8'
                                    ></input>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/password" class="text-sm text-gray-300 hover:underline">Forgot password?</a>
                                </div>
                                <button type="submit" class="lg:w-96 mb-2 py-3 px-5 w-full rounded-lg text-sm font-medium text-center text-black border-yellow-300 cursor-pointer bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-400">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>

    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);