// Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only
//function take an array and return even numbers array
function evenNumber(array){
    const result=[];
    for (var i=0;i<array.length;i++){
        if (array[i]%2===0){
            result.push(array[i]);
        }
    }
    return result
}
console.log(evenNumber([1,3,1,3,1,3]))
