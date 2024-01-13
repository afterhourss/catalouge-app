import '../style/main.scss'

function Button({text = "Button", colorBtn, bgBtn}) {
    const btnStyle = {
        color: colorBtn,
        backgroundColor: bgBtn,
    }

  return (
    <button className="button" style={btnStyle}>{text}</button>
  )
}

export default Button