// let nums = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 6, 3, 4, 8, 9, 8, 10];

// function qaytarma(arr){
//     let answer = [];
//     for (let i of arr){
//         if (!answer.includes(i)){
//             answer.push(i);
//         }
//     }
//     return answer;
// }
// console.log(qaytarma(nums));

// function qaytarilmagan(arr){
//     let answer = [];
//     for (let i of arr){
//         if (nums.indexOf (i) === nums.lastIndexOf(i)){
//             answer.push(i);
//         }
//     }
//     return answer;
// }
// console.log(qaytarilmagan(nums));

// let nums = [1,2,3,4,5,6,7,8,9,10];

// function juftKv(){
//     let sum = []; 
//     for (let i of nums){
//         if (i % 2 == 0 ){
//             sum.push(Math.pow(i,2));
//         }else{
//             sum.push(i);
//         }
//     }
//     return sum;
// }
// console.log(juftKv(nums));

// const Matem = {
//     floor : function (float){
//         if (float == 0) {
//             return 0;
//         }
//         if (float > 0){
//             return float - (float % 1);
//         }else{
//             return float - (float % 1) - 1;
//         }
//     }
// }
// console.log(Matem.floor(4.4));

// const Matem = {
//     ceil : function (float){
//         if (float == 0) {
//             return 0;
//         }
//         if (float > 0){
//             return float - (float % 1) + 1;
//         }else{
//             return float - (float % 1) - 1;
//         }
//     }
// }
// console.log(Matem.ceil(4.1));

// const Matem = {
//     round : function (float){
//         if (float == 0) {
//             return 0;
//         }
//         if (float > 0){
//             return float - (float % 1) ;
//         }else{
//             return float + (float % 1) ;
//         }
//     }
// }
// console.log(Matem.round(4.5));

// const users = [
//   { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
//   { id: 1, name: "Anvar", age: 25, job: "Dasturchi" },
//   { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
//   { id: 2, name: "Zilola", age: 22, job: "Dizayner" },
//   { id: 3, name: "Jasur", age: 30, job: "Menejer" },
//   { id: 3, name: "Jasur", age: 30, job: "Menejer" },
//   { id: 4, name: "Madina", age: 27, job: "Shifokor" },
//   { id: 4, name: "Madina", age: 27, job: "Shifokor" },
// ];

// const uniqueUsers = Array.from(
//   new Set(users.map((item) => JSON.stringify(item)))
// ).map((item) => JSON.parse(item));

// console.log(uniqueUsers);

