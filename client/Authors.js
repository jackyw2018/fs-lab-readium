import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Authors extends React.Component {
  constructor() {
    super();
    this.state = { authors: [] };
  }

  componentDidMount() {
    axios
      .get('/api/authors')
      .then(response => this.setState({ author: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.authors.map(author => (
          <Link to={`/authors/${author.id}`} key={author.id}>
            <div className="author row">
              <img src={author.imageUrl} />
              <p>{author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Authors;
