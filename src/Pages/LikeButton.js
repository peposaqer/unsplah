import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function LikeButton() {
  const[liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  if(liked)
    return <FaHeart color="red" size="40" onClick={handleClick} className='heart' />;
  return (
    <CiHeart color="white" size="40" onClick={handleClick} className="heart" />
  );  
}

export default LikeButton;