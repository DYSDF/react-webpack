/**
 * Created by 断崖 on 2016/9/9.
 */

let mask;
let style;

const createMask = () => {
    createStyle();

    let el = document.createElement('div');
    el.className = "mask_div";
    mask = document.body.appendChild(el);

    addClickEvent(hideMask.bind(this));
};

const removeMask = () => {
    if (mask) {
        document.body.removeChild(mask);
    }
};


const createStyle = () => {
    if (!style) {
        let css = ".mask_div { position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: black;opacity: 0.8;z-index: 9999 }";
        let el = document.createElement('style');
        el.innerHTML = css;
        style = document.head.appendChild(el)
    }
    return style;
};

const showMask = () => {
    if (!mask) {
        createMask();
    }
    mask.style.display = "";
};

const hideMask = () => {
    mask.style.display = "none";
};

const addClickEvent = (fn = null) => {
    mask.addEventListener("click", fn);
};


export default {
    showMask,
    hideMask
}