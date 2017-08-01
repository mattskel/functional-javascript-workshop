//function upperCaser(input) {
//    var output = input.toUpperCase();
//    return output;
//}
//
//module.exports = upperCaser

// Higher Order Functions

//function repeat(operation, num) {
//    for (var i = 0; i < num; i++) {
//        operation();
//    }
//}
//
//// Do not remove the line below
//module.exports = repeat

//function repeat(operation, num) {
//  if (num <= 0) return
//  operation()
//  return repeat(operation, --num)
//}
//
//module.exports = repeat

// Basic: Map

//function doubleAll(numbers) {
//    var doubles = numbers.map(function(x) {
//        return x * 2;
//    });
//    return doubles;
//}
//module.exports = doubleAll

//module.exports = function doubleAll(numbers) {
//  return numbers.map(function double(num) {
//    return num * 2
//  })
//}

// Basic: Filter

//function getShortMessages(messages) {
//    return messages.map(function message(obj) {
//        return obj.message;
//    }).filter(function reduce(message) {
//        return message.length < 50;
//    })
//}
//module.exports = getShortMessages
//
//module.exports = function getShortMessages(messages) {
//  return messages.filter(function(item) {
//    return item.message.length < 50
//  }).map(function(item) {
//    return item.message
//  })
//}

// Basic: Every Some

//function checkUsersValid(goodUsers) {
//    return function allUsersValid(submittedUsers) {
//        return submittedUsers.every(function(x) {
//            return goodUsers.some(function(y) {
//                return x.id === y.id;
//            });
//        });
//    };
//}
//module.exports = checkUsersValid
//
//module.exports = function checkUsersValid(goodUsers) {
//  return function allUsersValid(submittedUsers) {
//    return submittedUsers.every(function(submittedUser) {
//      return goodUsers.some(function(goodUser) {
//        return goodUser.id === submittedUser.id
//      })
//    })
//  }
//}

// Basic: Reduce

//function countWords(inputWords) {
//    return inputWords.reduce(function(obj, item) {
//        if (item in obj) {
//            obj[item]++;
//            return obj;
//        } else {
//            obj[item] = 1;
//            return obj;
//        }
//    }, {});
//}
//module.exports = countWords
//
//function countWords(arr) {
//  return arr.reduce(function(countMap, word) {
//    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//    return countMap
//  }, {}) // second argument to reduce initialises countMap to {}
//}
//
//module.exports = countWords

// Basic: Recursion

//function reduce(arr, fn, initial) {
//    if (!arr.length) {
//        return initial;
//    }
//    fn(initial,arr[0]);
//    reduce(arr.slice(1),fn,initial);
//    return initial;
//}
//module.exports = reduce
//
//function reduce(arr, fn, initial) {
//  return (function reduceOne(index, value) {
//    if (index > arr.length - 1) return value // end condition
//    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//  })(0, initial) // IIFE. kick off recursion with initial values
//}
//
//module.exports = reduce

// Bsaic: Call

//function duckCount() {
//  return Array.prototype.slice.call(arguments).filter(function (obj) {
//    return Object.prototype.hasOwnProperty.call(obj, 'quack');
//  }).length;
//}
//
//module.exports = duckCount;

// Partial Application without Bind

var slice = Array.prototype.slice

function logger(namespace) {
    return slice.apply()
}

module.exports = logger

// Function Spies

function Spy(target, method) {
    
}

module.exports = Spy