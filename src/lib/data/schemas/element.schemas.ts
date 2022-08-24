import type { StylesType } from './styles.schema';

export interface ElementTypes {
	id?: string;
	elementName?: string;
	children?: ElementTypes[];
	elementId?: string;
	elementClass?: string;
	styles?: StylesType;
	content?: any;
	href?: string;
}
