const Square = ({ colorName }) => {
  return (
    <section className="square"
      style={{ backgroundColor: colorName}}
    >
    <p>{colorName ? colorName : 'Empty value'}</p>
    </section>
  )
}

export default Square
