//1

function greetMessage(name){

    return `Good morning, ${name}`;

}

function greetUsers(arr, cb) {
    for(let name = 0; name < arr.length; name++) {
      console.log(cb(arr[name]));
    }
  }

console.log(greetMessage("John"))
 
greetUsers(["John","Peter","Mark"], greetMessage)
