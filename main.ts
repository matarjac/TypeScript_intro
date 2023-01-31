// EX.1

function getValueType(arg: String | number | boolean): object{
    return {value: arg, type:typeof arg}
}

console.log(getValueType(5));

// EX.2

// interface Irectangle {
//     length: number,
//     width: number
// }

// class Rectangle implements Irectangle{
//     length: number;
//     width: number;

//     constructor(length:number, width:number){
//         this.length = length;
//         this.width = width;
//     }

//     getArea(): number{
//         return this.length*this.width;
//     }

//     getPerimeter(): number{
//         return (this.length*2 + this.width*2);
//     }
// }

// const myRectangle: Rectangle = new Rectangle(5, 10);
// console.log(`Area: ${myRectangle.getArea()}`);
// console.log(`Perimeter: ${myRectangle.getPerimeter()}`);

// EX.3
interface Ipoint{
    x: number,
    y: number
};

function distance(firstPoint: Ipoint, secondPoint: Ipoint){
    let dx: number = firstPoint.x - secondPoint.x;
    let dy: number = firstPoint.y - secondPoint.y;
    return Math.sqrt(dx*dx+dy*dy);
}

const point1: Ipoint = {x: 5, y:10};
const point2: Ipoint = {x: 15, y: 20};
console.log(distance(point1, point2));

// EX.4
enum CardRank {
    Ace = 1,
    Two,
    Three, 
    Four, 
    Five, 
    Six, 
    Seven, 
    Eight, 
    Nine, 
    Ten, 
    Jack, 
    Queen, 
    King
}

interface Card{
    suit: String,
    rank: CardRank
}

function higherRankedCard(card1: Card, card2: Card): Card{
    return ((card1.rank>card2.rank) ? card1 : card2);
}

console.log(higherRankedCard({suit: 'red', rank:CardRank.Ace}, {suit: 'black', rank:CardRank.Nine}));

// EX.5
class Person{
    name: String;
    age: Number;
    email: String;

    constructor(name: String, age: Number, email: String){
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

const myPerson: Person = new Person('Yossi', 30, 'yossi@g.com');
console.log(myPerson);

// EX.6
interface Irectangle{
    width: number,
    height: number
}

interface Icircle{
    radius: number
}

type Shape = Irectangle & Icircle;

function area(arg: Shape): number{
    return arg.height*arg.radius*arg.width;
}

const myShape: Shape = {width: 5, height: 10, radius: 4}
console.log(area(myShape));

// EX.7

function swap<T>(a:T, b:T): T[]{
    console.log(typeof b);
    return [b,a];
}

console.log(swap(3, 5));
console.log(swap('Hello', 'World'));
console.log(swap(true, false));

// EX.8
function minMax<T>(arr: T[]): T[]{
    return [arr.sort()[0], arr.sort()[arr.length-1]];
}

console.log(minMax([1,2,8,4,7,5]));
console.log(minMax(['hello', 'zoo', 'apple']));

// EX.9
interface Iperson{
    name: string,
    age: number,
    address: string
}

interface Ideveloper{
    name: string,
    age: number,
    languages: string[]
}

type developerPerson = Iperson&Ideveloper;

class myDeveloper implements developerPerson{
    name: string;
    age: number;
    address: string;
    languages: string[];

    constructor(name: string, age: number, address: string, languages: string[]){
        this.name = name;
        this.age = age;
        this.address = address;
        this.languages = languages;
    }
}

const myInstDeveloper = new myDeveloper('Bob', 24, 'Melchet', ['Python', 'CSS', 'HTML', 'JS', 'TS']);
console.log(myInstDeveloper);