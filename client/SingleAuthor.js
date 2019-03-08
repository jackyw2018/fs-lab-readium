import React from 'react';
import axios from 'axios';
import CommentsTab from './CommentsTab';
import StoriesTab from './StoriesTab';
import { Route, Link } from 'react-router-dom';

class SingleAuthor extends React.Component {
  constructor() {
    super();
    this.state = {
      author: {},
      stories: [],
      comments: [],
    };
  }

  componentDidMount() {
    const { authorId } = this.props.match.params;
    axios
      .get(`/api/authors/${authorId}`)
      .then(response => this.setState({ author: response.data }))
      .then(() => axios.get(`/api/authors/${authorId}/stories`))
      .then(response => this.setState({ stories: response.data }))
      .then(() => axios.get(`/api/authors/${authorId}/comments`))
      .then(response => this.setState({ comments: response.data }))
      .then(() => console.log(this.state))
      .catch(error => console.log(error));
  }

  render() {
    const { author, stories, comments } = this.state;
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <div id="single-author-nav">
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route
            exact
            path="/authors/:authorId/comments"
            render={() => <CommentsTab author={author} comments={comments} />}
          />
          <Route
            exact
            path="/authors/:authorId/stories"
            render={() => <StoriesTab stories={stories} />}
          />
        </div>
      </div>
    );
  }
}

export default SingleAuthor;
