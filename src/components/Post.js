import React from 'react';
import PropTypes from 'prop-types';

class PostForm extends React.Component {
  state = {
    logged_in: '',
    post:''
          // username: json.user.username
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_post(e, this.state)}>
      <h4>POsting</h4>
      <label htmlFor="username">Post</label>
      <input
        type="text"
        name="post"
        value={this.state.post}
        onChange={this.handle_change}
      />
      
      <input type="submit" />
    </form>
    );
        
}
}
export default PostForm;

PostForm.propTypes = {
    handle_post: PropTypes.func.isRequired
  };