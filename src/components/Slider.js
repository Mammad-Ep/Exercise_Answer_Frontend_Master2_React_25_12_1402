import React, { Component } from 'react';
import '../../src/css/main_style2.scss';
import { Img1 } from './styled-components/SliderStyledComp';
import img1 from '../images/sliders/slid1.jpg';
import img2 from '../images/sliders/slid2.jpg';
import img3 from '../images/sliders/slider1.jpg';
import img4 from '../images/sliders/slider2.jpg';
import arrowRight from '../images/sliders/chevron-right-solid.svg';
import arrowLeft from '../images/sliders/chevron-left-solid.svg';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };

    };

    changeAddStatusHandler = () => {
        if (this.state.number < 4)
            this.setState((prevNumber) => ({
                // number:1,
                number: prevNumber.number + 1
            }))
        else {
            this.setState({ number: 1 })
        }
    };

    changeSubStatusHandler = () => {
        if (this.state.number > 1)
            this.setState((prevNumber) => ({
                number: prevNumber.number - 1
            }))
        else {
            this.setState({ number: 4 })
        }
    };

    render() {
        const { number } = this.state;

        return (
            <>
                <div className='slider'>
                    <img src={arrowRight} alt="arrow-right" onClick={this.changeAddStatusHandler} />
                    <img src={arrowLeft} alt="arrow-left" onClick={this.changeSubStatusHandler} />
                    <Img1 src={img1} alt="slid1" x={1} status={number} />
                    <Img1 src={img2} alt="slid2" x={2} status={number} />
                    <Img1 src={img3} alt="slid3" x={3} status={number} />
                    <Img1 src={img4} alt="slid4" x={4} status={number} />

                </div>
                
            </>
        );
    }
}

export default Slider;