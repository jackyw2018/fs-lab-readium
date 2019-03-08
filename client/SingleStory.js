import React from 'react';
import axios from 'axios';

class SingleStory extends React.Component {
  constructor() {
    super();
    this.state = {
      story: {},
    };
  }

  componentDidMount() {
    const { storyId } = this.props.match.params;
    axios
      .get(`/api/stories/${storyId}`)
      .then(response => this.setState({ story: response.data }))
      .catch(error => console.log(error));
  }

  renderComments() {
    if (!this.state.story.comments) return <div />;
    return this.state.story.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          commentContent={comment.content}
          commentAuthor={comment.author.name}
          authorImgUrl={comment.author.imageUrl}
        />
      );
    });
  }

  render() {
    const { title, content } = this.state.story;

    return (
      <div id="single-story" className="column">
        <h1>{title}</h1>
        <p>{content}</p>
        <h3>Responses:</h3>
        <div id="comments">{this.renderComments()}</div>
      </div>
    );
  }
}

const Comment = props => {
  const { commentContent, commentAuthor, authorImgUrl } = props;

  return (
    <div className="comment row">
      <img src={authorImgUrl} />
      <div className="column">
        <a>
          <h5>{commentAuthor}</h5>
        </a>
        <div>{commentContent}</div>
      </div>
    </div>
  );
};

export default SingleStory;
