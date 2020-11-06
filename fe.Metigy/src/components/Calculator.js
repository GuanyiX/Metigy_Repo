import React, { Fragment } from 'react';


class Calculator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
    }

    handlePlusClick = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }

    handleMinusClick = () => {
        this.setState({
            value: this.state.value - 1,
        })
    }

    componentWillMount() {
        this.setState({
            value: this.props.initialValue
        })
    }


    render() {

        return (
            <Fragment>
                <div className="outter-wrapper">
                    <div className="calculator-wrapper flex-container">
                        <div className="num-part flex-item">{this.state.value}</div>
                        <div className="pm-part flex-item">
                            <a onClick={this.handlePlusClick}><div className="plus-part">+</div></a>
                            <a onClick={this.handleMinusClick}><div className="minus-part">-</div></a>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
};

export default Calculator;