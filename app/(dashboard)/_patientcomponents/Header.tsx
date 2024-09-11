"use client";

import { HamburgerIcon, NotificationIcon, SearchIcon, XIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { menuItems } from "./SidebarLinks";
import { Logo } from "@/components/common";
import { Button } from "@/components/ui";
import { useToggle } from "@zayne-labs/toolkit/react";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
	const pathName = usePathname();
	const [isNavShow, toggleNavShow] = useToggle(false);

	const activeTitle = menuItems.find((menuItem) => menuItem.href === pathName)?.title;

	return (
		<>
			{/* desktop view */}
			<header
				className="sticky top-0 z-10 hidden items-center justify-between bg-white px-[40px] py-[16px]
					shadow-md lg:flex"
			>
				<div className="text-[32px] font-semibold">{activeTitle ?? "Community"}</div>
				<div className="relative items-center space-x-4">
					<SearchIcon type="green" className="absolute left-8 top-2" />
					<input
						type="text"
						placeholder="search"
						className="w-[400px] rounded-[8px] border border-medinfo-primary-main px-12 py-2
							text-[#414141]"
					/>
				</div>
				<div className="flex items-center space-x-[40px]">
					<NotificationIcon />
					<div className="size-[40px] rounded-full bg-gray-500" />
				</div>
			</header>
			{/* mobile view  */}
			<header
				className="sticky top-0 z-10 flex items-center justify-between bg-white px-[24px] py-[17px]
					shadow-md lg:hidden"
			>
				<Logo className="h-[46px] w-[60px]" />
				<div className="text-[18px] font-semibold">{activeTitle}</div>
				<div className="flex items-center gap-[16px]">
					<SearchIcon type="green" />
					<NotificationIcon />
					<Button unstyled={true} className="z-10" onClick={toggleNavShow}>
						{isNavShow ? <XIcon /> : <HamburgerIcon />}
					</Button>
					<MobileNavigation isNavShow={isNavShow} toggleNavShow={toggleNavShow} />
				</div>
			</header>
		</>
	);
};

export default Header;
