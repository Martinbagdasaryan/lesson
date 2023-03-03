// const arr = [1, 3, 8, 6, -4];
// let arr1 = []
// let a = arr.length;
// for(let i=0;i<a;i++){
// arr1.unshift(arr[i]);
// }
// console.log(arr1)
//

// const arr = [1, 3, 8, 6, -4];
// for (let i = 0; i < arr.length / 2; ++i) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i - 1] = temp;
// }
// console.log(arr);

// let arr = [1,3, 8, 6, -4];

// arr.sort(function(a,b){
//     return a-b
// })
// console.log(arr)

// let arr = [1, 112, 12, 3, 8, 6, -4];
// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let q = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = q;
//     }
//   }
// }

// console.log(arr.sort());

// let a={
//     fun() {
//         console.log('jhkjhk');
//     }
// }

// a.fun()

// fn()

// function fn () {
//     console.log('lk;ok');
// }

// var d = 'iuh'

// fnm()

// const fnm = () => {
//     console.log('ajsdhas')
// }

// function() {
//     for () {
//         let a = 'es popoxakan em'
//     }

// }

// let a = [];
// inputArray = [5, 6, -4, 2, 3, 2, -23] ;
// for (let i = 0;i < inputArray.length; ++i){
//     q = inputArray[i-1] * inputArray[i];
//     a.unshift(q)

// }
// console.log(a)
// a.pop(NaN)
// console.log(a)
// a.sort(function(c,b){
//     return c-b
// })
// console.log(a)
// console.log(a.pop())

// let a;
// let b;
// // let a = 0
// let solution = (n) => {
//     for(let i = 1; i <= n; i++) {
//         a = ((i-1)*4)
//         // console.log(a);
//         b = a + 1
//         console.log(b)
//     }

// }

// solution(1)

// let statues = [6, 2, 3, 8]
// let q = [];

// statues.sort(function(c,b){
//     return c-b
// })
// let x = statues.pop()
// for(let i = statues[0]; i < x ; ++i){
//     q.unshift(i)
// }
// console.log(q.length - statues.length);

// let sequence = [10, 1, 2, 3, 4, 5];

// let x;

// for (let i = 0; i < sequence.length / 2; i++){
//     // console.log(i)
//     if(sequence[i]!=sequence[i + i]){
//         x = true
//     }
//     else{
//         x = false
//     }

// }

// console.log(x)

// const call = {
//     caller: "mom",
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };

//   call.says()

// const call = {
//     caller: "mom",
//     says: () => {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };

//   call.says()

// const call = {
//     caller: "mom",
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };

//   let newCall = call.says;

//   newCall();

// function makeFunc() {
//     var name = "Mozilla";

//     function displayName() {
//       console.log(name);
//     }

//     return displayName;
//   };

//   var myFunc = makeFunc();
// //   myFunc();

// let  f;
// let q = []

// let sequence = [1, 3, 2, 1] ;
// for (let i = 0;i < sequence.length; i ++){
//     if((sequence[i] - sequence[i++])===1){
//         f = true
//     }
//     else{
//         if((sequence[i] - sequence[i++])===1){
//             f = true
//         }
//         else{
//             f = false
//         }
//     }
//     q.push(f)
// }
// console.log(q);

// var a = 5;
// (function() {
//   var a = 12;
//   console.log(a);
// })();var a = 10;
// var x = (function() {
//     var a = 12;
//     return (function() {
//       console.log(a);
//     });
//   })();
//   x();

// var a = 10;
// var x = (function() {
//   var y = function() {
//     var a = 12;
//   };
//   return function() {
//     console.log(a);
//   }
// })();
// x();

// var a = 10;
// var x = (function() {
//   (function() {
//     a = 12; // <<< look carefully at this line.
//   })();
//   return (function() {
//     console.log(a);
//   });
// })();
// x();

// var a = 10;
// (function() {
//   var a = 15;
//   window.x = function() {
//     console.log(a);
//   }
// })();
// x();

// var x = 10;

// function foo() {
//   var y = 20; // free variable
//   function bar() {
//     var z = 15; // free variable
//     return x + y + z;
//   }
//   return bar;
// }

