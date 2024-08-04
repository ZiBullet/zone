class Fill {
    constructor({ btns }) {
        this.btns = document.querySelectorAll(btns);

        this.btns.forEach(btn => {
            btn.addEventListener("mousemove", e => this.filler(e, btn));
        });
    }

    filler(e, btn) {
        const span = btn.querySelector('span');
        const attr = span.getAttribute('data-fillcolor');
        const { left, top } = btn.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        span.style.background = attr;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
    }
}

new Fill({ btns: ".btn-fill" });

class Bubbling {
    constructor({ items }) {
        this.items = document.querySelectorAll(items);

        window.addEventListener("scroll", () => {
            this.items.forEach(item => this.scrollDown(item));
        });
    }

    scrollDown(item) {
        const parent = item.closest('.parent');
        const parentOffset = parent.offsetTop;

        if (window.scrollY > parentOffset + parent.clientWidth) return;

        const offset = parentOffset - window.scrollY;
        const transformValue = offset * (window.innerWidth > 1175 ? 0.35 : 0.15);
        item.style.transform = `translateY(${transformValue}px)`;
    }
}

new Bubbling({ items: ".item-bubbling" });

class Fade {
    constructor({ elements }) {
        this.elements = document.querySelectorAll(elements);

        window.addEventListener("scroll", () => {
            this.elements.forEach(element => this.fade(element));
        });
    }
}

class FadeUp extends Fade {
    constructor(obj) {
        super(obj);
    }

    fade(element) {
        const parent = element.closest('.parent') ?? element;
        const cond = (window.scrollY + window.innerHeight * 0.6) < parent.offsetTop;

        element.style.transform = cond ? 'translateY(60px)' : 'translateY(0)';
        element.style.opacity = cond ? 0 : 1;
    }
}

new FadeUp({ elements: ".fade-up" });

class FadeRight extends Fade {
    constructor(obj) {
        super(obj);
    }

    fade(element) {
        const cond = (window.scrollY - window.innerHeight * 0.4) < element.offsetTop;

        element.style.transform = cond ? 'translateX(-100%)' : 'translateX(0)';
        element.style.opacity = cond ? 0 : 1;
    }
}

new FadeRight({ elements: ".fade-right" });

class FadeLeft extends Fade {
    constructor(obj) {
        super(obj);
    }

    fade(element) {
        const cond = (window.scrollY - window.innerHeight * 0.4) < element.offsetTop;

        element.style.transform = cond ? 'translateX(100%)' : 'translateX(0)';
        element.style.opacity = cond ? 0 : 1;
    }
}

new FadeLeft({ elements: ".fade-left" });

class HoverTilt {
    constructor({ cards }) {
        this.cards = document.querySelectorAll(cards);

        this.cards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';

            card.addEventListener('mousemove', e => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const { width, height, left, top } = card.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (10 * mouseY) / (height / 2);
        const rotateY = (-10 * mouseX) / (width / 2);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `${rotateY * 2}px ${-rotateX * 2}px 20px rgba(0,0,0,0.2)`;
    }

    handleMouseLeave(card) {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.boxShadow = '0px 22px 18px 0px #0000000D';
    }
}

new HoverTilt({ cards: ".parallax-card" });
