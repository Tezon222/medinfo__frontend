import { useEffect } from "react";
import { type StateCreator, create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import type { MediaQueryStore, SelectorFn } from "./mediaQueryStore.types";
import { MEDIA_QUERY_LOOKUP, desktopQuery, mobileQuery, tabletQuery } from "./mediaQueryStore.utils";

const stateObjectFn: StateCreator<MediaQueryStore> = (set, get) => ({
	isMobile: mobileQuery.matches,
	isTablet: tabletQuery.matches,
	isDesktop: desktopQuery.matches,

	actions: {
		initQueryListeners: () => {
			const { setQuery } = get().actions;

			mobileQuery.addEventListener("change", setQuery("mobile"));
			tabletQuery.addEventListener("change", setQuery("tablet"));
			desktopQuery.addEventListener("change", setQuery("desktop"));
		},

		setQuery: (query) => () => {
			const queryKey = MEDIA_QUERY_LOOKUP[query].key;
			const newQueryState = MEDIA_QUERY_LOOKUP[query].queryList.matches;

			set({ [queryKey]: newQueryState });
		},
	},
});

export const mediaStoreHook = create<MediaQueryStore>()(stateObjectFn);

export const useMediaQuery = <TState>(selector: SelectorFn<TState>) => {
	const state = mediaStoreHook(useShallow(selector));

	useEffect(() => {
		mediaStoreHook.getState().actions.initQueryListeners();
	}, []);

	return state;
};
