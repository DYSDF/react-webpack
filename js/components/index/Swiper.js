/**
 * Created by 断崖 on 2016/11/9.
 */

import React from "react"

const img_list = [
    {
        src: "http://img2.sucaifengbao.com/813/813b_109_XVTb.jpg",
        alt: "",
        interval: 1
    },
    {
        src: "http://www.bz55.com/uploads/allimg/150313/139-1503131F955.jpg",
        alt: "",
        interval: 3
    },
    {
        src: "http://img2.sucaifengbao.com/813/813b_123_VWBb.jpg",
        alt: "",
        interval: 2
    },
    {
        src: "http://img.anzow.com/picture/2012815/2012081534555862.jpg",
        alt: "",
        interval: 4
    }
];

class Swiper extends React.Component {

    static defaultProps = {
        imgList: img_list
    };

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isTouch: false,
            touchX: 0,
            timeStamp: Date.now(),
            wrapperWidth: 0
        }
    }

    setSwiperTranform(x = 0, time = 0) {
        this.refs.swiperWrapper.style.transition = "transform " + time + "ms linear";
        this.refs.swiperWrapper.style.transform = "translateX(" + x + "px)"
    }

    switch2Prev() {
        this.setState({
            index: this.state.index - 1
        });
        this.setSwiperTranform(-this.state.index * this.state.wrapperWidth, 300);
    }

    switch2Next() {
        this.setState({
            index: this.state.index + 1
        });
        this.setSwiperTranform(-this.state.index * this.state.wrapperWidth, 300);
    }

    autoPlay() {
        var interval;
        if (this.state.index < 0) {
            interval = this.props.imgList.slice(-1)[0].interval;
        } else if (this.state.index >= this.props.imgList.length) {
            interval = this.props.imgList[0].interval;
        } else {
            interval = this.props.imgList[this.state.index].interval;
        }

        window.setTimeout(function () {
            if (!this.state.isTouch) {
                this.switch2Next();
            }
            this.autoPlay();
        }.bind(this), interval * 1000)
    }

    checkIndex(time = 0) {
        if (this.state.index < 0) {
            this.setState({
                index: this.props.imgList.length - 1
            })
        } else if (this.state.index >= this.props.imgList.length) {
            this.setState({
                index: 0
            })
        }
        this.setSwiperTranform(-this.state.index * this.state.wrapperWidth, time);
    }

    componentDidMount() {
        // 存储 Wrapper 的宽度
        this.setState({
            wrapperWidth: this.refs.swiperWrapper.offsetWidth
        });

        // 设置滑动事件监听
        this.refs.swiperWrapper.addEventListener("touchstart", function (event) {
            this.setState({
                isTouch: true,
                touchX: event.changedTouches[0].clientX,
                timeStamp: Date.now()
            });
        }.bind(this));
        this.refs.swiperWrapper.addEventListener("touchmove", function (event) {
            if (this.state.isTouch) {
                this.setSwiperTranform(event.changedTouches[0].clientX - this.state.touchX - this.state.index * this.state.wrapperWidth, 0);
            }
        }.bind(this));
        this.refs.swiperWrapper.addEventListener("touchend", function (event) {
            this.setState({
                isTouch: false
            });

            this.checkIndex(300);

            let distance = event.changedTouches[0].clientX - this.state.touchX;
            if (Math.abs(distance) > this.state.wrapperWidth / 2) {
                if (distance > 0) {
                    this.switch2Prev();
                } else {
                    this.switch2Next();
                }
            } else {
                let interval = Date.now() - this.state.timeStamp;
                if (interval < 600) {
                    let velocity = distance / interval * 1000;
                    if (Math.abs(velocity) > 100) {
                        if (distance > 0) {
                            this.switch2Prev();
                        } else {
                            this.switch2Next();
                        }
                    }
                }
            }
        }.bind(this));

        // 监听动画事件
        this.refs.swiperWrapper.addEventListener("webkitTransitionEnd", function () {
            this.checkIndex();
        }.bind(this));

        this.autoPlay();
    }

    componentWillUnmount() {
        // 移除滑动事件监听
    }

    render() {
        return (
            <div className="swiper_container">
                <div ref="swiperWrapper" className="swiper_wrapper">
                    <a href="javascript:;" className="swiper_slide prev">
                        <img src={this.props.imgList.slice(-1)[0].src} alt={this.props.imgList.slice(-1)[0].alt}/>
                    </a>
                    {
                        this.props.imgList.map(function (item, index) {
                            return (
                                <a href="javascript:;" className="swiper_slide" key={index}>
                                    <img src={item.src} alt={item.alt}/>
                                </a>
                            )
                        })
                    }
                    <a href="javascript:;" className="swiper_slide next">
                        <img src={this.props.imgList[0].src} alt={this.props.imgList[0].alt}/>
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