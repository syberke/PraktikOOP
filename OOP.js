
// 1. Buatlah class bernama Animal
class Animal {
constructor (name, age, isMammal) {
this.name = name;
this.age;
this.isMammal = isMammal;
}
}
// 2. Buatlah class bernama 
class Lion extends Animal {
constructor (name, age) {
super (name, age, true);
}
speak() {
return `${this.name} RAWWWRRRRR!`;
}
}
// 3. Buatlah class bernama 
class Cat extends Animal {
constructor (name, age) {
super (name, age, false);
}
Speak() {
return `${this.name} MEEEOONGG!`;
}
}
// 4. Buatlah instance dari class 
const myLion = new Lion("Simba", 2);
// 5. Buatlah instance dari class
const myCat = new Cat("Jamur", 4);
// Contoh penggunaan
console.log(myLion.speak());
console.log(myCat.Speak());
console.log(myLion);
console.log(myCat);