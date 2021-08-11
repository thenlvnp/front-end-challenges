import React, { Fragment, useState } from "react";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
const SLIDES = [
    {
        title: "Discover innovative ways to decorate",
        body: `We provide unmatched quality, comfort, and style for property owners across the country. 
       Our experts combine form and function in bringing your vision to life. Create a room in your 
       own style with our collection and make your property a reflection of you and what you love.`,
        mobile_image: "/images/room-page/mobile-image-hero-1.jpg",
        image: "/images/room-page/desktop-image-hero-1.jpg",
    },
    {
        title: "We are available all across the globe",
        body: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
        mobile_image: "/images/room-page/mobile-image-hero-2.jpg",
        image: "/images/room-page/desktop-image-hero-2.jpg",
    },
    {
        title: "Manufactured with the best materials",
        body: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
        mobile_image: "/images/room-page/mobile-image-hero-3.jpg",
        image: "/images/room-page/desktop-image-hero-3.jpg",
    },
];
export default function RoomPage() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />

            <main
                className="flex-col h-screen lg:overflow-hidden lg:flex"
                style={{ fontFamily: "Spartan" }}
            >
                <HeroSlider />
                <div className="bg-white lg:h-1/3 lg:flex">
                    <section className="items-center h-full lg:flex lg:w-2/3">
                        <img
                            src="/images/room-page/image-about-dark.jpg"
                            alt=""
                            className="lg:w-full lg:h-full"
                        />
                        <div className="py-12 px-9">
                            <h2 className="text-xs font-bold tracking-[.25rem] text-black uppercase">
                                About our furniture
                            </h2>
                            <p className="mt-4 text-xs text-gray-400">
                                Our multifunctional collection blends design and
                                function to suit your individual taste. Make
                                each room unique, or pick a cohesive theme that
                                best express your interests and what inspires
                                you. Find the furniture pieces you need, from
                                traditional to contemporary styles or anything
                                in between. Product specialists are available to
                                help you create your dream space.
                            </p>
                        </div>
                    </section>
                    <section className="lg:w-1/3">
                        <img
                            src="/images/room-page/image-about-light.jpg"
                            alt=""
                            className="w-full h-full"
                        />
                    </section>
                </div>
            </main>
        </>
    );
}
function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    function nextSlide() {
        if (activeSlide === SLIDES.length - 1) {
            return setActiveSlide(0);
        }
        setActiveSlide((prev) => ++prev);
    }
    function prevSlide() {
        if (activeSlide === 0) {
            return setActiveSlide(SLIDES.length - 1);
        }
        setActiveSlide((prev) => --prev);
    }
    return (
        <ul className="relative flex lg:h-2/3">
            {SLIDES.map((slide, index) => (
                <Transition
                    appear
                    key={index}
                    show={activeSlide === index}
                    as="li"
                    className="lg:flex"
                >
                    <div className="relative lg:h-full lg:w-3/5">
                        <div className="w-full overflow-hidden lg:h-full">
                            <img
                                className="hidden object-cover w-full h-full lg:block"
                                src={slide.image}
                                alt=""
                            />
                            <img
                                className="w-full lg:hidden"
                                src={slide.mobile_image}
                                alt=""
                            />
                        </div>
                        <nav className="absolute bottom-0 right-0 flex lg:hidden">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                className="h-16 px-5 bg-black rounded-none"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 0L1 12l12 12"
                                        stroke="#FFF"
                                        fill="none"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                className="h-16 px-5 bg-black rounded-none"
                            >
                                <svg
                                    width="14"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 0l12 12L1 24"
                                        stroke="#FFF"
                                        fill="none"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </nav>
                    </div>
                    <div className="relative flex items-center justify-center lg:w-2/5">
                        <nav className="absolute bottom-0 left-0 hidden lg:flex">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                className="h-16 px-5 bg-black rounded-none"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 0L1 12l12 12"
                                        stroke="#FFF"
                                        fill="none"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                className="h-16 px-5 bg-black rounded-none"
                            >
                                <svg
                                    width="14"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 0l12 12L1 24"
                                        stroke="#FFF"
                                        fill="none"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </nav>
                        <div className="py-16 lg:py-0 lg:px-24 px-9">
                            <h1 className="mb-5 text-2xl font-semibold text-black lg:text-4xl">
                                {slide.title}
                            </h1>
                            <p className="text-xs text-gray-400">
                                {slide.body}
                            </p>
                            <button className="inline-flex items-center space-x-5 text-xs text-black uppercase hover:text-gray-500 mt-11">
                                <span className="tracking-[.5rem] leading-none">
                                    Shop Now
                                </span>
                                <span>
                                    <svg
                                        width="40"
                                        height="12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                            fill="#000"
                                            fill-rule="nonzero"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </Transition>
            ))}
        </ul>
    );
}
function Header() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <header className="absolute inset-x-0 top-0 z-10 pt-12 lg:flex px-9">
            <div className="items-center hidden space-x-12 lg:flex ">
                <div className="flex justify-center flex-1">
                    <svg
                        width="62"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
                            fill="#FFF"
                            fill-rule="nonzero"
                        />
                    </svg>
                </div>
                <ul className="flex justify-end flex-1 space-x-8 text-sm font-medium text-white lowercase">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex lg:hidden">
                <button onClick={openModal}>
                    <svg
                        width="20"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                            fill="#FFF"
                            fill-rule="evenodd"
                        />
                    </svg>
                </button>
                <div className="flex justify-center flex-1">
                    <svg
                        width="62"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
                            fill="#FFF"
                            fill-rule="nonzero"
                        />
                    </svg>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300 transform "
                            enterFrom="opacity-0 -translate-y-full"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200 transform"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0  -translate-y-full"
                        >
                            <div className="absolute inset-x-0 top-0">
                                <nav className="flex items-center pt-3 bg-white px-9 pb-7">
                                    <button onClick={closeModal}>
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                                                fill="#000"
                                                fill-rule="evenodd"
                                                opacity=".201"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="flex justify-end flex-1 space-x-5 text-sm font-semibold text-black lowercase">
                                        <li>Home</li>
                                        <li>Shop</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </header>
    );
}