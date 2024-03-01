import { desktopQuery, mobileQuery, tabletQuery } from "@/lib/utils/constants";

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
