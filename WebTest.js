
const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };

  function Hero(first, second, third, last){
    this.first = first;
    this.second = second;
    this.third = third;
    this.last = last;
    
  }

  theHero = new Hero('night Superman, ', 'Batman and The ', 'Flash', ' go to the city, and fight crime.');

  Hero.prototype.toString = function heroToString() {
    return "At " + this.first + this.second  + this.third + this.last;
    
  }

  console.log("At Hero startup: {" + (Object.getPrototypeOf(theHero)) + "} .getPrototypeOf");
  console.log("At Hero startup: {" + (Object.getOwnPropertyNames(theHero)) + "} .getOwnPropertyNames");
  
  function sendHero(){
    console.log(killHero(theHero, 'sunset ', 'The Flash ', 'went alone ', ' to avenge his friends.') + " FIRST HERO");
    heroStory();
  }

  function heroStory(){
    document.getElementById("hero").innerHTML =
    theHero;
    }
  
  function killHero(obj, one, two, three, four) {
    theHero = new Hero(one, two, three, four);
  }
  
  
  
  
  
  /* second test function
  console.log("At Employee startup: {" + (Object.getOwnPropertyNames(Employee)) + "}");


  function ObjectPropDeletetest1() {
    console.log((removeProperty(Employee, 'firstname')) + " FIRST");
    console.log("At ObjectPropDeletetest1(): {" + (Object.getOwnPropertyNames(Employee)) + "}");
    afterRP(Employee, 'lastname');
  }

  function removeProperty(obj, prop) {
    console.log("At begining removeProperty(obj, prop): {" + (Object.getOwnPropertyNames(Employee)) + "}");
    if(prop in obj){
      console.log("At ending 1 removeProperty(obj, prop): {" + (Object.getOwnPropertyNames(Employee)) + "}");
      return delete obj[prop];
    } else {
      console.log("At ending 2 removeProperty(obj, prop): {" + (Object.getOwnPropertyNames(Employee)) + "}");
      return false;
    }
  }

  function afterRP(obj, prop) {
    console.log("after removeProperty()")
    console.log((removeProperty(obj, prop)) + " SECOND");
    console.log("At afterRP(obj, prop): {" + (Object.getOwnPropertyNames(Employee)) + "}");
  }*/

