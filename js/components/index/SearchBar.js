/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: true
        };
    }

    showSearchBox() {
        this.setState({
            isClosed: false
        })
    }

    hideSearchBox() {
        this.setState({
            isClosed: true
        });
        this.refs.input.value = "";
    }

    render() {
        return (
            <div className={this.state.isClosed ? "search_box closed" : "search_box"}>
                <div className="search_bar">
                    <i className={this.state.isClosed ? "icon icon_wmw" : "icon icon_wmw hidden"}/>
                    <i className={this.state.isClosed ? "icon icon_back hidden" : "icon icon_back"}
                       onClick={this.hideSearchBox.bind(this)}/>
                    <input ref="input" type="text" onFocus={this.showSearchBox.bind(this)}/>
                    <i className="icon icon_search"/>
                </div>
                <div className="search_result"></div>
            </div>
        )
    }
}

export default SearchBar
