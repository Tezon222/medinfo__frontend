import { useEffect, useState } from "react";
import type { StoreApi, UseBoundStore } from "zustand";
import { useCallbackRef } from "./useCallbackRef";

/**
 * A custom hook that returns a value from a store and syncs it with a local state.

 * This solves NextJs mount hydration issue.
 * */

const useFromStore = <TStore, TStateSlice>(
	useZustandStore: UseBoundStore<StoreApi<TStore>>,
	callbackFn: (state: TStore) => TStateSlice
) => {
	const selector = useCallbackRef(callbackFn);
	const zustandState = useZustandStore(selector);

	const [state, setState] = useState<TStateSlice>(zustandState);

	useEffect(
		function initializeStateAfterPaintEffect() {
			setState(zustandState);
		},

		[zustandState]
	);

	return state;
};

export { useFromStore };
