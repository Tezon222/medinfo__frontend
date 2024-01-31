import NavBar from "./components/NavBar";

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />

			{children}
		</div>
	);
}

export default GlobalLayout;
