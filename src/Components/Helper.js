class Helper{
    /*
        Helper class that has non-react-related jobs
     */
    shuffleCards = cards =>  {
        let newArray = [];

        while (cards.length > 0) {
            let randInt = Math.floor(Math.random() * cards.length);
            newArray.push(cards[randInt]);
            cards.splice(randInt, 1);
        }
        return newArray;
    }
}

export default Helper;