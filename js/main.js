class Fill {
    constructor(obj) {
        this.btn = document.querySelector(obj.btn);

        this.btn.addEventListener("mousemove", e => this.filler(e, this.btn))
    }

    filler(e, btn) {
        const x = e.pageX - btn.offsetLeft,
            y = e.pageY - btn.offsetTop,
            span = btn.querySelector("span");

        span.style.left = x + "px";
        span.style.top = y + "px";
    }
}

const fill = new Fill({
    btn: ".header__btn"
})