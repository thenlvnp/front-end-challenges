import React, { useEffect, useState } from "react";
import Head from "next/head";
const COLORS = {
    primary: "#26c0ab",
    cyan: {
        100: "#f4fafa",
        200: "#c5e4e7",
        300: "#7f9c9f",
        400: "#5e7a7d",
        500: "#00494d",
    },
};

export default function TipCalculator() {
    const [values, setValues] = useState({
        tip: 0,
        persons: 0,
        bill: 0.0,
    });
    const tipPerPerson =
        values.persons !== 0
            ? Math.round(
                  (+values.bill * (values.tip / 100)) / values.persons
              ).toFixed(2)
            : 0;

    const totalPerPerson =
        values.persons !== 0 && tipPerPerson
            ? Math.round(values.bill / values.persons + +tipPerPerson)
            : 0;
    return (
        <div className="min-h-screen flex-col flex items-center justify-center relative bg-[#c5e4e7]">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;700&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex items-center h-36">
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="54">
                    <path
                        fill="#3D6666"
                        d="M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 001.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 01-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 01-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 00-.396-1.968 4.762 4.762 0 00-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 001.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 001.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 001.596-1.14 4.833 4.833 0 00.96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 00-.96-1.56A4.737 4.737 0 0034.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 00.552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 00-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z"
                    />
                </svg>
            </div>
            <article
                className="relative w-full max-w-3xl grid-cols-2 gap-6 p-5 space-y-5 overflow-hidden bg-white shadow-sm lg:grid rounded-3xl lg:space-y-0"
                style={{ fontFamily: "Space Mono" }}
            >
                <form action="" className="space-y-4 ">
                    <div>
                        <label
                            htmlFor="order-total"
                            className="text-sm font-bold block mb-2 text-[color:#00494d]"
                        >
                            Bill
                        </label>
                        <div className="relative ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-xl">
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
                            </div>
                            <input
                                id="order-total"
                                type="text"
                                className="w-full rounded-md  text-right text-2xl px-4 focus:ring-2 focus:ring-[color:#26c0ab] bg-[#f4fafa]  py-2 font-bold p-0 text-[color:#00494d] border-none"
                                defaultValue="0"
                                onChange={(e) => {
                                    setValues((prev) => ({
                                        ...prev,
                                        bill: e.target.value,
                                    }));
                                }}
                            />
                        </div>
                    </div>
                    <TipSelector
                        onChange={(v) =>
                            setValues((prev) => ({
                                ...prev,
                                tip: v,
                            }))
                        }
                    />
                    <NumberOfPeople
                        onChange={(v) =>
                            setValues((prev) => ({
                                ...prev,
                                persons: v,
                            }))
                        }
                    />
                </form>
                <div className="bg-[#00494d] flex flex-col justify-between space-y-5 rounded-xl px-5 pb-5 pt-7 lg:px-6 lg:pb-6 lg:pt-10">
                    <div className="space-y-5 ">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xs font-bold text-[#c5e4e7]">
                                    Tip Amount
                                </h2>
                                <span className="text-xs text-[color:#7f9c9f] font-bold">
                                    / person
                                </span>
                            </div>
                            <div className="text-[color:#26c0ab] text-3xl font-bold">
                                ${tipPerPerson}
                            </div>
                        </div>
                        <div className="flex justify-between itece">
                            <div>
                                <h2 className="text-xs font-bold text-[#c5e4e7]">
                                    Total
                                </h2>
                                <span className="text-xs text-[color:#7f9c9f] font-bold">
                                    / person
                                </span>
                            </div>
                            <div className="text-[color:#26c0ab] text-3xl font-bold">
                                ${totalPerPerson}
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#26c0ab]  w-full px-4 py-2 text-center text-[color:#00494d] rounded-md uppercase text-lg font-bold hover:bg-[#c5e4e7]">
                        Reset
                    </button>
                </div>
            </article>
        </div>
    );
}
function NumberOfPeople({ onChange }) {
    const [error, setError] = useState("");
    function handleChange(e) {
        const numberRegex = new RegExp(/\d/, "g");
        const value = e.target.value;
        const isNumber = numberRegex.test(value);

        if (!isNumber) {
            setError("Enter valid number");
        } else if (+value === 0) {
            setError("Can't be zero");
        } else {
            onChange(+value);
            setError("");
        }
    }
    return (
        <div>
            <div className="flex justify-between mb-2">
                <label
                    htmlFor="order-total"
                    className="text-sm block font-bold text-[color:#00494d]"
                >
                    Number of People
                </label>
                {error ? (
                    <span className="text-sm text-red-500">{error}</span>
                ) : null}
            </div>
            <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="16"
                    >
                        <path
                            fill="#9EBBBD"
                            d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                        />
                    </svg>
                </div>
                <input
                    id="order-total"
                    type="text"
                    className="w-full rounded-md  text-right text-2xl px-4 focus:ring-2 focus:ring-[color:#26c0ab] bg-[#f4fafa]  py-2 font-bold p-0 text-[color:#00494d] border-none"
                    defaultValue={0}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
function TipSelector({ onChange }) {
    const [selected, setSelected] = useState(15);
    useEffect(() => {
        onChange(selected);
    }, [selected]);
    return (
        <fieldset>
            <legend className="text-sm font-bold mb-3 text-[color:#00494d]">
                Select Tip %
            </legend>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {["5", "10", "15", "25", "50"].map((v) => (
                    <button
                        key={v}
                        type="button"
                        onClick={() => setSelected(+v)}
                        className={`${
                            selected !== +v
                                ? "bg-[#00494d] hover:bg-[#26c0ab] hover:bg-opacity-50 text-white"
                                : "bg-[#26c0ab] text-[color:#00494d]"
                        } text-center px-4 py-2 rounded-md text-xl font-bold`}
                    >
                        <input
                            type="checkbox"
                            name="order-tip"
                            id={`tip-${v}`}
                            value={v}
                            className="sr-only"
                        />
                        <label htmlFor={`tip-${v}`}>{v}%</label>
                    </button>
                ))}
                <label htmlFor="" className="block">
                    <span className="sr-only">Enter custom tip</span>
                    <input
                        type="text"
                        name=""
                        id="custom-tip"
                        className="w-full"
                        placeholder="Custom"
                        className="rounded-md bg-[#f4fafa] text-right text-[color:#00494d] placeholder-[color:#00494d] focus:ring-2 focus:ring-[color:#26c0ab] text-xl font-bold w-full border-none"
                        onChange={(e) => {
                            e.target.value
                                ? setSelected(+e.target.value)
                                : setSelected(15);
                        }}
                    />
                </label>
            </div>
        </fieldset>
    );
}
