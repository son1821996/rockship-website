import React, { Component } from 'react';
import { string } from 'prop-types';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import '../../stylesheets/ScrollButton/ScrollButton.scss';

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
    };
  }

  scrollStep = () => {
    const { intervalId } = this.state;
    const { scrollStepInPx } = this.props;
    if (window.scrollY === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.scrollY - scrollStepInPx);
  }

  scroll = () => {
    const { delayInMs } = this.props;
    const intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId });
  }

  render() {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        href="#"
        title="Back to top"
        id="scroll"
        className="scroll"
        onClick={(event) => {
          event.preventDefault();
          this.scroll();
        }}
      >
        <ChevronLeft
          style={{
            transform: 'rotate(90deg)',
            fontWeight: 'bold',
            fontSize: '32px',
          }}
        />
      </button>
    );
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: string.isRequired,
  delayInMs: string.isRequired,
};

export default ScrollButton;
