const arr=[1,2,4,5,6,5,1,7,8,8];

const count=(arr.reduce((acc,val)=>{

return {...acc,[val]:(acc[val]|| 0)+1}
},{}));

console.log("count of element is:",count)
