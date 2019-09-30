import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//components
import NumberStep from "../NumberStep";

const Thumb = styled.div`
  width: ${props => props.percentage}%;
`;

class ProgressBar extends Component {
    createSteps = () => {
        const { step } = this.props;
        let steps = [];
        for (let i = 0; i < step; i++) {
            steps.push(<NumberStep key={i} step={i + 1} />);
        }
        return steps;
    };

    render() {
        const { step } = this.props;
        const percentage = (100 / 3) * step;
        return (
            <div className="ProgressBar">
                <div className="Trank">
                    {this.createSteps()}
                    <Thumb className="Thumb" percentage={percentage} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        step: state.step
    };
};

export default connect(
    mapStateToProps,
    null
)(ProgressBar);
