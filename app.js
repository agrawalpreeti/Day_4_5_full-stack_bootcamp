//Lab 1

//problem 1
var area_of_triangle = function (side1, side2, side3) {
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))

    return area;
}
console.log(area_of_triangle(5, 6, 7));
//problem 2
var fartemp = function (celtemp) {
    temp = 32 + 1.8 * (celtemp)
    return temp;
}
console.log(fartemp(60));


var celtemp = function (fartemp) {
    temp = (fartemp - 32) * 0.556;
    return temp;
}
console.log(celtemp(45));


//Lab 2
// problem 1
var max = function (a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c)
        return b;
    else if (c > a && c > b)
        return c;
}

console.log(max(1, 2, 5));

//problem 2

var factor = function (a) {
    if ((a % 3 == 0) || (a % 7 == 0))
        return true

    else
        return false

}

console.log(factor(14));
console.log(factor(13));
console.log(factor(60));

//Lab 3
//problem 1

function capitalletter(name) {
    name = name.split(" ");

    for (var i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].substr(1);
    }

    return name.join(" ");
}
console.log(capitalletter("we are the champions"));

//problem 2
function DNA(str1, str2) {
    c = str1.split("");
    d = str2.split("");
    var index = 0;
    for (var i = 0; i < str1.length; i++) {

        if (c[i] != d[i]) {
            index++;

        }
    }
    return index;
}


console.log(DNA("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"));
// problem 3

function pangram(str) {
    a = str.split(" ");
    b = a.join("");
    c = b.split(".");
    d = c.join("");

    e = d.split("")

    var p = "abcdefghijklmnopqrstuvwxyz";
    var h = p.split("");
    for (var i = 0; i < p.length; p++) {
        e[i] = e[i].toLowerCase();
    }
    var t = 0;
    for (i = 0; i < 26; i++) {
        for (j = 0; j < e.length; j++) {
            if (h[i] == e[j]) {
                t++;
                break;
            }
        }
    }
    return t > 25 ? true : false;

}
console.log(pangram("The quick brown fox jumps over the lazy dog."));
console.log(pangram("abcdefghijklmnopqrstuvwxyz"));
console.log(pangram("A normal sentence which doesnt have all chars"));
//problem 4

function isogram(a) {
    b = a.split("");
    var z = 0;
    for (var i = 0; i < b.length; i++) {
        for (var j = i + 1; j < b.length; j++) {
            if (b[i] == b[j]) {

                z++;
                break;
            }
        }
    }
    return z > 0 ? false : true

}
console.log(isogram("downstream"));
console.log(isogram("isograms"));

//problem 5
function acronym(a) {
    b = a.split(" ");
    var z = " ";
    var str = " ";
    for (var i = 0; i < b.length; i++) {
        z = z + b[i][0];

    }
    return z;
}

console.log(acronym("Portable Network Graphics"));

// Lab 4
//problem 1

var integer = [10, 20, 30, 40];

n = integer.indexOf(30)

console.log((n + 1));
n = integer.indexOf(40)

console.log((n + 1));

//problem 2

function swap(arra) {

    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];

    return arra;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));

//problem 3
function highest(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}
console.log(highest([1, 2, 3, 4]));
console.log(highest([1, 2, 3, 14]));


function smallest(arr) {
    var small = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (small > arr[i]) {
            small = arr[i];
        }

    }
    return small;
}
console.log(smallest([1, 2, 3, 4]));
console.log(smallest([5, 2, 3, 14]));

//problem 4
function sumarr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}
// console.log(sumarr([1, 2, 3, 4]));
//  console.log(sumarr([1, 3, 3, 4]));

//lab 7
var person1 = {};
var person2 = {};
var person3 = {};

person1.name = "Abhishek";
person1.age = 35;
person1.mobiles = [123, 345];

person2.name = "Preeti";
person2.age = 20;
person2.mobiles = [123, 345];

person3.name = "Piyush";
person3.age = 21;
person3.mobiles = [123, 345];


 function setValue(object, prop, propValue){
    return (object[prop] = propValue);
 }
    


 function getValues(object,prop){
      return object[prop];
}



 function getStatus(object){


    if (person.age > 60 && person.age <= 100) {
        status = "old";
    }
    else if (person.age > 20) {
        status = "adult";
    }
    else if (person.age > 10) {
        status = "teenager";
    }
    else if (person.age >= 0) {
        status = "kid";
    }

    else
        status = "Invaild age"
    return status;
}

function addMobile(object, mobileNumber){
    object.mobiles.push(mobileNumber);
}

function removeMobile(object, mobileNumber){
    var index = object.mobiles.indexOf(mobileNumber)
    object.mobiles.splice(index, 1);
}
function totalMobiles(object){
    return object.mobiles.length;

}


addMobile(person1,456);
console.log(person1.mobiles);
