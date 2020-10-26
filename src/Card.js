import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const profile = this.props;
    const onDelete = this.props.onDelete;

    return (
      <div className="github-profile">
        <img
          alt="user profile"
          className="img-resize"
          src={profile.avatar_url}
        />
        <div className="info">
          <div className="login">{profile.login}</div>
          {profile.name ? (
            <div className="name">{profile.name}</div>
          ) : (
            <div className="name">Name: 🤷‍♀️</div>
          )}
          {profile.location ? (
            <div className="location">{profile.location}</div>
          ) : (
            <div className="location">Location: 🤷‍♀️</div>
          )}
          <div className="public-repos">
            Public Repos: {profile.public_repos}
          </div>
        </div>
        <button onClick={() => onDelete(profile)} className="delete">
          X
        </button>
      </div>
    );
  }
}

export default Card;
