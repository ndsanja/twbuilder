import { ElementEnums } from '$lib/data/enums/element.enum';
import type { ElementTypes } from '$lib/data/schemas/element.schemas';
import { writable } from 'svelte/store';
import { proxy } from 'sveltio';

const initialData: ElementTypes[] = [
	{
		id: 'p0',
		elementName: ElementEnums.div,
		content: 'p0',
		styles: {
			components: '',
			layout: 'flex items-center justify-between',
			spacing: 'p-5 m-4',
			size: 'min-w-50',
			position: '',
			typography: '',
			backgrounds: 'bg-blue-500',
			borders: 'rounded-xl',
			effects: ''
		},
		children: []
	},
	{
		id: 'p1',
		elementName: ElementEnums.div,
		content: 'p1',
		styles: {
			components: '',
			layout: 'flex items-center justify-evenly',
			spacing: 'p-5 space-x-8 m-4',
			size: 'min-w-50',
			position: '',
			typography: '',
			backgrounds: 'bg-yellow-500',
			borders: 'rounded-xl',
			effects: ''
		},

		children: [
			{
				id: 'c1',
				elementName: ElementEnums.div,
				content: 'c1',
				styles: {
					components: '',
					layout: 'flex flex-1 items-center',
					spacing: 'p-5',
					size: 'min-w-50',
					position: '',
					typography: '',
					backgrounds: 'bg-teal-500',
					borders: 'rounded-xl',
					effects: 'shadow-xl'
				},

				children: []
			},
			{
				id: 'c2',
				elementName: ElementEnums.div,
				content: 'c2',
				styles: {
					components: '',
					layout: 'flex flex-col items-center justify-between',
					spacing: 'p-5 space-y-2',
					size: 'min-w-[50px]',
					position: '',
					typography: '',
					backgrounds: 'bg-blue-500',
					borders: 'rounded-2xl',
					effects: 'shadow-xl'
				},

				children: [
					{
						id: 'c2-1',
						elementName: ElementEnums.div,
						content: 'c2-1',
						styles: {
							components: '',
							layout: 'flex items-center justify-center',
							spacing: 'p-5',
							size: 'min-w-[50px] md:w-[300px]',
							position: '',
							typography: '',
							backgrounds: 'bg-green-500',
							borders: 'rounded-xl',
							effects: ''
						},

						children: []
					},
					{
						id: 'c2-2',
						elementName: ElementEnums.div,
						content: 'c2-2',
						styles: {
							components: '',
							layout: 'flex items-center justify-between',
							spacing: 'p-5',
							size: 'min-w-50',
							position: '',
							typography: '',
							backgrounds: 'bg-red-500',
							borders: 'rounded-xl',
							effects: ''
						},

						children: []
					}
				]
			}
		]
	},
	{
		id: 'p2',
		elementName: ElementEnums.div,
		content: 'p2',
		styles: {
			components: '',
			layout: 'flex items-center justify-between',
			spacing: 'p-5  m-4',
			size: 'min-w-50',
			position: '',
			typography: '',
			backgrounds: 'bg-red-500',
			borders: 'rounded-xl',
			effects: ''
		},

		children: []
	}
];

export const elementDataStore = proxy<ElementTypes[]>(initialData);
export const elementIdStore = writable<any>('');
export const elementOnHover = writable<any>('');

export const getElementById = (elementId: any) => {
	let resultElement: ElementTypes = {};
	elementDataStore.some(function iter(element: ElementTypes) {
		if (element.id === elementId) {
			resultElement = element;
			return true;
		}
		return Array.isArray(element.children) && element.children.some(iter);
	});
	return resultElement;
};
