const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ContactPage() {

    await delay(2000);

	return (
		<div>
			<h1>Contact</h1>
		</div>
	);
};
