import Footer from "./ui/footer";
function Verify() {


    return (
        <div>

            <section class="bg-[#151719]">
                <header className="">
                    <nav class="bg-black border-gray-500 px-4 lg:px-6 py-2.5">
                        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a class="flex items-center">
                                <img src="./nextierlab-logo.svg" class="mr-3 h-8" alt="Nextierlab Logo" />
                            </a>
                            <div class="flex items-center lg:order-2"></div>
                        </div>
                    </nav>
                </header>




                <div class="flex flex-col items-left justify-left px-6 py-8 mx-auto lg:ml-96 lg:mr-96 lg:mt-56 lg:mb-56 mt-40 mb-44">

                    <h2 class="text-3xl font-extrabold dark:text-white">Email Verification Sent</h2>
                    <p class="mb-4 mt-4 text-lg font-normal text-gray-500 dark:text-gray-400">Thank you for signing up for NextierLab! To ensure the security of your account and access all of our platform's features, we need to verify your email address.</p>
                    <p class="mb-4 text-lg text-left font-normal text-gray-500 dark:text-gray-400">Please check your inbox for a verification email from us. </p>

                </div>
                <Footer />
            </section>
        </div>
    );
}

export default Verify;