import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { profiles, onDelete } = this.props;
    console.log(profiles);
    return (
      <div>
        {profiles.map((profile) => (
          <Card key={profile.id} {...profile} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default CardList;
