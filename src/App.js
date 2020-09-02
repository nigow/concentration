import React from 'react';
import Deck from './Components/Deck'
import InitialSetting from "./Components/InitialSetting";
import styles from './Components/styles.css'

class App extends React.Component{
    state = {
        showDeck: false,
        maxNum: -1
    }

    setNumber = event => {
        this.setState({maxNum: event.target.value})
    }

    toggleDeckHandler = () => {
        this.setState({
            showDeck: true
        })
    }
    render(){
        let deck = null;
        if(this.state.showDeck){
            deck = <Deck className={styles.deck} maxNum={this.state.maxNum}/>;
        }
        return(
            <div>
                <div>
                    <InitialSetting onchange={this.setNumber} onclick={this.toggleDeckHandler} />
                </div>
                <p></p>
                <div>
                    {deck}
                </div>
            </div>
        )
    }
}

export default App;
