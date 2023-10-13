import Footer from './ui/footer';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../context/auth';


function Login({ login, isAuthenticated, activationError }) {

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
            <section className="bg-[#151719]">


                <header className="">
                    <nav className="bg-black border-gray-500 px-4 lg:px-6 py-2.5">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href="https://nextierlab.co" className="flex items-center">
                                <img src="./nextierlab-logo.svg" className="mr-3 h-8" alt="Nextierlab Logo" />
                            </a>
                        </div>
                    </nav>
                </header>


                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-28 lg:mb-20">
                    <div className="mt-24 mb-20 w-full shadow sm:max-w-md xl:p-0">
                        <div className="p-6 sm:p-8">
                            <h1 className="mb-1 text-left text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome Back
                            </h1>
                            <h2 className="text-left text-base font-normal text-white mb-10 tracking-tight text-gray-900 md:text-2xl">
                                Sign in to continue to your Dashboard
                            </h2>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={e => onSubmit(e)}>
                                <div>
                                    <label for="email" className="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="text" name='email' id="form2Example17" className="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="name@company.com" required
                                        value={email}
                                        onChange={e => onChange(e)}
                                    ></input>
                                </div>
                                <div>
                                    <label for="password" className="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name='password' id="form2Example27" placeholder="••••••••" className="p-3 peer w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" required
                                        value={password}
                                        onChange={e => onChange(e)}
                                        minLength='8'
                                    ></input>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/password" className="text-sm text-gray-300 hover:underline">Forgot password?</a>
                                </div>
                                <button type="submit" className="lg:w-96 mb-2 py-3 px-5 w-full rounded-lg text-sm font-medium text-center text-black border-yellow-300 cursor-pointer bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-400">Sign in</button>
                            </form>

                            {activationError && (
                                <div className="text-red-500">
                                    {activationError}
                                </div>
                            )}

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