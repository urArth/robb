/* for (let i = 1; i <= 100; i++) {
    
    console.log(i);
} */

/* for (let i = 100; i >= 1; i--) {
    console.log(i);
} */

/* for (let i = 0; i <= 100; i+=2) {   
    console.log(i);
} */
/* let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x')
}
console.log(arr); */
/* let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i)
}
console.log(arr);  */
/* let arr = [2, 3445235, 12, 343, 43,3,3,7, 1,9,4,14];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(i);
    }
} */
/* let arr = [1,2,3,4,6,7,8,9];
let booll = false; 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        booll = true
    }
}
if (booll) {
    console.log('yest');
} else {
    console.log('netu');
}
 */

/* let arr = [2, 3445235, 12, 343, 43,3,3,7, 1,9,4,14];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum); */

/* let arr = [2, 3445235, 12, 343, 43,3,3,7, 1,9,4,14];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2
}
console.log(sum);  */

/* let arr = [2, 3445235, 12, 343, 43,3,3,7, 1,9,4,14];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += (arr[i]) / arr.length
}
console.log(sum);  */
/* let num = 7 + 1;
let num2 = 7;
let snum = [];
let sum = 1;
for (let i = 0; i < num2; i++) {
    num -= 1
    snum.push(num)
}
for (const i of snum) {
    sum *= i
}
console.log(sum); */


/* let arr = [];
for (let i = 10; i >= 1; i--) {
    arr.push(i)
}
console.log(arr); */

/* let arr = [-2, -3445235, -12, -343, 43,-3,3,7, 1,-9,4,-14];
let sum =0;
for (const i of arr) {
    let str = String(i)
    if (str[0] != '-') {
        sum += i
    }
}console.log(sum); */


/* let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let str = String(arr[i])
    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
        console.log(arr[i]);
    }
} */

/* let arr = [10, 20, 30, 50, 235, 3000];
console.log(arr.reverse()); */

/* let arr = [0, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        console.log(i);
    }
} */

/* let arr = [0, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>')
    
} */

/* let arr = [0, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    document.write(`<p> ${arr[i]} </p>`)
    
} */
/* let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (const i of arr) {
    if (i == 'Sunday' || i == 'Saturday') {
        document.write(`<p><b>${i}</b></p>`)
    } else if (i != 'Sunday' && i != 'Saturday') {
        document.write(`<p>${i}</p>`)
    }
} */

/* let day = 'Friday';
let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (const i of arr) {
    if (i == day) {
        document.write(`<p><i>${i}</i></p>`)
    } else if (i != day) {
        document.write(`<p>${i}</p>`)
    }
} */

/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (const i in obj) {
    obj[i] = obj[i] + obj[i] * 0.1
}
console.log(obj); */

/* let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (const i in obj) {
    if (obj[i] >= 400) {
        obj[i] = obj[i] + obj[i] * 0.1
    }
}
console.log(obj); */

/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (const i of arr1) {
    for (const ite of arr2) { -- спросить
        obj[i] = ite
    }
}
console.log(obj); */


/* let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let arrkeys = Object.keys(obj);
let keyssum = 0;
let valsum = 0;
for (const i of arrkeys) {
    keyssum += Number(i)
}
for (const i in obj) {
    valsum += obj[i]
}
console.log(keyssum / valsum); */




/* let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arrkeys = Object.keys(obj);
let arrvals = [];
for (let i = 0; i < arrkeys.length; i++) {
    for (const ite in obj) {                 -- спросить
        arrvals[i] = obj[ite]
    }
}

console.log(arrvals);
console.log(arrkeys); */


/* let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];
for (let i = 0; i < Object.keys(obj).length; i++) {
    for (const ite in obj) {
        if (true) {
            let a = obj[ite];
            let astr = String(a)                          -- спросить
            if (astr[0] == 1 || astr[0] == 2) {
                Number(astr)
                arr[i] = a
            }
        }
    }
}
console.log(arr); */


/* let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i < arr.length+1; i++) {
    for (const ite of arr) {
        obj[i] = ite
    }
    
}
console.log(obj); */