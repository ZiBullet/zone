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

const bannerFill = new Fill({
    btn: ".banner__join"
})

class Skew {
    constructor(obj) {
        this.img = document.querySelector(obj.img);
        this.section = document.querySelector(obj.section);

        this.section.addEventListener("mousemove", (e) => this.follow(e, this.img));
    }

    follow(e, img) {
        img.style.transform = `skew(${(e.pageY / 2) * -0.02}deg, ${(e.pageX / 2) * 0.02}deg )`
    }
}

const bannerSkew = new Skew({
    img: ".banner__img",
    section: ".banner"
})