import React from 'react';
import CardList from './CardList';
import NewUser from './NewUser';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  deleteProfile = (userProfile) => {
    let filteredProfiles = this.state.profiles.filter(
      (profile) => profile.id !== userProfile.id
    );
    this.setState({ profiles: filteredProfiles });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="header">{this.props.title}</div>
          <NewUser onSubmit={this.addNewProfile} />
          <CardList
            profiles={this.state.profiles}
            onDelete={this.deleteProfile}
          />
        </div>
      </>
    );
  }
}

export default App;
