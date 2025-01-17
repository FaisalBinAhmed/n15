import Topbar from "@/components/topbar";
import Link from "next/link";

const suppliers = [1, 2, 3];
const SupplierSwitcher = () => {
	return (
		<div className="flex gap-2 h-16 m-4">
			{suppliers.map((supplier) => (
				<Link
					key={supplier}
					href={`/supplier/${supplier}`}
					className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg"
				>
					{supplier}
				</Link>
			))}
		</div>
	);
};

export default function SupplierLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-screen">
			<Topbar />
            <SupplierSwitcher />
			{children}
		</div>
	);
}
