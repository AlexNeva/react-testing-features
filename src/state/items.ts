import { atom, atomFamily, selector } from 'recoil';

type TItem = {
	id: number;
	position: number;
};

export const itemsSelector = selector<TItem[]>({
	key: 'itemsSelector',
	get: async ({ get }) => {
		const response = await fetch('/items.json');
		const { data } = await response.json();

		return data;
	},
});

export const itemsAtom = atom({
	key: 'itemsAtom',
	default: itemsSelector,
});

export const currentDragItem = atomFamily({
	key: 'currentDragItem',
	default: (id: number) => ({ top: 0, right: 0, bottom: 0, left: 0 }),
});

export const cardListInfo = atom({
	key: 'cardListInfo',
	default: { top: 0, right: 0, bottom: 0, left: 0 },
});
