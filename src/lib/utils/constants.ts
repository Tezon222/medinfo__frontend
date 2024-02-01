export const isBrowser = typeof window !== "undefined";

const fakeMediaQueryList = {
	matches: false,
	addEventListener: () => {},
	removeEventListener: () => {},
};

export const mobileQuery = isBrowser ? window.matchMedia("(max-width: 767px)") : fakeMediaQueryList;

export const tabletQuery = isBrowser ? window.matchMedia("(min-width: 768px)") : fakeMediaQueryList;

export const desktopQuery = isBrowser ? window.matchMedia("(min-width: 1000px)") : fakeMediaQueryList;
