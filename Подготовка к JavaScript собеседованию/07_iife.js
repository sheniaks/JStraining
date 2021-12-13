// Immediate invoked Function Expression
// let res = [];
// for (var i=0; i<5; i++) {
//     res.push( function (){
//     console.log(i);
//     })
// }
// res[2]();  // 5
// res[4]();  // 5

let res = [];
for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;
    res.push(function () {
      console.log(j);
    });
  })();
}
res[2](); //2
res[4](); //4
