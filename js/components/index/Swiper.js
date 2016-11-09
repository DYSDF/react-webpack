/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react"

const img_list = [
    {
        src: "http://img2.sucaifengbao.com/813/813b_109_XVTb.jpg",
        alt: "",
        interval: 2
    },
    {
        src: "http://www.bz55.com/uploads/allimg/150313/139-1503131F955.jpg",
        alt: "",
        interval: 2
    },
    {
        src: "http://img2.sucaifengbao.com/813/813b_123_VWBb.jpg",
        alt: "",
        interval: 2
    },
    {
        src: "http://img.anzow.com/picture/2012815/2012081534555862.jpg",
        alt: "",
        interval: 2
    }
];

class Swiper extends React.Component {

    static defaultProps = {
        imgList: img_list
    };

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            isTouch: false,
            touchX: 0,
            wrapperWidth: 0
        }
    }

    setSwiperTranform(x){
        let transformX = this.state.wrapperWidth * this.state.count + x - this.state.touchX;
        this.refs.swiperWrapper.style.transform = "translateX(" + transformX + "px)"
    }

    componentDidMount(){
        // 存储 Wrapper 的宽度
        this.setState({
            wrapperWidth: this.refs.swiperWrapper.offsetWidth
        });

        // 设置滑动事件监听
        this.refs.swiperWrapper.addEventListener("touchstart", function (event) {
            this.setState({
                isTouch: true,
                touchX: event.changedTouches[0].clientX
            })
        }.bind(this));
        this.refs.swiperWrapper.addEventListener("touchmove", function (event) {
            if(this.state.isTouch){
                this.setSwiperTranform(event.changedTouches[0].clientX);
            }
        }.bind(this));
        this.refs.swiperWrapper.addEventListener("touchend", function (event) {
            console.log(event);
            this.setState({
                isTouch: false
            })
        }.bind(this))

    }

    componentWillUnmount(){
        // 移除滑动事件监听
    }

    render() {
        return (
            <div className="swiper_container">
                <div ref="swiperWrapper" className="swiper_wrapper">
                    <a href="javascript:;" className="swiper_slide prev">
                        <img src="http://img2.sucaifengbao.com/813/813b_109_XVTb.jpg" alt=""/>
                    </a>
                    <a href="javascript:;" className="swiper_slide active">
                        <img src="http://www.bz55.com/uploads/allimg/150313/139-1503131F955.jpg" alt=""/>
                    </a>
                    <a href="javascript:;" className="swiper_slide next">
                        <img src="http://img2.sucaifengbao.com/813/813b_123_VWBb.jpg" alt=""/>
                    </a>
                </div>
                <div className="swiper_pagination">
                    {
                        img_list.map(function (item, index, array) {
                            return (
                                <span key={index} className="swiper_pagination-bullet"/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Swiper