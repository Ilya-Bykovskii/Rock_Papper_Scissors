class FlyingStone {
    constructor(elem, num) {
        this.elem = elem;
        this.num = num;
        this.top = 0;
        this.bottom = 13;
    }

    setValues() {
        const promise = new Promise(resolve => this.promise = resolve);

        this.timeAnim = this.__randomValue(5000, 7000);
        this.animPoints = this.__randomValue(2, 8);
        this.time = Math.floor(this.timeAnim / this.animPoints );
        this.rottateCount = this.__randomValue(2, 6);
        this.animValues = [];
        for (let i = 0; i < this.animPoints; i++) {
            const hight = this.__randomValue(this.top, this.bottom);
            this.animValues.push(hight);
        }

        this.__startAnim();

        this.clone = this.elem.cloneNode(false)
        document.querySelector('.for-anim').prepend(this.clone)
        return promise;
    }

    async __startAnim() {
        console.log(this.animPoints);
        const prom = new Promise((resolve) => setTimeout(resolve, this.timeAnim + this.time));
        let counter = 1;
        this.elem.style.transition = `all linear ${this.time}ms `; 
        this.elem.hidden = false;
        let anim = setInterval(() => {
            console.log(360 * this.rottateCount / this.animPoints);
            this.elem.style.transform += `rotate(${Math.floor(360 * this.rottateCount / this.animPoints)}deg)`;
            this.elem.style.top = `${this.animValues.pop()}vh`;
            this.elem.style.left = `${counter * Math.floor(120 / this.animPoints)}vw`
            counter++
        }, this.time);

        let result = await prom;
        clearInterval(anim);
        this.elem.style.transition = null;
        console.log(this.elem.style.transition)
        this.elem.remove;
        this.elem = this.clone
        this.promise();
    }

    __randomValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

const anim = new FlyingStone(document.querySelector('.for-anim img'), 0); 

let animFly = function() {
    anim.setValues().then((resolve) => animFly())
}
animFly()
