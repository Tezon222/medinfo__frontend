import { isBrowser } from "@/lib/utils/constants";

const placeholderQuerylist = { matches: false, addEventListener: () => {} };

export const mobileQuery = isBrowser ? window.matchMedia("(max-width: 767px)") : placeholderQuerylist;

export const tabletQuery = isBrowser ? window.matchMedia("(min-width: 768px)") : placeholderQuerylist;

export const desktopQuery = isBrowser ? window.matchMedia("(min-width: 1000px)") : placeholderQuerylist;

export const MEDIA_QUERY_LOOKUP = {
	mobile: {
		key: "isMobile",
		queryList: mobileQuery,
	} as const,

	tablet: {
		key: "isTablet",
		queryList: tabletQuery,
	} as const,

	desktop: {
		key: "isDesktop",
		queryList: desktopQuery,
	} as const,
};
