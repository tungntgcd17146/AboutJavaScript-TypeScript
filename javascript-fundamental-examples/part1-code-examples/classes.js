    //Classes
class animal {
    cat
} // that has cat property
// Initialize 'meomeo' object 
const meomeo = new animal(); //meomeo call an instance of the animal class
meomeo.cat = 'tom'; //set the value of the cat property
meomeo.cat // access it

// defined methods
class animal {
    cat() {
        return 'hello i am tom!'
    }
}
const meomeo = new animal();
meomeo.cat; // invoke on an instance of the class

/* Constructor() special method: that can use to initalize the class properties
when create a new object instance */
class animal {
    constructor(cat){
        this.cat = cat
    }
    cat() {
        return 'hello i am' + this.cat+'!'
    }
}
const meomeo = new animal(tom);
meomeo.cat(); // result hello i am tom !

// Can define 'static' method to allow it to be executed on the class instead
class animal {
    static cat() {
        return 'hello!'
    }
}
animal.cat(); //result 'hello!'

    //Inheritance
// define a new class 'chicken' that extends animal
class chicken extends animal {

}

//inside a chile class, you can reference the parent class super()
class chicken extends animal {
    cat(){
        return super.cat() + 'i am a chicken'
    }
}
const quacquac = new chicken()
quacquac.cat() // will prints 'hello! i am a chicken'

