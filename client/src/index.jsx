import React from 'react';
import ReactDOM from 'react-dom';

class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1> Hello World </h1>
  }
}
ReactDOM.render(<ReviewsContainer />, document.getElementById('app'));
