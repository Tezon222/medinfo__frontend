import { useEffect } from "react";
import { type StateCreator, create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { MEDIA_QUERY_LOOKUP } from "./zustand-constants";
import type { MediaQueryStore, SelectorFn } from "./zustand-store.types";

const stateObjectFn: StateCreator<MediaQueryStore> = (set, get) => ({
	isMobile: MEDIA_QUERY_LOOKUP.mobile.queryList.matches,
	isTablet: MEDIA_QUERY_LOOKUP.tablet.queryList.matches,
	isDesktop: MEDIA_QUERY_LOOKUP.desktop.queryList.matches,

	actions: {
		handleQueryListeners: (action) => {
			const { setQuery } = get().actions;
			const { mobile, tablet, desktop } = MEDIA_QUERY_LOOKUP;

			if (action === "remove") {
				mobile.queryList.removeEventListener("change", setQuery("mobile"));
				tablet.queryList.removeEventListener("change", setQuery("tablet"));
				desktop.queryList.removeEventListener("change", setQuery("desktop"));

				return;
			}

			mobile.queryList.addEventListener("change", setQuery("mobile"));
			tablet.queryList.addEventListener("change", setQuery("tablet"));
			desktop.queryList.addEventListener("change", setQuery("desktop"));
		},

		setQuery: (query) => () => {
			const { queryKey, queryList } = MEDIA_QUERY_LOOKUP[query];

			set({ [queryKey]: queryList.matches });
		},
	},
});

const useInitMediaStore = create<MediaQueryStore>()(stateObjectFn);

export const useMediaQuery = <TState>(selector: SelectorFn<TState>) => {
	const state = useInitMediaStore(useShallow(selector));
	const { handleQueryListeners } = useInitMediaStore.getState().actions;

	useEffect(() => {
		handleQueryListeners("add");

		return () => handleQueryListeners("remove");
	}, [handleQueryListeners]);

	return state;
};
