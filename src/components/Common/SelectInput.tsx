import SelectInput, { SelectItem } from "../../types/SelectInput";
import { ArrowDropDown } from "react-huge-icons/outline";
function SelectInput({ name, id, className, option }: SelectInput) {
	return (
		<div className={`relative flex gap-1 group ${className}`}>
			<select
				name={name}
				id={id}
				className="appearance-none w-full p-2 pl-7 z-10 bg-transparent">
				{option.map(({ value, lable, selected }: SelectItem) => (
					<option key={value} value={value} selected={selected}>
						{lable}
					</option>
				))}
			</select>
			<ArrowDropDown className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1 z-0 text-text-primary dark:text-text-primary-dark" />
		</div>
	);
}

export default SelectInput;
