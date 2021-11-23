interface Products {
    milk: number;
    icecream: number;
    bread: number;
    productManager: (milk: number, icecream: number, bread: number) => any;
    orderMaintain: () => any;
}

class ReatailShop implements Products {
    milk: number;
    icecream: number;
    bread: number;

    constructor(milk, icecream, bread) {
        this.milk = milk;
        this.icecream = icecream;
        this.bread = bread;
    }
    productManager(milk: number, icecream: number, bread: number) {
        console.log(this.bread);
        this.milk = this.milk - milk
        this.icecream = this.icecream - icecream
        this.bread = this.bread - bread
        console.log(this.bread);
    }

    orderMaintain() {
        if (this.icecream < 5) {
            console.log('request raised for icecream stock');
        } else if (this.milk < 5) {
            console.log('request raised for milk stock');
        } else if (this.bread < 5) {
            console.log('reqest raised for bread stock');

        }
    }
}


let stock = new ReatailShop(500, 4, 200);
console.log(stock);

stock.productManager(3, 0, 2)
stock.orderMaintain()