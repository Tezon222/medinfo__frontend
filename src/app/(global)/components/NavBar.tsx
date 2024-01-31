"use client";

import { cnJoin } from "@/lib/utils/cn";
import { useMediaQuery } from "@/store/mediaQueryStore/mediaQueryStore";
import HamBurgerIcon from "@public/assets/HamBurgerIcon";
import Logo from "@public/assets/Logo";
import SearchIcon from "@public/assets/SearchIcon";

function NavBar() {
	const { isDesktop } = useMediaQuery((state) => state);

	return (
		<header className="flex items-center justify-between px-[2.4rem] py-[1.7rem] lg:px-[10.2rem] lg:py-[2rem]">
			<Logo className={cnJoin("shrink-0", !isDesktop && "h-[4.6rem] w-[6rem]")} />

			{isDesktop && (
				<nav>
					<ul className="flex font-medium lg:gap-[5.6rem] lg:text-[2.2rem]">
						<li>Home</li>
						<li>Library</li>
						<li>About us</li>
						<li>Contact us</li>
					</ul>
				</nav>
			)}

			{isDesktop && (
				<div className="flex items-center gap-[3.2rem]">
					<button className="rounded-[8px] border-2 border-primary lg:p-[1.8rem]">
						<SearchIcon />
					</button>

					<button className="rounded-[8px] bg-primary font-medium text-white lg:px-[3.2rem] lg:py-[1.8rem] lg:text-[2rem]">
						Join Us
					</button>
				</div>
			)}

			{!isDesktop && (
				<button>
					<HamBurgerIcon />
				</button>
			)}
		</header>
	);
}

export default NavBar;
