import React, { useState } from "react";
import styles from "./LikeIcon.models.css";
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

  if (status) return <AiFillHeart color="pink" onClick={toggle} size="50" />;
  return <AiOutlineHeart onClick={toggle} size="50" />;
};

export default LikeIcon;
