class Fill {
    constructor(obj) {
        this.btns = document.querySelector(obj.btns);


        this.btns.forEact(btn => {
            btn.addEventListener("mousemove", e => this.filler(e, btn))
        })
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
    btns: ".btn-fill"
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

class FadeUp {
    constructor(obj) {
        this.elements = document.querySelectorAll(obj.elements);

        this.elements.forEach(element => {
            window.addEventListener("scroll", () => this.fade(element))
        })
    }

    fade(element) {
        const cond = (window.scrollY + window.innerHeight * .6) < element.offsetTop;

        if (cond) {
            element.style.transform = 'translateY(60px)';
            element.style.opacity = 0;
        } else {
            element.style.transform = 'translate(0)';
            element.style.opacity = 1;
        }

    }
}

const fadeUp = new FadeUp({
    elements: ".fade-up"
})

class FadeRight {
    constructor(obj) {
        this.elements = document.querySelectorAll(obj.elements);

        this.elements.forEach(element => {
            window.addEventListener('scroll', () => this.fade(element))
        })
    }

    fade(element) {
        const cond = (window.scrollY - window.innerHeight * .4) < element.offsetTop;
        if (cond) {
            element.style.opacity = 0;
            element.style.transform = 'translateX(-100%)';
        } else {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }
    }
}

const fadeRight = new FadeRight({
    elements: ".fade-right"
})

class FadeLeft {
    constructor(obj) {
        this.elements = document.querySelectorAll(obj.elements);

        this.elements.forEach(element => {
            window.addEventListener('scroll', () => this.fade(element))
        })
    }

    fade(element) {
        const cond = (window.scrollY - window.innerHeight * .4) < element.offsetTop;
        if (cond) {
            element.style.opacity = 0;
            element.style.transform = 'translateX(100%)';
        } else {
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }
    }
}

const fadeLeft = new FadeLeft({
    elements: ".fade-left"
})

class HoverTilt {
    constructor(obj) {
        this.cards = document.querySelectorAll(obj.cards);


        this.cards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';

            card.addEventListener('mousemove', e => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card))
        })
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const centerX = rect.left + cardWidth / 2;
        const centerY = rect.top + cardHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (10 * mouseY) / (cardHeight / 2);
        const rotateY = (-10 * mouseX) / (cardWidth / 2);


        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `${rotateY * 2}px ${-rotateX * 2}px 20px rgba(0,0,0,0.2)`;

    }
    handleMouseLeave(card) {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.boxShadow = '0px 22px 18px 0px #0000000D';
    }
}

const hoverTilt = new HoverTilt({
    cards: ".parallax-card"
})