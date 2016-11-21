/**
 * Created by Jay on 16/11/21.
 */

import React from "react";
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="tab_contain">
                {this.props.children}
                <div className="tab_bar">
                    <Link to="/index" className="tab_bar_item" activeClassName="active"><i
                        className="icon icon_index"/>首页</Link>
                    <Link to="/shopCar" className="tab_bar_item" activeClassName="active"><i
                        className="icon icon_car"/>购物车</Link>
                    <Link to="/aboutMe" className="tab_bar_item" activeClassName="active"><i
                        className="icon icon_me"/>个人中心</Link>
                </div>
            </div>
        )
    }
}

export default App