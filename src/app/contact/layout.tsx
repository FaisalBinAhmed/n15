import Topbar from "@/components/topbar";

export default function SupplierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            {children}
        </div>
    );
}