import React, { useState } from 'react'

function Random() {
  const [color, setColor] = useState('#00000')
  const [colorType, setColorType] = useState('')
  const randomNumber = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleRandomHex = () => {
    let hexColor = '#'
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)]
    }
    setColor(hexColor)
    setColorType('HEX')
  }

  const handleRandomRGB = () => {
    const r = randomNumber(256)
    const g = randomNumber(256)
    const b = randomNumber(256)

    const RGB = `rgb(${r}, ${g}, ${b})`
    setColor(RGB)
    setColorType('RGB')
  }

  return (
    <div style={{ background: color, height: '100vh', width: '100vw' }}>
      <button onClick={handleRandomHex}>random Hex</button>
      <button onClick={handleRandomRGB}>random rgb</button>
      <button onClick={colorType === 'HEX' ? handleRandomRGB : handleRandomHex}>
        random color
      </button>
      <div>
        {colorType && (
          <span>
            {colorType}: {color}
          </span>
        )}
      </div>
    </div>
  )
}

export default Random
