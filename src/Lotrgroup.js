import React, {Component} from 'react';
import Lotrindividual from './Lotrindividual'
import './Lotrgroup.css';

class Lotrgroup extends Component {

  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className="Lotrgroup-winner">Winning Hand</h1>
    } else {
      title = <h1 className="Lotrgroup-loser">Losing Hand</h1>
    }
    return (
      <div className="Lotrgroup">
        {title}
        <h4 className="Lotrgroup-exp">Total Power: {this.props.pwr}</h4>
        <div className="Lotrgroup-cards">
        {this.props.character.map((p) => (
            <Lotrindividual id={p.id} name={p.name} race={p.race} pwr={p.power} />
        ))}
        </div>
      </div>
    );
  }
}

export default Lotrgroup;
