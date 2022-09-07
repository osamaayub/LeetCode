
const list = ["we are pakistani people"];
const str = "";
let largest_num = 0;
str.split(",");
const count = list.reduce((acc, val) => {
    if (list == '') {
        return acc;

    }
    if (!acc[val]) {
        acc[val] = 1;
    }
    else {
        acc[val] = acc[val] + 1;
    }
    if (largest_num > acc[val]) {
        largest_num = acc[val];

    }
    else if (largest_num === acc[val]) {
        str[i] += list[i];

    }
    return acc;

}, {})
const a = list.forEach((element) => {
    list.push(element, largest_num);

})
console.log(a);
