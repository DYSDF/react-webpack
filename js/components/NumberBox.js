/**
 * Created by 断崖 on 2016/11/18.
 */

import React from "react"


class NumberBox extends React.Component {
    static defaultProps = {
        countMax: 13,
        countMin: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleAdd() {
        let newValue = ++this.state.count;
        if (newValue > this.props.countMax) newValue = this.props.countMax;
        this.setState({count: newValue});
    }

    handleReduce() {
        let newValue = --this.state.count;
        if (newValue < this.props.countMin) newValue = this.props.countMin;
        this.setState({count: newValue});
    }

    handleOnChange(e) {
        let newValue = this.refs.value.value;
        if (newValue > this.props.countMax) newValue = this.props.countMax;
        if (newValue < this.props.countMin) newValue = this.props.countMin;
        this.setState({count: newValue});
    }

    componentDidMount() {
        this.refs.value.value = this.state.count;
    }

    componentDidUpdate() {
        this.refs.value.value = this.state.count;
    }

    render() {
        return (
            <div className="number_box">
                <input type="numberbox" className="hidden" value={this.state.count}/>
                <div className="reduce" onClick={this.handleReduce.bind(this)}>-</div>
                <input ref="value" className="value" type="number" onChange={this.handleOnChange.bind(this)}/>
                <div className="plus" onClick={this.handleAdd.bind(this)}>+</div>
            </div>
        )
    }
}

export default NumberBox