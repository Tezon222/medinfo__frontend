import { Footer, NavBar } from "@/components/common";

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}

export default GlobalLayout;
