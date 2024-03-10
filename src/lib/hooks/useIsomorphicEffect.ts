import { useEffect, useLayoutEffect } from "react";
import { isServer } from "../utils/constants";

const useIsomorphicEffect = isServer ? useEffect : useLayoutEffect;

export { useIsomorphicEffect };
