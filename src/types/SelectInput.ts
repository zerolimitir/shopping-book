import * as React from "react";
export interface SelectItem {
	value: string;
	lable: string;
	selected?: boolean;
}

export default interface SelectInput {
	id?: string;
	name: string;
	className?: string;
	option: SelectItem[];
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			options: React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}
