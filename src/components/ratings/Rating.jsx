import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

function Rating({ numOfStars = 5 }) {
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

  const handleMouseMove = (index) => {
    setHover(index)

  }

  const handleClick = (index) => {
    setRating(index)
  }

  const handleMouseLeave = (index) => {
    setHover(index)
  }

  return (
    <div>
      {[...Array(numOfStars)].map((_, index) => (
        <FaStar
          key={index + 1}
          style={index < rating || index  < hover  ? { color: 'yellow'}: {color: 'black'}}
          onMouseMove={() => handleMouseMove(index + 1)}
          onClick={() => handleClick(index + 1)}
          onMouseLeave={() => handleMouseLeave(index + 1)}
        />
      ))}
    </div>
  )
}

export default Rating
