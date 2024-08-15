export default function Docs({ params }: { params: { slug: string[]; } }) {
    if (params.slug?.length === 2) {
        return (
            <div>Viewing docs {params.slug[0]} and reviews {params.slug[1]}.</div>
        );
    } else if (params.slug?.length === 1) {
        return (
            <div>View docs about {params.slug[0]}.</div>
        );
    }

    return (
        <div>Docs home page.</div>
    );

};