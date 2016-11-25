/**
 * Created by 断崖 on 2016/9/9.
 */

let mask;
let style;

const createMask = ({onClose}) => {
    createStyle();

    let el = document.createElement('div');
    el.className = "mask_div";
    mask = document.body.appendChild(el);

    addClickEvent(hideMask);
    addOneClickEvent(onClose);
};

const createStyle = () => {
    if (!style) {
        let css = ".mask_div { position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: black;opacity: 0.8;z-index: 9999 }";
        let el = document.createElement('style');
        el.innerHTML = css;
        style = document.head.appendChild(el);
    }
    return style;
};

const showMask = (args) => {
    if (!mask) {
        createMask(args);
    }
    mask.style.display = "";
};

const hideMask = () => {
    mask.style.display = "none";
};

const addClickEvent = (fn = null) => {
    mask.addEventListener("click", fn);
};

const addOneClickEvent = (fn = null) => {

};


export default {
    showMask,
    hideMask
}
