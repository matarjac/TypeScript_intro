// EX.1
function getValueType(arg) {
    return { value: arg, type: typeof arg };
}
console.log(getValueType(5));
;
function distance(firstPoint, secondPoint) {
    var dx = firstPoint.x - secondPoint.x;
    var dy = firstPoint.y - secondPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var point1 = { x: 5, y: 10 };
var point2 = { x: 15, y: 20 };
console.log(distance(point1, point2));
// EX.4
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 1] = "Ace";
    CardRank[CardRank["Two"] = 2] = "Two";
    CardRank[CardRank["Three"] = 3] = "Three";
    CardRank[CardRank["Four"] = 4] = "Four";
    CardRank[CardRank["Five"] = 5] = "Five";
    CardRank[CardRank["Six"] = 6] = "Six";
    CardRank[CardRank["Seven"] = 7] = "Seven";
    CardRank[CardRank["Eight"] = 8] = "Eight";
    CardRank[CardRank["Nine"] = 9] = "Nine";
    CardRank[CardRank["Ten"] = 10] = "Ten";
    CardRank[CardRank["Jack"] = 11] = "Jack";
    CardRank[CardRank["Queen"] = 12] = "Queen";
    CardRank[CardRank["King"] = 13] = "King";
})(CardRank || (CardRank = {}));
function higherRankedCard(card1, card2) {
    return ((card1.rank > card2.rank) ? card1 : card2);
}
console.log(higherRankedCard({ suit: 'red', rank: CardRank.Ace }, { suit: 'black', rank: CardRank.Nine }));
// EX.5
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Person;
}());
var myPerson = new Person('Yossi', 30, 'yossi@g.com');
console.log(myPerson);
function area(arg) {
    return arg.height * arg.radius * arg.width;
}
var myShape = { width: 5, height: 10, radius: 4 };
console.log(area(myShape));
// EX.7
function swap(a, b) {
    console.log(typeof b);
    return [b, a];
}
console.log(swap(3, 5));
console.log(swap('Hello', 'World'));
console.log(swap(true, false));
// EX.8
function minMax(arr) {
    return [arr.sort()[0], arr.sort()[arr.length - 1]];
}
console.log(minMax([1, 2, 8, 4, 7, 5]));
console.log(minMax(['hello', 'zoo', 'apple']));
var myDeveloper = /** @class */ (function () {
    function myDeveloper(name, age, address, languages) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.languages = languages;
    }
    return myDeveloper;
}());
var myInstDeveloper = new myDeveloper('Bob', 24, 'Melchet', ['Python', 'CSS', 'HTML', 'JS', 'TS']);
console.log(myInstDeveloper);
