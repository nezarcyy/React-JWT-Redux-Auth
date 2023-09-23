import Footer from "./ui/footer";
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../context/auth';
import ReCAPTCHA from "react-google-recaptcha";



function Activated({ verify }) {

    const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)
    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams();

    function onChange(value) {
        setIsCaptchaSuccess(true)
        console.log("captcha value: ", value);
    }

    const verify_account = e => {

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
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
                            <div class="flex items-center lg:order-2"></div>
                        </div>
                    </nav>
                </header>



                <div class="flex flex-col items-left justify-left px-6 py-8 mx-auto lg:ml-96 lg:mr-96 lg:mt-56 lg:mb-56 mt-40 mb-44">

                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        onChange={onChange}
                    />

                    <button
                        onClick={verify_account}
                        type='button'
                        className='btn btn-primary'
                        disabled={!isCaptchaSuccessful}
                    >
                        Verify
                    </button>

                </div>
                <Footer />
            </section>
        </div>
    );
}

export default connect(null, { verify })(Activated);