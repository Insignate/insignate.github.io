$(function() {
  $("#main-page").accordion({
    heightStyle: "content"
  })
});


const sum = (...args) => args.reduce((a, b) => a + b);

const result = sum(1,2,3,4)
console.log(result)