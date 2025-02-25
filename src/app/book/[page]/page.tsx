export default async function BookPage({
    params,
}: {
    params: Promise<{ page: number }>;
}) {
    const { page } = await params;

    return <div>Book - {page}</div>;
}
