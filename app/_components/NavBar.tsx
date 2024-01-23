import Logo from "./Logo";

function NavBar() {
	return (
		<header className="flex items-center justify-between px-[10.2rem]">
			<Logo />

			<nav>
				<ul className="flex gap-[5.6rem]">
					<li>Home</li>
					<li>Library</li>
					<li>About us</li>
					<li>Contact us</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
