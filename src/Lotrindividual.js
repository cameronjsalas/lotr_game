import React, {Component} from 'react';
import './Lotrindividual.css';

const LOTR_API = './img/';

//let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Lotrindividual extends Component {


  render() {
    let imgSrc = `${LOTR_API}${this.props.id}.jpg`;
    return (
      <div className="Lotrindividual">
        <h1 className="Lotrindividual-title">{this.props.name}</h1>
        <div className="Lotrindividual-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>

        <div className="Lotrindividual-data">Race: {this.props.race}</div>
        <div className="Lotrindividual-data">Power: {this.props.pwr}</div>
      </div>
    );
  }
}

export default Lotrindividual;
