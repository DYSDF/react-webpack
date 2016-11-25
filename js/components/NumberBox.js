/**
 * Created by 断崖 on 2016/11/18.
 */

import React from "react"

class NumberBox extends React.Component {
    static defaultProps = {
        initCount: 1,
        countMax: 13,
        countMin: 1
    };

    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount
        }
    }

    handleAdd() {
        let newValue = this.state.count + 1;
        if (newValue > this.props.countMax) newValue = this.props.countMax;
        if (newValue < this.props.countMin) newValue = this.props.countMin;

        this.setState({
            count: newValue
        });

        const {
            onChange = () => {
            }
        } = this.props;
        onChange(newValue);
    }

    handleReduce() {
        let newValue = this.state.count - 1;
        if (newValue > this.props.countMax) newValue = this.props.countMax;
        if (newValue < this.props.countMin) newValue = this.props.countMin;

        this.setState({
            count: newValue
        });

        const {
            onChange = () => {
            }
        } = this.props;
        onChange(newValue);
    }

    handleOnSubmit(e) {
        let newValue = e.nativeEvent.target.value;
        if (newValue > this.props.countMax) newValue = this.props.countMax;
        if (newValue < this.props.countMin) newValue = this.props.countMin;

        this.setState({
            count: newValue
        });

        const {
            onChange = () => {
            }
        } = this.props;
        onChange(newValue);
    }

    componentDidUpdate() {
        this.refs.value.value = this.state.count;
    }

    render() {
        return (
            <div className="number_box">
                <div className="reduce" onClick={this.handleReduce.bind(this)}>-</div>
                <input ref="value" type="number" className="value" defaultValue={this.state.count}
                       onBlur={this.handleOnSubmit.bind(this)} onSubmit={this.handleOnSubmit.bind(this)}/>
                <div className="plus" onClick={this.handleAdd.bind(this)}>+</div>
            </div>
        )
    }
}

export default NumberBox