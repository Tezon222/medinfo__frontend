import type { MEDIA_QUERY_LOOKUP } from "./zustand-constants";

export type MediaQueryStore = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;

	actions: {
		setQuery: (query: keyof typeof MEDIA_QUERY_LOOKUP) => () => void;
		handleQueryListeners: (action: "add" | "remove") => void;
	};
};

export type SelectorFn<TState, TStore = MediaQueryStore> = (state: TStore) => TState;
