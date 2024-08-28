"use client"

import React from "react";

import { useRouter } from "next/navigation";

export default function Basket() {

    const router = useRouter();

    const handleClick = () => {
        alert("Hellooo!!");

        //! router has push, back, forward, replace
        router.push("/");
    };

    return (
        <>
            <h2>Basket</h2>
            <p>Product x</p>
            <p>Product x</p>
            <p>Product x</p>
            <p>Product x</p>
            <p>Product x</p>
            <button className="p-5 border bg-slate-500" onClick={handleClick}>Order</button>
        </>
    );
};