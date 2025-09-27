class Vehicle {
    constructor(name, brand, price){
        this.name= name;
        this.brand= brand;
        this.price= price;    
    }
    getName(){
        return this.name;
    }
    getBrand(){
        return this.brand;
    }   
    getPrice(){
        return this.price;
    }
}

const vehicle1= new Vehicle('Car', 'Toyota', 20000);
const vehicle2= new Vehicle('Bike', 'Yamaha', 1500);

console.log(vehicle1.getPrice())
console.log(vehicle2.getPrice())