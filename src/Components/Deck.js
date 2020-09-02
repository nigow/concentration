import React from 'react';
import Helper from './Helper'
import Card from './Card'
import styles from './styles.css'

class Deck extends React.Component{
    /*
    Component that manages all cards
     */
    state = {
        cards: [],
        pickedCards: [],
        answered: [],
        previousNumber: -1,
        previousColor: null
    }

    constructor(props) {
        super(props);
        const colors = ['red', 'darkgreen'];
        const maxNum = this.props.maxNum; //the largest number of this game
        colors.map((color, index) => {
            for(let i=1; i<=maxNum; i++){
                this.state.cards.push({
                    id: index*10 + i,
                    color: color,
                    currentColor: "white",
                    number: i,
                    onclick: (() => this.clickButtonHandler(i, color)),
                    disabled: false
                })
            }
            return null;
        });
        let helper = new Helper();

        this.state.cards = helper.shuffleCards(this.state.cards);
    }

    clickButtonHandler = (number, color) => {
        /*
        Run when a card is clicked.
         */
        let cards = [...this.state.cards];
        let pickedCards = [...this.state.pickedCards];
        let answered = [...this.state.answered];
        if(pickedCards.length === 2){
            if(pickedCards[0].number === pickedCards[1].number){
                /* Two cards match. Turn them black so that no longer selectable. Add them to the correct answer stack*/
                answered.push(pickedCards[1].number);
                pickedCards[0].currentColor = "black";
                pickedCards[0].disabled = true;
                pickedCards[1].currentColor = "black";
                pickedCards[1].disabled = true;
            }
            else{ //no match then turn them back to white
                pickedCards.map((pickedCard) => {
                    pickedCard.currentColor = "white";
                    return null;
                })
            }
            this.setState({pickedCards: []})
        }
        else{
            const currentCard = cards.find(card => {return card.number === number && card.color === color});
            if(!currentCard.disabled){
                currentCard.currentColor = currentCard.color;
                pickedCards.push(currentCard);
                if(!(number === this.state.previousNumber && color === this.state.previousColor)){
                    this.setState({
                        cards: cards,
                        pickedCards: pickedCards,
                        answered: answered,
                        previousNumber: number,
                        previousColor: color
                    })
                }
            }

        }

    }


    render() {
        let cards = this.state.cards.map(card => {
            return <Card key={card.id} color={card.currentColor} number={card.number} onclick={card.onclick}/>
        })

        return(
            <div id="deck">
                {cards}
            </div>
            )
    }
}

export default Deck;
