import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const profile = this.props;
    console.log(profile);
    return (
      <div className="github-profile">
        {/* <div className="img-resize"> */}
        <img className="img-resize" src={profile.avatar_url} />
        {/* </div> */}
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
      </div>
    );
  }
}

export default Card;
