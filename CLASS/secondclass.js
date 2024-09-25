class Pen {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$50");
pen1.showPrice();
