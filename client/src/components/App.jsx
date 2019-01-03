import '@babel/polyfill';
import React from 'react';

import styled from 'styled-components';
import axios from 'axios';
import parseUrl from 'parse-url';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import ReviewBox from './ReviewBox.jsx';


const MenuItem = ({review, key}) => {
  return (
    <div 
      className="menu-item" 
    >
      <ReviewBox key={key} review={review}/>
    </div>
  );
};
 
export const Menu = (list) => list.map((el) => {
  const { _id } = el;
 
  return (
    <MenuItem 
      review={el}
      key={_id}
    />
  );
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
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
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	id: null,
    	reviews: null,
      selected: 0
    };

    this.onSelect = this.onSelect.bind(this);

  }

  onSelect() {
    this.setState({ selected: key });
  }

  componentDidMount() {
    const parsedUrl = parseUrl(window.location.href);
    const pathname = parsedUrl.pathname;
    const wid = pathname.substring(pathname.length - 3); 
    if (wid < 100 || wid > 199) { return; }

    axios.get(`/api/watches/${wid}/reviews`)
      .then((reviews) => {

        if (reviews.data.length < 8) {
          return null;
        }
        let newState = { reviews: reviews.data};
        this.setState((state) => {
          return newState;
        });
      })
      .catch((error) => {
        console.log('Error', error);
      })
  	
  }


  render() {
    if (this.state.reviews === null) {
      return null;
    }

    const { selected } = this.state;

    const menu = Menu(this.state.reviews, selected);

    

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
  }
}

export default App;
