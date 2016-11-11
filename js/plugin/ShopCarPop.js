/**
 * Created by 断崖 on 2016/9/9.
 */

let mask;

const createMask = () => {
    if (!mask) {
        mask = document.body.appendChild(document.createElement('div'))
    }
    return mask;
};

const removeMask = () => {
    if(mask){
        document.body.removeChild(mask);
    }
};

export default {
    createMask,
    removeMask
}
