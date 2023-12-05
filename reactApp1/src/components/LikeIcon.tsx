import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const LikeIcon = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <>
        <br />
        <h2>Like Icon</h2>
        <AiFillHeart color="pink" onClick={toggle} size="50" />
        <br />
      </>
    );
  return (
    <>
      <br />
      <h2>Like Icon</h2>
      <AiOutlineHeart onClick={toggle} size="50" />
      <br />
    </>
  );
};

export default LikeIcon;