// q = foo()

// console.log(q())

// let  f;
// let q = [];
// let sequence = [1, 3, 2, 1] ;
// for (let i = 0;i<sequence.length; i ++){
//     if((sequence[i] - sequence[i++])===1){
//         f = true
//     }
//     else{
//         if((sequence[i] - sequence[i++])===1){
//             f = true
//         }
//         else if((sequence[i++] - sequence[i])===1){
//             f = true
//         }
//         else{
//             f = false
//         }
//     }
//     console.log(f)
// }
// function f(){
//     var o = {};
//     var o2 = {};
//     o.a = o2; // o ссылается на o2
//     o2.a = o; // o2 ссылается на o

//     return "azerty";
//   }

// let a = 1;
// let b = 1;
// let q = 8
// for (let i = 3; i<q;i++ ){
//     let c = a + b;
//     a = b
//     b = c
// }
// console.log(b)

// function ez(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return ez(n - 1) + ez(n - 2);
//   }
// }
// console.log(ez(7));

// let a = 5
// let c=1 ;
// for(let i = 0 ; i <a;i++){
//     c*=(i+1)
// }
// console.log(c)

// function forof(c){
// for (let i of c){
//     console.log(i);
// }
// }
// forof([6, 2,7,2,4,78, 3, 8])

// function forin(d){
//     for (let i in d){
//         console.log(i);
//     }
// }
// forin([6, 2,7,2,4,78, 3, 8])

// (function autorun(){
//     var x = 1;
//     setTimeout(function log(){
//         console.log(x);
//       }, 6000);
//   })();

// function getFactorialOf(n) {
//     if (n===5){
//         function fac5 (){
//             return 120
//         }
//         return fac5()
//     }
//     else{
//         if (n <= 1) return n;
//         return n * getFactorialOf(n - 1);

//     }
// }

// console.log(getFactorialOf(10));

// var Counter = (function() {
//     var privateCounter = 0;

//     function changeBy(val) {
//       privateCounter += val;
//     }

//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     };
// })();

// console.log(Counter);

// function karot(){
//     let erkar = 0;
//     function pro(

//     ){
//         return ++erkar
//     }
//     return pro()
// }
// console.log(karot());

// function range(start, end) {
//   if (end === undefined) {
//     return (end) => {
//       const arr = [];
//       for (let i = start; i <= end; i++) {
//         arr.push(i);
//       }
//       return arr;
//     };
//   }
//   const arr = [];

//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(range(3, 3)); // [3]
// console.log(range(3, 8)); // [3,4,5,6,7,8]
// console.log(range(3, 0)); // []

// var start3 = range(3);
// var start4 = range(4);

// console.log(start3(3)); // [3]
// console.log(start3(8)); // [3,4,5,6,7,8]
// console.log(start3(0)); // []
// console.log(start4(6)); // [4,5,6]

// function func(n){
//     let a = 0;
//     a++

// }

// function powee() {
//   let ca = {};
//   return function pow(num, degree) {
//     if (!ca[`${num},${degree}`]) {
//       console.log("calculated");
//       let result = num;
//       for (let i = 0; i < degree - 1; i++) {
//         result *= num;
//       }
//       ca[`${num},${degree}`] = result;
//       console.log(ca[`${num},${degree}`]);
//     } else {
//       console.log(ca[`${num},${degree}`]);
//     }
//   };
// }
// const memorizedPower = powee();

// memorizedPower(5, 3);
// memorizedPower(5, 3);
// memorizedPower(6, 3);
// memorizedPower(6, 3);

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let q = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = q;
//       }
//     }
//   }

//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let a = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[a]) {
//         a = j;
//       }
//     }
//     [arr[i], arr[a]] = [arr[a], arr[i]];
//   }
//   return arr;
// }

// function time(cb) {
//   const startTime = new Date() / 1000;
//   cb(arr);
//   const endtime = new Date() / 1000;
//   return endtime - startTime;
// }

