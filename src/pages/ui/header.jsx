function Header() {

    return (
        <header className="">
            <nav class="bg-black border-gray-500 px-4 lg:px-6 py-2.5">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a class="flex items-center">
                        <img src="./nextierlab-logo.svg" class="mr-3 h-8" alt="Nextierlab Logo" />
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="" class="text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800">Sign in</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;