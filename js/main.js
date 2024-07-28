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
});

const bannerFill = new Fill({
    btn: ".banner__join"
});

class Bubbling {
    constructor(obj) {
        this.item = document.querySelector(obj.item);

        window.addEventListener("scroll", () => this.scrollDown(this.item))
    }

    scrollDown(item) {
        window.innerWidth > 1175 
        ? item.style.transform = `translateY(-${window.scrollY * .35}px)`
        : item.style.transform = `translateY(-${window.scrollY * .15}px)`
    }

}

const bubbling = new Bubbling({
    item: ".banner__img"
})