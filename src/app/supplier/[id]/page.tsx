const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {

	await delay(2000);
	const id = (await params).id;
	return <div>Supplier no: {id}</div>;
}