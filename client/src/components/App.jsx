import '@babel/polyfill';
import React from 'react';

import styled from 'styled-components';
import axios from 'axios';
import parseUrl from 'parse-url';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import ReviewBox from './ReviewBox.jsx';


const MenuItem = ( {review, key, toggle, hidden} ) => {
  return (
    <div className="menu-item">
      <ReviewBox toggleClick={toggle} isToggled={hidden} key={key} review={review}/>
    </div>
  );
};

export const Menu = (list, position, handler, hidden) => list.map((el) => {
  const { _id } = el;

  return (
    <MenuItem 
      review={el}
      key={_id}
      toggle={handler}
      hidden={hidden}
    />
  );
});

const Arrow = ({ text, className }) => {
  return (
    <div className={className}>
      {text}
    </div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const StyledComponentHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-variant: small-caps;
  font-size: 18px;
  letter-spacing: 2.5px;
  font-family: 'futura-pt', arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;

`;

const StyledNumberBanner = styled.span`
  font-variant: small-caps;
  font-size: 18px;
  letter-spacing: 2.5px;
  font-family: 'futura-pt', arial, sans-serif;
  font-weight: 400;
  font-family: 'Questrial', sans-serif; 
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	id: null,
    	reviews: null,
      selected: 0,
      isToggled: false
    };

    this.onSelect = this.onSelect.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);

  }
  onSelect(key) {
    this.setState({ selected: key });
  }

  componentDidMount() {
    const parsedUrl = parseUrl(window.location.href);
    const pathname = parsedUrl.pathname;
    const wid = Number(pathname.split('/')[2]);
    // if (wid < 100 || wid > 199) { return; }

    axios.get(`/api/watches/${wid}/reviews`)
      .then((reviews) => {
        let newState = { reviews: reviews.data };
        this.setState((state) => {
          return newState;
        });
      })
      .catch((error) => {
      });  	
    }
    toggleHidden() {
      this.setState({
        isToggled: !this.state.isToggled,
      });
    }


  render() {
    if (this.state.reviews === null) {
      return (<div>There are no reviews!</div>);
    }

    const { selected } = this.state;

    const menu = Menu(this.state.reviews, selected, this.toggleHidden, this.state.isToggled);

    return (
      <div>
    	  <StyledComponentHeader>
          <StyledNumberBanner>{this.state.reviews.length + " customer reviews"} </StyledNumberBanner>
        </StyledComponentHeader>
    	  <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          hideArrows={true}
        />
      </div>
    )
  };
}

export default App;
