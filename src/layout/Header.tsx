import Image from "next/image";

export function TopHeader() {
	return (
		<div className="flex gap-3">
			<div>
				<Image
					alt=""
					src="/Image/logo.svg"
					width={10}
					height={10}
					className="w-10"
				/>
			</div>
			<div></div>
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
