export default function ProductPage({ params }: { params: { productID: string }; }) {
    return <h1>Product page: {params.productID}</h1>
}