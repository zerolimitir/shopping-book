import {
	Search,
	Article,
	BookSearch,
	LoadingDoted,
} from "react-huge-icons/outline";
import SelectInput from "./Common/SelectInput";
import { SelectItem } from "../types/SelectInput";
import React, { useEffect, useState } from "react";

function SearchAjax() {
	const [isLoading, setIsLoading] = useState<Boolean>(false);
	const [inputSerch, setInputSearch] = useState<String>("");
	const [typeSearch, setTypeSearch] = useState<String>("All");
	const [buttonSearchIcon, setButtonSearchIcon] = useState(
		<Search className="w-6 h-6" />,
	);

	const selectList: SelectItem[] = [
		{
			value: "all",
			lable: "همه",
			selected: true,
		},
		{
			value: "book",
			lable: "کتاب",
			selected: false,
		},
		{
			value: "e-book",
			lable: "کتاب الکترونیکی",
			selected: false,
		},
		{
			value: "article",
			lable: "مقالات",
			selected: false,
		},
	];

	const SubmitSearchHandler = (eventSubmit: React.SyntheticEvent) => {
		eventSubmit.preventDefault();
	};

	const inputSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true);
		setInputSearch(e.target.value);
	};

	const typeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value == "book" || e.target.value == "e-book")
			setButtonSearchIcon(<BookSearch className="w-6 h-6" />);
		else if (e.target.value == "article")
			setButtonSearchIcon(<Article className="w-6 h-6" />);
		else setButtonSearchIcon(<Search className="w-6 h-6" />);
		setTypeSearch(e.target.value);
	};

	useEffect(() => {
		const delayRequest = setTimeout(() => {
			// After receiving the response from the server, this loading should be false
			setIsLoading(false);
		}, 2000);

		return () => {
			clearTimeout(delayRequest);
		};
	}, [inputSerch]);

	return (
		<div className="relative h-full">
			<form
				onSubmit={SubmitSearchHandler}
				className={`flex flex-wrap justify-between bg-background-default dark:bg-background-default-dark  overflow-hidden h-10 border-2 border-primary ${inputSerch ? "rounded-t-lg  border-b-0" : "rounded-lg"}`}>
				<input
					type="text"
					className="p-2 bg-transparent"
					placeholder="جستجو کنید ..."
					onChange={inputSearchHandler}
				/>
				<SelectInput
					name=""
					id=""
					className="border-r-2 border-primary px-3 h-full"
					option={selectList}
					onChange={typeSearchHandler}
				/>
				<button className="flex items-center justify-center bg-primary border-primary w-10 h-full">
					{isLoading ? (
						<LoadingDoted className="w-6 h-6 animate-spin" />
					) : (
						buttonSearchIcon
					)}
				</button>
			</form>
			{inputSerch && (
				<div className={`absolute top-10 w-full h-64 bg-background-default text-text-primary border-2 border-primary ${inputSerch ? "rounded-b-lg" : "rounded-lg"}`}>
					{isLoading ? (
						<p>LOading</p>
					) : (
						<p>{inputSerch ? inputSerch : "Empty"}</p>
					)}
				</div>
			)}
		</div>
	);
}

export default SearchAjax;
