import React, { useState } from "react";
import Button from "./Button/Button";

interface Props {
  maxChars: number;
  children: string;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <p>{text}... </p>
      <Button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
