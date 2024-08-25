import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Absolute title",
    },
};

export default function Blogs() {
    return <h1>Blogs page!</h1>;
}