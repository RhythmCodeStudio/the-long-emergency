"use client";
// import from react
import React, { JSX, FC } from "react";
// import themes
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";

interface HeadingProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ text, headingLevel, className }) => {
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const color = themeObj.color;
  // const textShadow = themeObj.textShadow;

  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    HeadingTag,
    { className: className },
    text
  );
};

export default Heading;