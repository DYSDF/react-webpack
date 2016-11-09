/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react"

import SearchBar from "./index/SearchBar"
import Rotation from "./index/Rotation"

class Index extends React.Component {
    render() {
        return (
            <div className="tab_body">
                <SearchBar/>
                <Rotation/>
            </div>
        )
    }
}

export default Index;
