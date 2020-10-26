import React from 'react';
import axios from 'axios';
import './NewUser.css';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    const profileData = res.data;
    this.props.onSubmit(profileData);
    this.setState({ username: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default NewUser;
