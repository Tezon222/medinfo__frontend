import { isBrowser } from "@/lib/utils/constants";

const fakeMediaQueryList = {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
};

export const mobileQuery = isBrowser ? window.matchMedia("(max-width: 767px)") : fakeMediaQueryList;

export const tabletQuery = isBrowser ? window.matchMedia("(min-width: 768px)") : fakeMediaQueryList;

export const desktopQuery = isBrowser ? window.matchMedia("(min-width: 1000px)") : fakeMediaQueryList;

export const MEDIA_QUERY_LOOKUP = {
	mobile: {
		queryKey: "isMobile",
		queryList: mobileQuery,
	} as const,

	tablet: {
		queryKey: "isTablet",
		queryList: tabletQuery,
	} as const,

	desktop: {
		queryKey: "isDesktop",
		queryList: desktopQuery,
	} as const,
};
