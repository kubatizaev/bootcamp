var arr = [1, 2, 3, 0, 4, 5, 0, 6, 7, 0, 8, 0, 0,];
var nulls = arr.filter(function(item) {
    return item === 0;
});
var num = arr.filter(function(item){
    return item !==0;
});
console.log(num.concat(nulls));