import { Metadata } from "next";

type Props = {
    params: {
        productID: string;
    }
};

export const generateMetadata = ({ params }: Props ): Metadata => {
    return {
        title: `Product ${params.productID}`,
    };
};

export default function ProductPage({ params }: Props) {
    return <h1>Product page: {params.productID}</h1>
}