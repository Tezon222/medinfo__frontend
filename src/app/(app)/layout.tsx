import NavBar from "./_components/NavBar";

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<NavBar />

			{children}
		</div>
	);
}

export default GlobalLayout;
