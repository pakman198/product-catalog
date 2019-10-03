import './Carousel.scss';
import React from 'react';

class Carousel extends React.Component {

  state = {
    translateValue: 0,
    currentIndex: 0
  }

  renderSlides() {
    const { images } = this.props;
    
    if(images.length === 0) return;

    return images.map((image, index) => {
      const styles = { backgroundImage: `url(${image.href})`}
      return (
        <div key={index} className="slide" style={styles}></div>
      )
    });
  }

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;

    if(currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  prevSlide = () => {
    const { currentIndex } = this.state;
    if(currentIndex === 0) return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
 }

  render() {
    const { translateValue } = this.state;
    const styles= { transform: `translateX(${translateValue}px)` }

    return (
      <div className="slider">
        <div className="slider-wrapper" style={styles}>
          { this.renderSlides() }
        </div>
        <button 
          className="ui inverted secondary circular angle left icon button left-arrow"
          onClick={this.prevSlide}
        >
          <i className="angle left icon"></i>
        </button>
        <button 
          className="ui inverted secondary circular angle right icon button right-arrow"
          onClick={this.nextSlide}
        >
          <i className="angle right icon"></i>
        </button>
      </div>
    )
  }

}

export default Carousel;
