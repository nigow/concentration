import React from 'react'
import styles from './styles.css'

class InitialSetting extends React.Component{

    render(){
        return(
            <div className={styles.initialSetting}>
                {/*<NumberInput changed={event => this.setNumber(event)}/>*/}
                <input className={styles.numberInput} type="number" name="name" max="9" min="1"
                       placeholder="1" size="10" onChange={this.props.onchange}/>
                <input type="submit" value="Start" onClick={this.props.onclick}/>
            </div>
        )
    }

}

export default InitialSetting;