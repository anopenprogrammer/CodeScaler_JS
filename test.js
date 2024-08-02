let numbers = [1,2,3,4,5,6,7,8,9,10];

// // for(number of numbers){
// //   if(number%2==0){
// //     console.log(number);
// //   }
// // }

// const even_numbers = numbers.forEach((number)=>{
//   return number%2==0;
// })

// console.log(even_numbers);
// console.log(numbers); // In for each you will always modify the existing array


// const even_number = numbers.map((number)=>{
//   return number%2==0;
// })

// console.log(even_number);
// console.log(numbers); // In map fn there is no impact on actual array (No modification in original array)

const even_numbers = numbers.filter((num)=>{
  return (
      num%2==0
)
})
console.log(numbers);

console.log(even_numbers);

// Map: It transform each element in the array 
// Filter: Select the elements on the basis of condition