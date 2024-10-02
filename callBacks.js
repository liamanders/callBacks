// I found different ways to making the same code and I didn't really know which is best
// So I went with this one.

function printName(callback) {
    console.log("Hi, my name is Liam Andersson");
    setTimeout(callback, 2000);
  };

function printAge(callback) {
    console.log("I'm 26 years-old");
    setTimeout(callback, 3000);
  };
  
function printLocation(callback) {
    console.log("I was born in Aleppo - Syria but now I live in Sweden");
    setTimeout(callback, 4000);
  };
  
function printHobbies(callback) {
    console.log("My hobbies are making music, programming and playing tennis");
    setTimeout(callback, 5000);
  };
  
  printName(() => {
    printAge(() => {
      printLocation(() => {
        printHobbies(() => {
        });
      });
    });
  });