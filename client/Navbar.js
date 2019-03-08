import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="navbar" className="row">
      <Link to="/stories">Go to Stories</Link>
      <Link to="/authors">Author</Link>
    </div>
  );
};

export default Navbar;
