var arrive =[];
for(var i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
        arrive.push(i);
    }
}
console.log(arrive);