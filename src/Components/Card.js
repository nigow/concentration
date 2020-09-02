import React from 'react'

class Card extends React.Component{

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
            // margin: "0 30px 30px 0"
            margin: "0 30px 30px 0",
            borderRadius: "13px 13px 13px 13px",
            fontSize: "30px"
        };
        style.backgroundColor = this.props.color;

        return(
            <div style={style} onClick={this.props.onclick}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

export default Card;