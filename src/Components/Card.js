import React from 'react'

class Card extends React.Component{
    /*
    Card component. Background color changes depending on its state.
     */

    render() {
        let style = {
            padding: "80px",
            cursor: "pointer",
            border: "1px solid black",
            backgroundColor: "black",
            display: "inline-block",
            color: "white",
            float: "left",
            width: "calc(33.333% – 10px)",
            margin: "10px 10px 10px 10px",
            borderRadius: "13px 13px 13px 13px",
            fontSize: "30px",
            opacity: "100%"
        };
        style.backgroundColor = this.props.color;
        if(style.backgroundColor != "white"){style.opacity = "40%"}

        return(
            <div style={style} onClick={this.props.onclick}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

export default Card;