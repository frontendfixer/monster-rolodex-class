import { Component } from 'react';

import './card.style.css';

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;

    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${
            id * Math.round(Math.random() * 10)
          }?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
