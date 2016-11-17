/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react";

import SearchBar from "../components/index/SearchBar"
import Swiper from "../components/index/Swiper"
import ProductBox from  "../components/index/ProductBox"

class Index extends React.Component {
    render() {
        return (
            <div className="tab_body">
                <SearchBar/>
                <Swiper/>
                <ProductBox/>
            </div>
        )
    }
}

export default Index;
