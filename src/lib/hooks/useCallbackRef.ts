import { useCallback, useRef } from "react";
import { useIsomorphicEffect } from "./useIsomorphicEffect";

const useCallbackRef = <TParams, TResult>(callbackFn: (...params: TParams[]) => TResult) => {
	const callbackRef = useRef(callbackFn);

	useIsomorphicEffect(() => {
		callbackRef.current = callbackFn;
	}, [callbackFn]);

	const savedCallback = useCallback((...params: TParams[]) => callbackRef.current(...params), []);

	return savedCallback;
};

export { useCallbackRef };
