import React from 'react';
import Card from './Card'

class Main extends React.Component{
    state = {
        firstAttempt: true,
        previousNumber: -1,
        previousColor: null,
        pickedCards: [], //format: [index, <Card>]
        cards: null,
        hiddenCards: null,
        id: 0
    }

    clickButtonHandler = (number, color) => {

        let cards = [...this.state.cards];
        let pickedCards = [...this.state.pickedCards];
        let hiddenCards = [...this.state.hiddenCards];
        console.log(this.state.previousNumber)

        if(this.state.pickedCards.length === 2){ //Two cards are being shown atm. Do it with any click
            let matchedColour = "white";
            if(pickedCards[0][1].props.number === pickedCards[1][1].props.number){
                matchedColour = "black" //two cards match => make them black and unpickable
            }
            this.state.pickedCards.map(cardArray => {
                hiddenCards[cardArray[0]] = <Card color={matchedColour} number={cardArray[1].props.number} />;
                return null;
            })
            pickedCards = []
        }

        else if(!(number === this.state.previousNumber && color === this.state.previousColor)){ //do not select the same card twice
            for(let i=0; i<this.state.cards.length; i++){ //find the index of the current card
                if(cards[i].props.number===number && cards[i].props.color===color){
                    pickedCards.push([i, cards[i]]);
                    hiddenCards[i] = cards[i];
                }
            }
            if(number === this.state.previousNumber && this.state.firstAttempt === false){ //correct pick in the second attempt
                this.deleteCard(number);
            }
        }
        this.setState({
            firstAttempt: !this.state.firstAttempt,
            previousNumber: number,
            previousColor: color,
            pickedCards: pickedCards,
            hiddenCards: hiddenCards,
            cards: cards
        });
    }

    deleteCard = number => {
        let tempArray = [...this.state.hiddenCards];
        for(let i=0; i<this.state.cards.length; i++){
            if (this.state.cards[i].props.number === number){
                tempArray[i] = this.state.cards[i];
            }
        }
        this.setState({hiddenCards: tempArray})
    }

    // shuffle = cards => {
    //     let newArray = [];
    //
    //     while (cards.length > 0) {
    //         let randInt = Math.floor(Math.random() * cards.length);
    //         newArray.push(cards[randInt]);
    //         cards.splice(randInt, 1);
    //     }
    //     return newArray;
    // }

    //properties = () => {return this.cardRef.current.getCardProperties()};


    constructor() {
        super();
        const colours = ['red', 'darkgreen'];
        const maxNum = 5;
        let cards = []
        let counter = 0;
        let hiddenCards = []
        colours.map(color => {
            for(let i=1; i<=maxNum; i++){
                cards.push(<Card id={counter}
                                 color={color}
                                 number={i}
                                 onclick={() => this.clickButtonHandler(i, color)}/>);
                hiddenCards.push(<Card color="white"
                                       number={i}
                                       onclick={() => this.clickButtonHandler(i, color)}/>)

                counter++;
            }
            return null;
        });
        cards = [...this.shuffle(cards)];
        this.state.cards = cards;
        this.state.hiddenCards = hiddenCards;
        this.state.id = counter;

    }

    render(){
        return (
            <div>
                <p></p>
                {this.state.hiddenCards}
            </div>
        )
    }

}

export default Main;