// const arr =
//   "628 412 615 727 553 90 420 914 996 399 54 112 208 184 216 204 662 920 247 900 767 291 983 789 637 11 545 155 529 607 591 313 314 12 736 210 232 256 43 804 173 845 782 346 638 361 138 629 751 392 523 691 668 242 383 720 670 186 611 808 968 700 734 932 973 743 971 230 841 651 714 987 294 786 477 634 292 605 156 440 936 644 955 122 36 857 347 328 750 542 894 299 508 764 835 190 950 300 998 922 684 187 918 675 799 829 562 759 532 738 301 798 18 949 620 625 401 617 441 92 13 339 179 695 601 737 834 269 189 539 536 648 224 892 96 298 896 111 258 195 575 994 880 656 711 574 278 104 145 423 366 980 345 797 64 534 830 287 680 747 161 970 116 326 107 60 198 593 703 310 235 506 479 712 22 791 739 471 450 431 309 84 304 70 327 676 342 937 200 275 388 26 260 667 702 209 586 906 413 364 71 397 655 375 725 924 253 775 878 3 790 982 541 363 426 205 864 942 870 174 150 219 820 856 904 809 882 125 264 136 236 302 207 871 120 839 991 773 433 41 387 332 134 403 202 410 201 274 443 223 564 359 943 681 75 742 621 828 188 139 661 456 293 528 378 902 390 73 578 68 953 89 520 802 903 244 88 325 852 778 832 445 795 460 27 6 783 952 24 715 15 234 685 740 315 160 639 769 690 705 729 491 741 745 31 448 419 886 279 95 961 787 414 768 114 636 855 818 86 827 772 893 319 876 353 356 40 800 859 821 999 422 400 805 619 547 343 381 369 16 377 925 340 618 334 926 446 919 246 887 978 848 407 389 480 559 521 582 862 555 178 451 923 93 762 726 704 97 814 312 316 360 907 285 318 867 140 177 608 144 572 758 52 822 567 442 321 752 560 879 384 464 958 599 476 504 554 344 171 502 496 654 884 963 817 455 569 915 149 220 624 770 94 707 551 367 911 967 231 262 473 522 957 8 863 597 237 78 682 647 169 563 537 938 584 585 844 1000 701 67 602 77 826 630 674 252 130 493 869 604 964 329 336 265 590 780 854 9 272 916 606 960 368 243 929 53 38 165 461 665 268 717 825 846 589 63 382 500 499 255 55 509 65 286 614 771 881 365 402 633 226 117 807 671 965 28 781 724 565 101 482 449 308 659 860 577 722 947 211 193 779 303 526 552 282 170 696 351 199 87 843 888 658 849 721 588 944 415 408 39 330 218 718 527 851 168 538 143 683 121 370 833 728 930 484 641 561 270 917 794 421 819 98 483 241 393 632 898 435 191 458 948 513 623 811 271 642 533 374 358 755 85 5 394 180 320 47 284 549 850 263 76 229 777 754 765 386 105 516 166 874 429 59 69 868 579 650 137 233 653 815 396 910 972 731 709 861 163 640 459 901 376 840 501 697 706 796 317 858 889 42 510 58 323 147 785 212 568 305 438 831 485 469 481 540 7 162 935 716 108 909 524 576 80 966 643 951 151 45 905 46 974 959 132 525 823 730 135 913 311 988 699 113 406 945 257 486 215 713 405 266 986 83 239 784 276 181 899 25 984 196 694 891 434 411 185 432 687 664 669 692 103 710 19 214 416 853 657 439 159 79 488 152 558 157 544 14 760 766 51 462 626 557 452 761 803 126 206 119 622 548 436 57 793 158 192 875 10 74 1 453 296 806 99 391 954 816 250 732 197 176 543 487 873 663 463 280 719 531 512 355 148 649 115 735 511 289 494 581 933 490 362 507 338 812 877 866 281 371 498 251 492 331 989 666 514 470 146 530 847 474 102 307 273 427 81 753 610 66 756 335 995 883 931 164 836 596 44 48 62 380 985 447 153 946 297 322 467 295 454 398 350 56 837 627 912 813 221 646 425 890 142 595 550 519 409 430 571 990 939 404 124 277 354 748 457 127 631 283 962 609 249 395 33 518 744 118 50 975 248 424 418 503 774 444 267 290 566 245 128 141 997 927 969 993 592 4 183 645 468 154 652 580 49 992 91 32 746 100 37 763 466 259 82 428 357 673 227 598 213 573 194 20 677 679 517 306 693 792 688 417 349 594 203 603 908 535 583 175 222 570 757 341 373 475 546 934 106 941 228 956 34 2 810 333 472 261 672 616 749 708 885 897 872 385 497 865 733 788 167 379 217 324 129 240 238 465 723 801 131 72 776 30 21 678 182 254 110 61 824 587 348 842 337 35 976 352 437 612 505 17 109 613 600 23 29 660 515 940 288 123 172 977 372 635 689 495 225 895 921 686 698 979 133 838 556 489 981 478 928"
//     .split(" ")
//     .map((el) => +el);

