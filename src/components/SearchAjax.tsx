import { Search, PackagingSearch, BookSearch } from "react-huge-icons/outline";
import SelectInput from "./Common/SelectInput";
import { SelectItem } from "../types/SelectInput";

function SearchAjax() {
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

	return (
		<>
			<div className="flex items-center justify-between border-2 border-primary bg-background-default dark:bg-background-default-dark rounded overflow-hidden h-10">
				<input type="text" className="p-1 bg-transparent" />
				<SelectInput
					name=""
					id=""
					className="border-r-2 border-primary"
					option={selectList}
				/>

				<button className="flex items-center justify-center bg-primary border-primary w-10 h-full">
					<Search className="w-6 h-6" />
				</button>
			</div>
		</>
	);
}

export default SearchAjax;
