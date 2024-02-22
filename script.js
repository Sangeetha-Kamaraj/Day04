//Anonymous Odd Numbers
let array=[1,2,3,4,5,6,7,8,9,10]
	OddNumbers=function()
	{
	 let OddNumbers=array.filter(num=>num%2===1)
	 console.log(OddNumbers);
	}
	OddNumbers()
//IIFE Odd Numbers
let array=[1,2,3,4,5,6,7,8,9,10]
	(function()
    
	{
	  let OddNumbers=array.filter(num=>num%2===1)
	  return OddNumbers;
	})()
//Arrow Odd Numbers
let array=[1,2,3,4,5,6,7,8,9,10]
	let OddNumbers=array.filter(num=>num%2===1)
	 console.log(OddNumbers)
//Anonymous String title Caps
let string="hello am new to this progarmming"
let Stringcase=	function () 
{
                    let Stringcase = string.split(" ");
                    for (var i = 0; i < Stringcase.length; i++) 
                    {
                      Stringcase[i] = Stringcase[i][0].toUpperCase() + Stringcase[i].substr(1); 
} 
console.log(Stringcase.join(" "));
}
return Stringcase()	
//IIFE String title Caps
(function (string) 
{
                    let String= string.split(" ");
                    for (var i = 0; i < String.length; i++) 
                    {
                      String[i] = String[i][0].toUpperCase() + String[i].substr(1); 
} 
console.log(String.join(" "));
})("hello am new to this progarmming")
//Arrow String title caps
let string="hello am new to this progarmming"
 let String= string.split(" ");
for (var i = 0; i < String.length; i++) 
                    {
                      String[i] = String[i][0].toUpperCase() + String[i].substr(1); 
} 
console.log(String.join(" "));
// Sum of all numbers in an array-Annonymous
array=[1,2,3,4,5,6,7,8,9,10]
let Sum=function()
{
 let ans=0
 for (let i = 0; i < array.length; i++ ) {
ans += array[i];
}

console.log(ans)
}
return Sum();
//IIFE
(function(array)
{
	 let ans=0
	 for (let i = 0; i < array.length; i++ ) 
{
  ans += array[i];
}
console.log(ans)
})([1,2,3,4,5,6,7,8,9,10]);
//Arrow
=[1,2,3,4,5,6,7,8,9,10]
let Sum=()=>
{
 let ans=0
 for (let i = 0; i < array.length; i++ ) {
ans += array[i];
}

console.log(ans)
}
return Sum();
//Prime Numbers-Annonymos
let prime=function(arr){
    return arr.filter(function(n)
    {
    
      for (var i = 2; i < n; i++) 
      {
        if (n % i === 0) return false;
      }
      return n>1;
    });
    
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))
//IIFE
(function(){
    let prime=[1,2,3,4,5,6,7,8,9,10]
                      prime=prime.filter(function(num){
                        for (var i = 2; i <=Math.sqrt(num); i++) 
                        {
                          if (num % i === 0) return false;
                        }
                        return true;
                      });
                   console.log(prime)   
                  })()
//Arrow
let prime=(arr)=>{
    return arr.filter(function(n)
    {
    
      for (var i = 2; i < n; i++) 
      {
        if (n % i === 0) return false;
      }
      return n>1;
    });
    
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))
//Return all the palindromes in an array-Annonymous
let isPalindrome = function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()                  

//IIFE
(function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
//Arrow

let isPalindrome =  ()=> {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome() 

  //median Annonymous

  let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));
  
  
  //IIFE :
  ( function() {
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })()
  
  
  
  // Remove duplicates from an 
  
  //Anonymous :
  
  let findDuplicates = function () {
    
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates()
  
  
  
  //IIFE :
  
  
  (function () {
    
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
  })()
  
  //h.Rotate array
  
  //Anonymous :
  
  
  let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  }
  rotateArray([1,2,3,4,5],2)
  
  
  //IIFE :
  
  (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
  


