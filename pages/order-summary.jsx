import React from "react";
import Head from "next/head";
export default function OrderSummary() {
    return (
        <div className="p-5 bg-[#e0e8ff] min-h-screen flex items-center justify-center relative">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <img
                src="/images/order-summary/images/pattern-background-desktop.svg"
                alt=""
                className="absolute inset-x-0 top-0 hidden w-full lg:block"
            />
            <img
                src="/images/order-summary/images/pattern-background-mobile.svg"
                alt=""
                className="absolute inset-x-0 top-0 w-full lg:hidden"
            />
            <article
                className="relative w-full max-w-sm overflow-hidden bg-white shadow-sm rounded-3xl"
                style={{ fontFamily: "Red Hat Display" }}
            >
                <img
                    src="/images/order-summary/images/illustration-hero.svg"
                    alt=""
                    className="w-full "
                />
                <div className="px-5 py-6 space-y-5 bg-white">
                    <h1 className="text-2xl font-black text-[color:#1f2f56] text-center">
                        Order Summary
                    </h1>
                    <p className="text-base text-center text-[color:#7280a7] font-medium">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                    <div className="flex p-4 space-x-3 bg-[#f5f7ff] rounded-xl">
                        <img
                            src="/images/order-summary/images/icon-music.svg"
                            alt=""
                            className="flex-shrink-0"
                        />
                        <div className="flex-1 ">
                            <h2 className="text-base font-bold text-[color:#1f2f56]">
                                Annual Plan
                            </h2>
                            <span className="text-[color:#7280a7] text-base font-medium">
                                $59.99/year
                            </span>
                        </div>
                        <button className="text-[color:#3829e0] font-bold text-sm underline hover:text-opacity-75">
                            Change
                        </button>
                    </div>
                    <div className="space-y-3">
                        <button className="inline-flex justify-center w-full px-4 py-3 text-base font-bold text-white bg-[#3829e0] hover:bg-opacity-75 rounded-xl ">
                            Proceed to Payment
                        </button>
                        <button className="inline-flex justify-center w-full px-4 py-3 text-base font-bold text-[color:#7280a7] rounded-xl hover:text-[color:#1f2f56]">
                            Cancel Order
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
