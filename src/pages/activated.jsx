import Footer from "./ui/footer";
import React, { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../context/auth';
const SITE_KEY = '6Lfat0soAAAAAL8p2mQk6r5UNkeK7DQj0vRoMOjt'



function Activated({ verify }) {

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [verified, setVerified] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const { uid, token } = useParams();
    

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, []);

    useEffect(() => {
        if (verified) {
          // Delay the navigation by 3 seconds
          const timer = setTimeout(() => {
            setShouldNavigate(true);
          }, 3000);
    
          // Clear the timer if the component unmounts or if 'verified' changes
          return () => {
            clearTimeout(timer);
          };
        }
      }, [verified]);

    const verify_account = e => {

        e.preventDefault();
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
                submitData(token);
            });
        });

        verify(uid, token);
        setVerified(true);
    };

    const submitData = token => {
        // call a backend API to verify reCAPTCHA response
        fetch('http://localhost:8000/activate/{uid}/{token}', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "g-recaptcha-response": token
          })
        }).then(res => res.json()).then(res => {
          setLoading(false);
          setResponse(res);
        });
      }

    if (shouldNavigate) {
        return <Navigate to='/' />
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
                            <div class="flex items-center lg:order-2"></div>
                        </div>
                    </nav>
                </header>



                <div class="flex flex-col items-left justify-left px-6 py-8 mx-auto lg:ml-96 lg:mr-96 lg:mt-56 lg:mb-56 mt-40 mb-44">

                    <button
                        onClick={verify_account}
                        type='button'
                        className='btn btn-primary'
                        disabled={loading}
                    >
                        {loading ? 'Verifying...' : 'Verify'}
                    </button>

                    {response && <label>Output:<br /><pre>{JSON.stringify(response, undefined, 2)}</pre></label>}

                </div>
                <Footer />
            </section>
        </div>
    );
}

export default connect(null, { verify })(Activated);