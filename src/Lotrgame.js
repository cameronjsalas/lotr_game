import React, {Component} from 'react';
import Lotrgroup from './Lotrgroup';

class Lotrgame extends Component {
  static defaultProps = {
  character : [
    {id: 1, name: 'Aragorn', race: 'Human', power: 84},
    {id: 2, name: 'Boromir', race: 'Human', power: 63},
    {id: 3, name: 'Frodo', race: 'Hobbit', power: 39},
    {id: 4, name: 'Gandalf', race: 'Wizard', power: 89},
    {id: 5, name: 'Gimli', race: 'Dwarf', power: 52},
    {id: 6, name: 'Legolas', race: 'Elf', power: 62},
    {id: 7, name: 'Saruman', race: 'Wizard', power: 58},
    {id: 8, name: 'Sauron', race: 'Maia', power: 99}
  ]
};

  render() {
    let hand1 = [];
    let hand2 = [...this.props.character];
    while(hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randCharacter = hand2.splice(randIdx, 1)[0];
      hand1.push(randCharacter);
    }

    let pwr1 = hand1.reduce((pwr, character) => pwr + character.power, 0);
    let pwr2 = hand2.reduce((pwr, character) => pwr + character.power, 0);
    return(
      <div className="Lotrgame">
        <Lotrgroup character={hand1} pwr={pwr1} isWinner={pwr1 > pwr2} />
        <Lotrgroup character={hand2} pwr={pwr2} isWinner={pwr2 > pwr1} />
      </div>
    );
  }
}

export default Lotrgame;
