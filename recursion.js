var isEven = function isEven (num) {
        return num < 0 ?   //this case and its corresponding consequent enables our recusive computation to work with negative numbers
                   isEven(-num):
               num === 0 ?
                   true:
               num === 1 ?
                   false:
               //ELSE
                   isEven(num - 2);
};

console.log("50 is even: " + isEven(50));

console.log("75 is even: " + isEven(75));

console.log("-1 is even: " + isEven(-1));

