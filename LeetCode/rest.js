
function exclude(_arr, ...rest) {
    let a = [];
    for (const total of rest) {
        if (_arr[total] === rest[total]) {
            a[total] = _arr.splice(total, 2);
            return a;
        }
    }

}
const c = [1, 2, 3, 4, 5, 6];
console.log(exclude(c));