// const arr1 = [...arr];
// const arr2 = [...arr];

// console.log(time(() => selectionSort(arr1)));
// console.log(time(() => bubbleSort(arr2)));

// console.log(arr1);
// console.log(arr2);

// let dmb = ['asd','fgh','jkl']

// let dmbCopy = Array.from(dmb)

// console.log(JSON.stringify(dmbCopy));

// let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
// let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// // Change the value of the 'list' property in ingredients_list_deepcopy.
// ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// // The 'list' property does not change in ingredients_list.
// console.log(ingredients_list[1].list);

// let dzen =['exooo',{list:['dxk','shlxk','chmp']}]
// let dzenCopy = JSON.parse(JSON.stringify(dzen));

// dzenCopy[1].list = ['fu', 'brr']
// console.log(dzenCopy);

// function isPrimitiv(arg) {
//     if (typeof arg !== "object" || arg === null) {
//         return true;
//     }
//     else  {
//         return false;
//     }

// }
// console.log(isPrimitiv());

// let ob = {ez : 'dmm', xz:'dd'};
// console.log(typeof ob );
// console.log(typeof 'barev')
// console.log(typeof typeof {});

// function isPrimitiv(arg) {return (typeof arg !== "object" || arg === null);}
// console.log(isPrimitiv());

// console.log(isPrimitiv({}));

// const obj = {
//   name: "ggg",
//   printMyself: function () {
//     console.log(this.name);
//   },
//   key: Symbol(),
//   child: {
//     name: "limon",
//     children: [
//       { name: "ashotik" },
//       { name: "valodik", child: { name: "gvidon" } },
//     ],
//   },
// };

// obj2.name = "Ashot";

// let obj2 = Object.assign({}, obj);
// obj.children[0].name = 'gmp'

// function deepCopy(arg){
//     let obj2;
//     if (isPrimitiv(arg) === false){
//         obj2 = Object.assign({}, obj);
//         obj2.child = Object.assign({},obj.child)
//         obj2.child.children = Object.assign({},obj.child.children)

//         obj2.child.children[0]='dee'
//         return  obj2
//     }
//     else{
//         return obj2
//     }
// }
// console.log(deepCopy(obj));
// console.log(obj.child);

// function deepCopy(arg){
//     if (isPrimitiv(arg) === false){
//     //    let deepC
//     }
//     else{
//         return 'es i objecgt chi';
//     }
// }

// let deepCopy = {};
function deepCloneObj(arg) {
  if (isPrimitiv(arg)) return arg;

  if (Array.isArray(arg)) {
    const arr = [];
    for (const item of arg) {
      arr.push(deepCloneObj(item));
    }
    return arr;
  }
  if (arg === "function") {
    return arg.bind({});
  }

  const obj = {};
  for (let key in arg) {
    obj[key] = deepCloneObj(arg[key]);
  }
  return obj;
}

// const obj2 = deepCloneObj(obj);

// obj2.child.children[0].name = "exxx";

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj2));

let isPrimitive = (arg) =>
  (typeof arg !== "object" && typeof arg !== "function") || arg === null;

