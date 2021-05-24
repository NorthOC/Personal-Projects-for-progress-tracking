import stylez from "./Box.module.css"

function Box (props){
    return <div id ="quote-box" className = {stylez.box}>{props.children}</div>
}

export default Box