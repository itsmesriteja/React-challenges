import React, { useState } from 'react'
import data from './data.js'

function Accordian() {
  const [selectedId, setSelectedId] = useState(null)
  const [enableMultiClick, setEnableMultiClick] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleClick = (getItemId) => {
    if (enableMultiClick) {
      const multiArray = [...multiple]
      const indexofItemId = multiArray.indexOf(getItemId)
      if (indexofItemId === -1) {
        multiArray.push(getItemId)
      } else {
        multiArray.splice(indexofItemId, 1)
      }
      setMultiple(multiArray)
    } else {
      selectedId === getItemId ? setSelectedId(null) : setSelectedId(getItemId)
    }
  }

    console.log(enableMultiClick, multiple)
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiClick(!enableMultiClick)}>
        EnableMultiHandling
      </button>
      {data && data.length > 0 ? (
        <div className="accordian">
          {data.map((dataItem) => (
            <div onClick={() => handleClick(dataItem.id)} key={dataItem.id}>
              {dataItem.question}
              <button> + </button>
              {enableMultiClick
                ? multiple.includes(dataItem.id) && <div>{dataItem.answer}</div>
                : selectedId === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          ))}
        </div>
      ) : (
        <div>No results found!</div>
      )}
    </div>
  )
}

export default Accordian
