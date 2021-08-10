import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
const PLEDGE_OPTIONS = [
    {
        title: "Bamboo Stand",
        price: 25,
        description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        itemsLeft: 101,
    },
    {
        title: "Black Edition Stand",
        price: 75,
        description:
            "You get a Black Special Edition computer stand an a persional thank you. You'll be added to our Backer member list. Shipping is included",
        itemsLeft: 64,
    },
    {
        title: "Mahogany Special Edition",
        price: 200,
        description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included",
        itemsLeft: 0,
    },
];
export default function CrowdFunding() {
    const [hasPledged, setHasPledged] = useState(false);
    return (
        <div className="bg-gray-100" style={{ fontFamily: "Commissioner" }}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="relative">
                <header className="absolute inset-x-0 top-0 transition origin-top-right transform md:hidden">
                    <div className="flex items-center justify-between px-6 pt-9">
                        <span>
                            <svg
                                width="128"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.272 20c2.69 0 5.022-1.4 6.202-3.54L9.88 14.402c-.439.96-1.454 1.537-2.662 1.537-1.783 0-3.1-1.29-3.1-3.184 0-1.893 1.317-3.183 3.1-3.183 1.208 0 2.196.576 2.662 1.537l3.595-2.086c-1.18-2.113-3.54-3.512-6.202-3.512C3.101 5.51 0 8.666 0 12.755 0 16.845 3.101 20 7.272 20zm11.367-.384v-6.202c0-2.717 2.415-3.403 4.116-3.129V5.62c-1.728 0-3.567.878-4.116 2.717V5.895h-4.116v13.72h4.116zM30.116 20c4.034 0 7.272-3.156 7.272-7.245s-3.238-7.244-7.272-7.244c-4.034 0-7.272 3.155-7.272 7.244 0 4.09 3.238 7.245 7.272 7.245zm0-4.007c-1.784 0-3.156-1.29-3.156-3.238s1.372-3.238 3.156-3.238 3.156 1.29 3.156 3.238c0 1.949-1.372 3.238-3.156 3.238zm15.181 3.623l2.196-7.327 2.195 7.327h3.842l4.39-13.721h-4.39l-1.976 7.354-2.14-7.354h-3.842l-2.14 7.354-1.977-7.354h-4.39l4.39 13.72h3.842zM64.156 20c1.839 0 3.183-.631 4.089-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.089-1.673-3.595 0-6.559 3.155-6.559 7.244 0 4.09 2.964 7.245 6.559 7.245zm.823-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348zm14.66 3.513v-9.77h2.552V5.895H79.64c0-1.592 1.016-2.058 2.552-1.921V.022c-4.555-.274-6.668 2.03-6.668 5.873h-1.839v3.951h1.839v9.77h4.116zm8.266.384c1.811 0 3.184-.659 3.925-1.674v1.29h4.116V5.895H91.83v7.491c0 1.949-1.043 2.827-2.553 2.827-1.317 0-2.387-.796-2.387-2.497V5.895h-4.116v8.424c0 3.705 2.36 5.681 5.131 5.681zm14.44-.384v-7.492c0-1.948 1.044-2.826 2.553-2.826 1.317 0 2.387.795 2.387 2.497v7.82h4.117v-8.424c0-3.705-2.36-5.68-5.132-5.68-1.811 0-3.183.658-3.924 1.673v-1.29h-4.117v13.722h4.117zm17.02.384c1.84 0 3.184-.631 4.09-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.09-1.673-3.594 0-6.558 3.155-6.558 7.244 0 4.09 2.964 7.245 6.559 7.245zm.824-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348z"
                                    fill="#FFF"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </span>
                        <MobileMenu />
                        <nav className="hidden lg:block">
                            <ul className="flex items-center text-white space-x-7">
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Discover</a>
                                </li>
                                <li>
                                    <a href="">Get Started</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            <main>
                <div className="relative pb-[40%] overflow-hidden hidden lg:block">
                    <img
                        src="/images/crowdfunding/image-hero-desktop.jpg"
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                </div>
                <div className="lg:hidden">
                    <img
                        src="/images/crowdfunding/image-hero-mobile.jpg"
                        alt=""
                        className="w-full"
                    />
                </div>
                <section className="relative w-full max-w-3xl px-6 pb-20 mx-auto -mt-20 space-y-10">
                    <div className="bg-white rounded-lg shadow ">
                        <div className="flex justify-center ">
                            <svg
                                className="-mt-7"
                                width="56"
                                height="56"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <circle
                                        fill="#000"
                                        cx="28"
                                        cy="28"
                                        r="28"
                                    />
                                    <g fillRule="nonzero">
                                        <path
                                            d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                                            fill="#444"
                                        />
                                        <path
                                            d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                                            fill="#FFF"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col px-6 pt-6 pb-8 space-y-4">
                            <h1 className="text-xl font-bold text-center lg:text-3xl">
                                Mastercraft Bamboo <br className="lg:hidden" />{" "}
                                Monitor Rise
                            </h1>
                            <p className="text-sm lg:text-base font-medium text-center text-[color:#7a7a7a]">
                                A beautifully handcrafted monitor stand to
                                reduce neck and eye strain.
                            </p>
                            <div className="flex items-center justify-between w-full mt-5 space-x-4">
                                <BackProject
                                    onSubmit={() => setHasPledged(true)}
                                />
                                <SuccessfullyPledged
                                    show={hasPledged}
                                    onClose={() => setHasPledged(false)}
                                />
                                <BookmarkProject />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 bg-white rounded-lg py-9">
                        <dl className="flex flex-col space-y-5 text-center">
                            <div className="flex flex-col items-center space-y-5 lg:space-y-0 lg:flex-row">
                                <div className="flex-1">
                                    <dt className="sr-only">
                                        Total Amount Pledged
                                    </dt>
                                    <dd className="flex flex-col">
                                        <span className="text-4xl font-bold">
                                            $89,914
                                        </span>
                                        <span className="text-sm text-[color:#7a7a7a]">
                                            of $100,000 backed
                                        </span>
                                    </dd>
                                </div>
                                <hr
                                    className="block w-1/4 lg:w-1/12 lg:rotate-90 border-t border-[color:#7a7a7a]"
                                    aria-hidden="true"
                                />
                                <div className="flex-1">
                                    <dd>
                                        <span className="text-4xl font-bold">
                                            5,007
                                        </span>
                                    </dd>
                                    <dt className="text-sm text-[color:#7a7a7a]">
                                        Total Backers
                                    </dt>
                                </div>
                                <hr
                                    className="block w-1/4 lg:w-1/12 lg:rotate-90 border-t border-[color:#7a7a7a]"
                                    aria-hidden="true"
                                />
                                <div className="flex-1">
                                    <dd>
                                        <span className="text-4xl font-bold">
                                            56
                                        </span>
                                    </dd>
                                    <dt className="text-sm text-[color:#7a7a7a]">
                                        Days Left
                                    </dt>
                                </div>
                            </div>
                            <div className="w-full h-3">
                                <dd className="w-full h-full overflow-hidden bg-gray-100 rounded-full">
                                    <div className="bg-[#3cb4ac] rounded-full w-1/2 h-full"></div>
                                </dd>
                                <dt className="sr-only">Total Percentage</dt>
                            </div>
                        </dl>
                    </div>
                    <div className="px-5 bg-white rounded-lg py-9">
                        <div className="mb-8">
                            <h2 className="mb-4 text-xl font-bold text-black">
                                About this project
                            </h2>
                            <p className="text-sm font-medium text-[color:#7a7a7a]">
                                The Mastercraft bamboo Monitor RIser is a sturdy
                                and stylish platform that elevates your screen
                                to a more comfortable viewing height. Placing
                                your monitor at eye level has the potential to
                                improve your posture and make your more
                                comofortable while at work, helping you stay
                                focused on the task at hand. <br />
                                <br />
                                Featuring artisan craftsmanship, the simplicity
                                of design creates extra desk space below your
                                computer to allow notepads, pens and USB sticks
                                to stored under the stand.
                            </p>
                        </div>
                        <ul className="space-y-6">
                            {PLEDGE_OPTIONS.map((opt) => (
                                <li key={opt.title} className="">
                                    <article className="relative p-6 space-y-6 overflow-hidden border-2 rounded-lg">
                                        {opt.itemsLeft == 0 && (
                                            <span className="absolute inset-0 w-full h-full bg-gray-300 pointer-events-none bg-opacity-10" />
                                        )}
                                        <div className="items-center justify-between lg:flex lg:space-x-2">
                                            <h1 className="text-sm font-bold text-black">
                                                {opt.title}
                                            </h1>
                                            <span className="text-[color:#3cb4ac] text-sm font-bold mt-1 block">
                                                Pledge ${opt.price} or more
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-[color:#7a7a7a]">
                                            {opt.description}
                                        </p>
                                        <div className="items-center justify-between space-y-6 lg:flex lg:space-y-0">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-3xl font-bold text-black">
                                                    {opt.itemsLeft}
                                                </span>
                                                <span className=" leading-none text-sm text-[color:#7a7a7a]">
                                                    left
                                                </span>
                                            </div>
                                            {opt.itemsLeft > 0 ? (
                                                <button className="px-4 py-3  w-2/3 max-w-[10rem] text-sm  font-medium text-white rounded-full bg-[#3cb4ac]">
                                                    Select Reward
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="px-4 py-3 w-2/3 max-w-[10rem] text-sm  font-medium text-white rounded-full bg-[#7a7a7a]"
                                                >
                                                    Out of Stock
                                                </button>
                                            )}
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
function BookmarkProject() {
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <button
            onClick={(e) => setBookmarked((prev) => !prev)}
            className={`inline-flex items-center transition-colors duration-100 ease-out ${
                bookmarked ? "bg-[#3cb4ac] bg-opacity-10" : "bg-gray-200 "
            } rounded-full`}
        >
            <span>
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <circle
                            fill={bookmarked ? "#3cb4ac" : "#2F2F2F"}
                            cx="28"
                            cy="28"
                            r="28"
                        />
                        <path
                            fill={bookmarked ? "white" : "#B1B1B1"}
                            d="M23 19v18l5-5.058L33 37V19z"
                        />
                    </g>
                </svg>
            </span>
            <div className="hidden px-5 lg:block">
                <span
                    className={`text-base font-bold ${
                        bookmarked ? "text-[#3cb4ac]" : "text-[color:#7a7a7a]"
                    }`}
                >
                    Bookmark
                </span>
            </div>
        </button>
    );
}
function MobileMenu() {
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <button className="lg:hidden" onClick={openModal}>
                <span>
                    <svg
                        width="16"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#FFF" fillRule="evenodd">
                            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                        </g>
                    </svg>
                </span>
            </button>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto lg:hidden"
                    onClose={closeModal}
                >
                    <div
                        className="w-full min-h-screen px-6 "
                        style={{ fontFamily: "Commissioner" }}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 opacity-75 bg-gradient-to-b from-black" />
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
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="absolute inset-x-0 top-0 inline-block w-full max-w-md px-6 space-y-10 overflow-hidden transition-all transform pt-9 ">
                                <div className="flex items-center justify-between">
                                    <span>
                                        <svg
                                            width="128"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.272 20c2.69 0 5.022-1.4 6.202-3.54L9.88 14.402c-.439.96-1.454 1.537-2.662 1.537-1.783 0-3.1-1.29-3.1-3.184 0-1.893 1.317-3.183 3.1-3.183 1.208 0 2.196.576 2.662 1.537l3.595-2.086c-1.18-2.113-3.54-3.512-6.202-3.512C3.101 5.51 0 8.666 0 12.755 0 16.845 3.101 20 7.272 20zm11.367-.384v-6.202c0-2.717 2.415-3.403 4.116-3.129V5.62c-1.728 0-3.567.878-4.116 2.717V5.895h-4.116v13.72h4.116zM30.116 20c4.034 0 7.272-3.156 7.272-7.245s-3.238-7.244-7.272-7.244c-4.034 0-7.272 3.155-7.272 7.244 0 4.09 3.238 7.245 7.272 7.245zm0-4.007c-1.784 0-3.156-1.29-3.156-3.238s1.372-3.238 3.156-3.238 3.156 1.29 3.156 3.238c0 1.949-1.372 3.238-3.156 3.238zm15.181 3.623l2.196-7.327 2.195 7.327h3.842l4.39-13.721h-4.39l-1.976 7.354-2.14-7.354h-3.842l-2.14 7.354-1.977-7.354h-4.39l4.39 13.72h3.842zM64.156 20c1.839 0 3.183-.631 4.089-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.089-1.673-3.595 0-6.559 3.155-6.559 7.244 0 4.09 2.964 7.245 6.559 7.245zm.823-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348zm14.66 3.513v-9.77h2.552V5.895H79.64c0-1.592 1.016-2.058 2.552-1.921V.022c-4.555-.274-6.668 2.03-6.668 5.873h-1.839v3.951h1.839v9.77h4.116zm8.266.384c1.811 0 3.184-.659 3.925-1.674v1.29h4.116V5.895H91.83v7.491c0 1.949-1.043 2.827-2.553 2.827-1.317 0-2.387-.796-2.387-2.497V5.895h-4.116v8.424c0 3.705 2.36 5.681 5.131 5.681zm14.44-.384v-7.492c0-1.948 1.044-2.826 2.553-2.826 1.317 0 2.387.795 2.387 2.497v7.82h4.117v-8.424c0-3.705-2.36-5.68-5.132-5.68-1.811 0-3.183.658-3.924 1.673v-1.29h-4.117v13.722h4.117zm17.02.384c1.84 0 3.184-.631 4.09-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.09-1.673-3.594 0-6.558 3.155-6.558 7.244 0 4.09 2.964 7.245 6.559 7.245zm.824-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348z"
                                                fill="#FFF"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </span>
                                    <button className="" onClick={closeModal}>
                                        <svg
                                            width="15"
                                            height="15"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                                fill="#FFFF"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <nav className="bg-white rounded-lg">
                                    <ul className="divide-y divide-gray-300 ">
                                        <li>
                                            <a
                                                href=""
                                                className="block p-4 text-lg font-medium text-black"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="block p-4 text-lg font-medium text-black "
                                            >
                                                Discover
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="block p-4 text-lg font-medium text-black"
                                            >
                                                Get Started
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
function SuccessfullyPledged({ show = false, onClose }) {
    let [isOpen, setIsOpen] = useState(show);
    useEffect(() => {
        show ? openModal() : closeModal();
    }, [show]);
    function closeModal() {
        setIsOpen(false);
        onClose();
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            {/* <button
                onClick={openModal}
                type="button"
                className="p-4 text-base flex-1 lg:flex-initial w-1/3 font-medium text-white rounded-full bg-[#3cb4ac]"
            >
                Back this project
            </button> */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div
                        className="min-h-screen px-6 text-center"
                        style={{ fontFamily: "Commissioner" }}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl lg:max-w-xl rounded-2xl">
                                <div className="flex flex-col items-center space-y-5 text-center">
                                    <div>
                                        <svg
                                            width="64"
                                            height="64"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fill="none" fill-rule="evenodd">
                                                <circle
                                                    fill="#3CB3AB"
                                                    cx="32"
                                                    cy="32"
                                                    r="32"
                                                />
                                                <path
                                                    stroke="#FFF"
                                                    stroke-width="5"
                                                    d="M20 31.86L28.093 40 44 24"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-gray-900"
                                    >
                                        Thanks for your support!
                                    </Dialog.Title>
                                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                                        Your pledge brings us one step closer to
                                        sharing Mastercraft Bamboo Monitor Riser
                                        worldwide. You will get an email once
                                        campaign is completed.
                                    </p>
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-3 max-w-[8rem]  w-full text-sm  font-medium text-white rounded-full bg-[#3cb4ac]"
                                    >
                                        Got it!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
function BackProject({ onSubmit = () => {} }) {
    let [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    function closeModal() {
        setIsOpen(false);
        setSelected(null);
    }

    function openModal() {
        setIsOpen(true);
    }
    function handleChange(e) {
        setSelected(e.target.value);
    }
    function handleSubmit(e) {
        closeModal();
        onSubmit();
    }
    return (
        <>
            <button
                onClick={openModal}
                type="button"
                className="p-4 text-base flex-1 lg:flex-initial w-1/3 font-medium text-white rounded-full bg-[#3cb4ac]"
            >
                Back this project
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    static
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div
                        className="min-h-screen px-6 text-center"
                        style={{ fontFamily: "Commissioner" }}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl lg:max-w-3xl rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Back this project
                                    </Dialog.Title>
                                    <svg
                                        width="15"
                                        height="15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                            fill="#000"
                                            fillRule="evenodd"
                                            opacity=".4"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                                        Want to support us in bringing
                                        Mastercraft Bamboo Monitor Riser out in
                                        the world.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <form action="">
                                        <ul
                                            className="space-y-5"
                                            onChange={handleChange}
                                        >
                                            <li>
                                                <PledgeCard
                                                    title="
                                                Pledge with no reward
                                            "
                                                    description="  Choose to support us without a reward if you simply believe
                                            in our project.As a backer, you will be signed up to recieve
                                            updates via email."
                                                    isSelected={
                                                        selected ===
                                                        "Pledge with no reward"
                                                    }
                                                    onSubmittedPledge={
                                                        handleSubmit
                                                    }
                                                />
                                            </li>
                                            {PLEDGE_OPTIONS.map((opt) => (
                                                <li
                                                    key={opt.title
                                                        .split(" ")
                                                        .join("")}
                                                >
                                                    <PledgeCard
                                                        title={opt.title}
                                                        subtext={opt.price}
                                                        description={
                                                            opt.description
                                                        }
                                                        itemsLeft={
                                                            opt.itemsLeft
                                                        }
                                                        isSelected={
                                                            selected ===
                                                            opt.title
                                                        }
                                                        onSubmittedPledge={
                                                            handleSubmit
                                                        }
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
function PledgeCard({
    onSubmittedPledge = () => {},
    title,
    description,
    isSelected = false,
    subtext = null,
    itemsLeft = null,
}) {
    const id = Math.random();
    return (
        <div
            className={`bg-white   divide-y rounded-lg shadow ${
                isSelected
                    ? "border-[#3cb4ac] border-2"
                    : "border-gray-300 border"
            }`}
        >
            <div className="px-5 py-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <input
                            type="radio"
                            id={"pledge-title-" + id}
                            name="pledge-item"
                            value={title.trim()}
                            className="w-5 h-5 border-gray-300 text-[#3cb4ac]"
                        />
                        <div className="items-center lg:flex lg:space-x-5">
                            <label
                                htmlFor={"pledge-title-" + id}
                                className="text-sm font-bold text-black lg:text-base"
                            >
                                {title}
                            </label>
                            {subtext ? (
                                <div className="text-sm lg:text-base font-medium text-[#3cb4ac]">
                                    Pledge ${subtext} or more
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {itemsLeft !== null && (
                        <div className="items-center hidden space-x-2 lg:flex">
                            <span className="text-xl font-bold text-black">
                                {itemsLeft}
                            </span>
                            <span className=" leading-none text-sm text-[color:#7a7a7a]">
                                left
                            </span>
                        </div>
                    )}
                </div>
                <p className="mt-8 text-sm font-medium text-gray-400 lg:text-base">
                    {description}
                </p>
                {itemsLeft !== null && (
                    <div className="flex items-center mt-5 space-x-2 lg:hidden">
                        <span className="text-xl font-bold text-black">
                            {itemsLeft}
                        </span>
                        <span className=" leading-none text-sm text-[color:#7a7a7a]">
                            left
                        </span>
                    </div>
                )}
            </div>
            {isSelected ? (
                <div className="items-center justify-between p-5 space-y-5 lg:space-y-0 lg:flex">
                    <label
                        htmlFor="pledge-amount"
                        className="block text-sm font-medium text-center text-gray-400"
                    >
                        Enter your pledge
                    </label>
                    <div className="flex space-x-4">
                        <div className="relative flex-1">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="17"
                                >
                                    <path
                                        fill="#9EBBBD"
                                        d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                                    />
                                </svg>
                            </span>
                            <input
                                id="pledge-amount"
                                type="text"
                                className="w-full px-8 py-3 text-sm font-bold text-black border rounded-full"
                                defaultValue="25"
                            />
                        </div>
                        <button
                            onClick={onSubmittedPledge}
                            type="button"
                            className="px-4 py-3  flex-1 text-sm  font-medium text-white rounded-full bg-[#3cb4ac]"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
