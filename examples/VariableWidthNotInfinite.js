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
    return (
      <div>
        <h2>Variable width Not infinite</h2>
        <Slider {...settings}>
          <div style={{ width: 400 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 400 }}>
            <p>1000</p>
          </div>
        </Slider>
      </div>
    );
  }
}
