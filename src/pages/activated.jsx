import Footer from "./ui/footer";


function Activated() {


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



                </div>
                <Footer />
            </section>
        </div>
    );
}

export default Activated;