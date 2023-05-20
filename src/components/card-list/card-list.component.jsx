import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
  render() {
    //==== import props given in App.js ======
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map(monster => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
