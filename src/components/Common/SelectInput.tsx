import { useRef } from "react";
import SelectInput, { SelectItem } from "../../types/SelectInput";
function SelectInput({ name, id, className, onChange, option }: SelectInput) {
	const select = useRef<HTMLSelectElement>(null);
	return (
		<div className={className}>
			<select
				name={name}
				id={id}
				ref={select}
				className="w-full p-1 pl-3 bg-transparent text-text-secondary dark:text-text-secondary-dark"
				onChange={onChange}>
				{option.map(({ value, lable, selected }: SelectItem) => (
					<option key={value} value={value} selected={selected}>
						{lable}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectInput;
