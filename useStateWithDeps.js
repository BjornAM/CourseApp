import { useEffect, useState } from "react";

export function useStateWithDeps(initialState, deps) {
  const [res, setRes] = useState(initialState);
  useEffect(() => {
    setRes(initialState);
  }, deps);

  return [res, setRes];
}
