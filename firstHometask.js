//создаем переменные
let name ="Иван";
let surname="Васильков";
let age = 25;
let isProgrammer = true;
let is20Years=false;
let kids= null;
let wife;
let x=(1/0);
let y=(-1/0);
let a=Math.pow(2,53)-1;
let b=10;
let c=-(Math.pow(2,53)-1);
let d=-2;

//выводим  значения  наших переменных

console.log(name);
console.log(age);
console.log(isProgrammer);
console.log(is20Years);
console.log(kids);
console.log(wife);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(x);
console.log(y);

//выводим тип данных каждой переменной
console.log( typeof name);
console.log(typeof age);
console.log(typeof isProgrammer);
console.log(typeof is20Years);
console.log(typeof kids);
console.log(typeof wife);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof x);
console.log(typeof y);

 //математические операции
let q=b+d;//8
q/=2;//4
console.log(q);
 q=b-d;
console.log(q);
 q=b*d;
 q++;
console.log(q);//19
 q=b/d;
console.log(q);
 q=b%d;
console.log(q);//0
 q=b**d;
console.log(q);
q='1'+b;
console.log(q);
q=b+d+'3';
console.log(q);
q=d/'3';
console.log(q);
q=name+surname;
console.log(q);
let m='7',n="5";
q=m+n;
console.log(q);
q=+m+ +n;
q--;
console.log(q);