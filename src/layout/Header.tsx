import SearchAjax from "@/components/SearchAjax";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
	User,
	CartSmile,
	LightMode,
	NightMode,
	MenuHome,
} from "react-huge-icons/solid";

export function TopHeader() {
	const [darkMode, setDarkmode] = useState<Boolean>(false);

	useEffect(() => {
		localStorage.theme
			? document.documentElement.classList.add("dark")
			: (localStorage.theme = "");
	}, []);

	useEffect(() => {
		localStorage.theme = darkMode ? "dark" : "";

		localStorage.theme == "dark"
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}, [darkMode]);

	return (
		<div className="border-b sticky top-0">
			<div className="container flex items-center justify-between gap-3 py-3 ">
				<div>
					<Image
						alt=""
						src="/Image/logo.svg"
						width={46}
						height={46}
						className=""
					/>
				</div>

				<div className="hidden lg:flex">
					<SearchAjax />
				</div>

				<div className="">
					<div className="flex gap-3 lg:gap-10 items-center justify-between">
						<button
							className="flex flex-col gap-1 items-center cursor-pointer"
							onClick={() => setDarkmode(!darkMode)}>
							{darkMode ? (
								<LightMode className="w-6 md:w-8 h-6 md:h-8" />
							) : (
								<NightMode className="w-6 md:w-8 h-6 md:h-8" />
							)}

							<p className="text-sm select-none hidden lg:flex">
								{darkMode ? "روشن" : "تاریک"}
							</p>
						</button>

						<Link href="/" className="flex flex-col gap-1 items-center">
							<User className="w-6 md:w-8 h-6 md:h-8" />
							<p className="text-sm select-none hidden lg:flex">پروفایل</p>
						</Link>

						<Link href="/" className="flex flex-col gap-1 items-center">
							<CartSmile className="w-6 md:w-8 h-6 md:h-8" />

							<p className="text-sm select-none hidden lg:flex">سبد خرید</p>
						</Link>

						<button
							className="flex flex-col gap-1 items-center cursor-pointer lg:hidden"
							onClick={() => {}}>
							<MenuHome className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export function BottomHeader() {
	return <></>;
}

function Header() {
	return (
		<div className="bg-background-default dark:bg-background-default-dark">
			<TopHeader />
			<BottomHeader />
		</div>
	);
}

export default Header;
