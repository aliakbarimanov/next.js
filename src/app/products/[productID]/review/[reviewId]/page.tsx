export default function ProductReview(
    { params }: {
        params: {
            productID: string,
            reviewId: string,
        }
    }
) {
    return (
        <div>Product page: {params.productID}, review page: {params.reviewId}</div>
    );
}