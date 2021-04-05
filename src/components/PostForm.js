import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

import "./PostForm.css";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    // To use this keyword in render method
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    //  Call Action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-div">
            <label>Title: </label>
            <br />
            <input
              name="title"
              onChange={this.onChange}
              type="text"
              value={this.state.title}
              placeholder="Enter Title Here"
            />
          </div>
          <br />
          <div className="form-div">
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
              placeholder="Enter Body Here"
            ></textarea>
          </div>
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
