import SearchAjax from "@/components/SearchAjax";
import Image from "next/image";

export function TopHeader() {
	return (
		<div className="container flex items-center justify-between gap-3 py-5">
			<div>
				<Image
					alt=""
					src="/Image/logo.svg"
					width={151}
					height={46}
					className=""
				/>
			</div>
			<div>
				<SearchAjax />
			</div>
			<div></div>
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
