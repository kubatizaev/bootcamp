var i = prompt('Введите слово');
var arr = [];
for(var y = 0; y < i.length; y++) {
    for(var x = 0; x < i.length - y; x++) {
        arr.push(i.slice (y, i.length - x))
    }
}
console.log(arr);