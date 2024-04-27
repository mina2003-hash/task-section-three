// First task
let x =prompt("Write a big massage");
let y =prompt("Write a small massage");

if(x.trim().lastIndexOf(y) == -1){
    alert("it dose not exist")
}else{
    alert(`position of this massage is:${x.trim().indexOf(y)}`);
}
// secound task
alert("you mast enter 5 value and i will sort them");
let a = +prompt("enter the 1th value");
let b = +prompt("enter the 2th value");
let c = +prompt("enter the 3th value");
let d = +prompt("enter the 4th value");
let e = +prompt("enter the 5th value");
let arr = [a,b,c,d,e]
document.write(`you have entered the values of : ${arr}`);
document.write(`<hr>`);
let f = arr.sort();
document.write(`you valeus after sorting ascending: ${f}`);
document.write(`<hr>`);
let g = arr.reverse();
document.write(`you valeus after sorting descending: ${g}`);