/**
 * Created by Jay on 16/11/11.
 */


import MaksPop from "./MaskPop"


let shopCar;


const createShopCar = () => {
    if(!shopCar){
        let el = document.createElement('div');
        el.className = "shop_car_div";
        shopCar = document.body.appendChild(el);
    }
}

