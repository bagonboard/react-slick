import React, { Component } from "react";
import Slider from "../src/slider";

export default class VariableWidthNotInfinite extends Component {
  render() {
    const settings = {
      className: "slider variable-width no-infinite",
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 4,
      arrows: true,
      variableWidth: true,
      rows: 1,
      outerEdgeLimit: true
    };

    let sliderContent = [];
    const slideNumber = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const Slide = () => {
      let randomWidth = Math.floor(Math.random() * (300 - 100 + 1) + 100);
      return (
        <div key={randomWidth} style={{ width: randomWidth }}>
          <p>{randomWidth}</p>
        </div>
      );
    };
    for (let i = 0; i < slideNumber; i++) {
      sliderContent.push(Slide());
    }
    return (
      <div>
        <h2>Variable width Not infinite</h2>
        <Slider {...settings}>{sliderContent}</Slider>
      </div>
    );
  }
}
