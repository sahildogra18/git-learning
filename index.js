//Day 1
//write a function findlongest word that takes a string as input and returns a longest word in the string . if there are multiple longest words , return the first one encounterd

function findLongestWord(words) {
  let arr = words.split(" ");
  let m = arr.reduce((elem1, elem2) => {
    if (elem1.length > elem2.length) {
      return elem1;
    } else {
      return elem2;
    }
  });
  return m;
}

let val = findLongestWord("maxwell my name is sahillllll");

console.log(val);

function longstr(str) {
  let arr = str.split(" ");
  let sorty = arr.sort((elem1, elem2) => {
    return elem2.length - elem1.length;
  });
  return sorty[0];
}

let gr = longstr("maxwell my name is sahillllll");
console.log(gr);

//2 > write a function genrateHash to accomplish this task.

function genrateHash(str) {
  let arr = str.split(" ");
  arr.unshift("#");
  let mapp = arr.map((elem) => {
    return elem.replace(elem[0], elem[0].toUpperCase());
  });
  let convTostr = mapp.join("");
  return convTostr;
}

let op = genrateHash("hello my name is sahil");
console.log(op);

//3> write a function called countChar that takes two paramenters : a string and a charctor to count . the function should should return the number of times the specified charactor appears in the string

function countChar(str, findStr) {
  let arr = str.toLowerCase().split("");
  console.log(arr);
  let number = 0;
  let mappy = arr.map((elem) => {
    if (elem == findStr) {
      return number++;
    }
  });
  return number;
}

let gh = countChar("SssssSSS", "s");
console.log(gh);

// 3> Tringle checking function
function tringle(val1, val2, val3) {
  if (val1 == val2 && val2 == val3 && val3 == val1) {
    return "Equalateral tringle";
  } else if (val1 == val2 || val2 == val3 || val1 == val3) {
    return "isoselas";
  } else if (val1 !== val2 && val2 !== val3 && val3 != val1) {
    return "scalene";
  }
}

let ans = tringle(2, 3, 8);
console.log(ans);

// Array sort in assending order

function assendingOrder(arr) {
  let sorti = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sorti);
}
assendingOrder([1, 89, 56, 23, 105]);

// is this a palindrome

function plalindrome(str) {
  str = str.toLowerCase();
  let str_Rev = str.split("").reverse().join("");
  if (str == str_Rev) {
    return "yes it is palindrome";
  } else {
    return "no";
  }
}

let bb = plalindrome("naman");
console.log(bb);

// find out max number in array

function findMax(arr) {
  let max = Math.max(...arr);
  console.log(max);
}
findMax([1, 8, 78, 52]);

//write a function to find out factorial

function factorail(num) {
  num = Number(num);

  if (num < 0) {
    return;
  } else {
    console.log(num * num - 1);
  }
}

factorail(3);

//write a function which takes arrey and return avg of it

function avg(arr) {
  let res = arr.reduce((accum, cur) => {
    let round = accum + cur / arr.length;
    let val = Math.floor(round);
    return val;
  }, 0);
  return res;
}
let er = avg([53, 50, 50]);
console.log(er);

//write a function where we will check both array are same or not if it is same it is return true or false

function arraySame(arr1, arr2) {
  let war = "hola como estras";
  if (arr1.length != arr2.length) {
    return false;
  }
  let val = arr1.every((elem, index) => {
    if (elem == arr2[index]) {
      return true;
    }
  });
  return val;
}

let mm = arraySame(["mancity", "barca"], ["mancity", "barca"]);
console.log(mm);

//create a function which will take a input of number where it will return sum of that number

function sumNum(nums) {
  nums = String(nums);
  let arr = nums.split("");
  console.log(arr);
  let vibe = arr.reduce((accum, curelem) => Number(accum) + Number(curelem), 0);
  // console.log(vibe);
  return vibe;
}
let kk = sumNum(55);
console.log(kk);

//create a function that takes an array of integers as input and removes any duplicate elements , returning a new array with only the unique elements

function unique(arr) {
  let val = new Set(arr);
  let valu = [...val];
  return valu;
}
let arr = unique(["manunited", "barca", "barca"]);
console.log(arr);

function unique2(arr) {
  let f = arr.filter((elem, i) => {
    if (elem == arr[i]) {
      return true;
    }
  });
  return f;
}
let ff = unique2(["manunited", "barca", "barca"]);
console.log(ff);

//write down a function which takes a string and return count of vouvels

function vouvals(str) {
  str = str.split(" ").join("").toLowerCase();
  console.log(str);
  let arr = str.split("");
  let count = 0;
  let val = arr.map((elem) => {
    if (
      elem == `a` ||
      elem == `e` ||
      elem == "i" ||
      elem == "o" ||
      elem == "u"
    ) {
      return (count = count + 1);
    }
  });
  return count;
}
let rj = vouvals("SAHIL DOGRA IS BARCA PLAYER");
console.log(rj);

//hola my name is sahil
let str = "hola my name is sahil";
let arr = str.split(" ");
let val = arr.map((elem) => {
  return elem.replace(elem[0], elem[0].toUpperCase());
});
let conv = val.join(" ");
console.log(conv);

let arr2 = str.split(" ");
let val2 = arr2.map((elem) => {
  return elem.replace(elem[0], elem[0].toUpperCase());
});
let conv2 = val2.join(" ");
console.log(conv2);

let b = "maxwell my name is sahil";
let j - "rana"
