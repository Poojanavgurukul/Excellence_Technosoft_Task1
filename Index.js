// Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only
//function take an array and return even numbers
function evenNumber(array){
    const result=[];
    for ( var i=0;i<array.length;i++ ){
        if ( array[i]%2===0 ){
            result.push(array[i]);
        }
    }
    return result
}
console.log(evenNumber([1,2,4,6,8,9,10]),'even')
//Find the maximum consecutive 1's in an array of 0's and 1's.
// function take an array and it count the consecutive 1 in array of 1 and 0 
function maxConsecutive1(array){
  var count = 0;
  var  maxConsecutive = 0;
  for ( var i in array ){
      if ( array[i] === 1 ){
          count = count+1;
      }
      else{
          count = 0;
      }
      if ( count >maxConsecutive ){
          maxConsecutive = count
      }
  }
  return maxConsecutive;
}
console.log( maxConsecutive1([0,0,1,1,0,0,0,1,0,0,1,1,1,0]),'consecutive')
//function which find repeated number from sorted array
function repeatedNumber(array){
    const repeatedNumbers = []
    for(var i=0;i<array.length;i++){
        if( array[i+1] === array[i]){
            repeatedNumbers.push(array[i])
        }
    }
    return repeatedNumbers;
}

console.log(repeatedNumber([1,2,3,4,5,6,7,8,8,9,9]),'repeated numbers')   

var obj = [
    {
       id : 4,
       name:"abc"
    },

    {
         id : 10,
       name:"ab2"
    },

    {
         id : 5,
       name:"abc3"
    },
    
    {
    
         id : 6,
       name:"abc5"
    }
]
//for sorting array or object
console.log(obj.sort(function(userA, userB){
    return userA.id - userB.id;
}));