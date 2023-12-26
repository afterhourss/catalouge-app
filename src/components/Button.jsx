import '../style/main.scss'

function Button({text = "Button", colorBtn, bgBtn, borderBtn = "false"}) {
    const btnStyle = {
        color: colorBtn,
        backgroundColor: bgBtn,
        border: borderBtn,
    }
    if (borderBtn){
        btnStyle.border = '2px solid #fff'
    }
  return (
    <button className="button" style={btnStyle}>{text}</button>
  )
}

export default Button