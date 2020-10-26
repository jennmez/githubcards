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
    console.log('hello');
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="header">{this.props.title}</div>
          <NewUser onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
        </div>
      </>
    );
  }
}

export default App;
