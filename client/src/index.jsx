import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parseUrl from 'parse-url';

class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	id: null,
    	reviews: null
    };
  }

  componentDidMount() {
    const parsedUrl = parseUrl(window.location.href);
    const pathname = parsedUrl.pathname;
    const wid = pathname.substring(pathname.length - 3); 
    if (wid < 100 || wid > 199) { return; }

    const successFn = reviews => {
      this.setState({
        id: wid,
        reviews: reviews
      });
    };

    axios.get('/api/watches/:wid/reviews')
      .then(function (response) {
        successFn(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return <h1> Hello World </h1>
  }
}

ReactDOM.render(<ReviewsContainer />, document.getElementById('app'));
