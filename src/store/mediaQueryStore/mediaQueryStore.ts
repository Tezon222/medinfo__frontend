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
		handleQueryListeners: (action) => {
			const { setQuery } = get().actions;

			if (action === "remove") {
				mobileQuery.removeEventListener("change", setQuery("mobile"));
				tabletQuery.removeEventListener("change", setQuery("tablet"));
				desktopQuery.removeEventListener("change", setQuery("desktop"));

				return;
			}

			mobileQuery.addEventListener("change", setQuery("mobile"));
			tabletQuery.addEventListener("change", setQuery("tablet"));
			desktopQuery.addEventListener("change", setQuery("desktop"));
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
	}, []);

	return state;
};
