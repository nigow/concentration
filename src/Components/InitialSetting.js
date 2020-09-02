import React from 'react'
import styles from './styles.css'

class InitialSetting extends React.Component{

    render(){
        return(
            <div id="initialSetting">
                <div>
                    <h1>Easy Concentration</h1>
                    <p>Pick a number 0-9 to play concentration!</p>
                </div>
                <div>
                    <input type="number" name="name" max="9" min="1"
                           placeholder="What is the maximum number?" onChange={this.props.onchange}/>
                    <input type="submit" value="Start" onClick={this.props.onclick}/>
                </div>
            </div>
        )
    }

}

export default InitialSetting;