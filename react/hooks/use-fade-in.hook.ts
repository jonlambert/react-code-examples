import { useSpring } from "react-spring";
import { useEffect } from "react";

export const useFadeIn = () => {
  const [animatedProps, set] = useSpring(() => ({
    translateY: 10,
    scale: 0.97,
    rotateX: 10,
    opacity: 0
  }));

  useEffect(() => {
    set({ translateY: 0, scale: 1.0, rotateX: 0, opacity: 1 } as any);
  });

  return animatedProps;
};