// function ham(arg1, arg2) {
//   let q = 0,
//     e = 0;
//   if (isPrimitive(arg1) && isPrimitive(arg2)) return arg1 === arg2;
//   else if (isPrimitive(arg1) !== isPrimitive(arg2)) return false;
//   else if (Array.isArray(arg1) !== Array.isArray(arg2)) return false;
//   else if (Array.isArray(arg1)) {
//     if (arg1.length === arg2.length) {
//       for (let i = 0; i < arg1.length; i++) {
//         if (arg1[i] === arg2[i]) q++;
//         else if (arg1[i] !== arg2[i]) e++;
//       }
//       if (e !== 0) return false;
//       return true;
//     }
//     return false;
//   } else if (typeof arg1 === "function" && typeof arg2 === "function")
//     return arg1.toString() === arg2.toString();
//   else {
//     for (let keys1 in arg1) {
//       for (let keys2 in arg2) {
//         if (keys1 === keys2) return ham(arg1[keys1], arg2[keys2]);
//         else return false;
//       }
//     }
//   }
// }

// console.log(ham({a:{e:[123,45,8]}},{a:{e:[123,45,6]}}));

// const a = 'exo'
// console.log(typeof a.length);

// function Person (name){
//   this.name = name;
// }
// Person.prototype.hi = function (){
//   console.log(`hi my name is ${this.name}`);
// }
// const dav = new Person( 'dav' )

// dav.hi()

// let animal = {
//   eats: true
// };

// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// console.log(rabbit.eats); // true

// console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

// let animal = {
//   eats: true
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });

// console.log(rabbit.jumps); // true

// let dxk = Array

// Array.prototype.double = function () {
//   let q = [];
//   for (let i = 0; i < dxk.length; i++) {
//     q.push(dxk[i] * 2);
//   }
//   return q;
// };

Array.prototype.double = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] *= 2;
  }
  return this;
};

// console.log([2,4,6].double())

Array.prototype.ast = function (w) {
  let q = [];
  let c;
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < w; j++) {
      c = this[i] * this[i];
    }
    q.push(c);
  }
  return q;
};

// class User{
//   constructor(name){this.name = name}
//   seyHi() {console.log(this.name);}
// }

// function User(name){
//   this.name = name
// }

// User.prototype.sayHi = function(){
//   console.log(this.name);
// }

// let user = new User('ivan');
// user.sayHi()

// class User {

//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("Иван");
// console.log(user.name); // Иван

// user = new User(""); // Имя слишком короткое

// class Exo {
//   constructor(gesh) {
//     this.gesh = gesh;
//   }
//   // get gesh(){
//   return this._gesh
// }
// set gesh(value){
//   if (value.length < 4 ){
//     console.log("shat karca es i");
//     return;
//   }
//   this._gesh = value
// }
// }

// let exo = new Exo("gazan");
// console.log(exo.gesh);

// class User {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// class vvv{
//   constructor(name){
//     this.name = name
//   }

//   get dambul(){
//     return this.name
//   }
//   set dambul(vee){
//     this.name + vee
//   }
// }
// let jmp = new vvv('prlo')

// console.log(jmp.dambul);

// new Function () {

// }

// class Person {
//   constructor(gender,b,workplace,type){
//     this.gender = gender;
//     this.b = b;
//     this.workplace = workplace,
//     this.type = type
//   }
// }

// class Man extends Person {
//   constructor(b,workplace,type) {
//     super('Male',b,workplace,type)

//   }

//   fn () {
//     console.log(this.gender);
//   }
// }

function Person(gender, anun, workplace, type) {
  this.gender = gender;
  this.anun = anun;
  this.workplace = workplace;
  this.type = type;
}

var inq = new Person("boy", "ashotik", "komaygi", "popaxakan");
console.log(inq);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const me = new Person('Joe', 20);

// console.log(me); // {name: 'Joe', age: 20}

// Person.prototype.greet = function() {
//   console.log('Hi', this.name);
// }

// me.greet(); // Hi Joe

// const you = new Person('Alice', 22);
// you.greet(); // Hi Alice

// function Employee(name, age, title) {
//   Person.call(this, name, age);
//   this.title = title;
// }

// // create Employee prototype from Person prototype
// Employee.prototype = Object.create(Person.prototype);

// const joe = new Employee('Joe', 22, 'Developer');
// console.log(joe.name); // Joe
// joe.greet(); // Hi Joe
