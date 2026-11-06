//String-collection of characters
// let  names="HaRsHiNi"
// console.log(names.length)//property
// //! in build string methods:->
// console.log(names.toUpperCase()) //-->toUpperCase
// console.log(names.toLowerCase())  //->tolowercase
// console.log(names[4])
// console.log(names.replace('a','z'))
// console.log(names)

// // console.log(names.replaceAll('HaRsHiNi','KS')) //replaceAll
// console.log(names.split('s'))  //split

// console.log(names.indexOf('i')) //index  will fetch the particular index of an element.
// console.log(names.indexOf('i',4))
// console.log(names.indexOf('i',6))
//  console.log(names.charAt(7))
//  console.log(names.includes("HiNi"))
// console.log(names.slice)
// //  let movie='daddy'-->doubt
// //  console.log(movie.indexOf('d',3))

// console.log(names.slice(0,-2))
// console.log(names.substring(1,-5)) //no output beccause negative index will not work for
// console.log(names.startsWith('H'))
// console.log(names.endsWith('i'))

//  let trimm ="   Harshini      "
//  console.log(trimm)
//  console.log(trimm.trim())


//  let   namess="HaRsHiNiuii"
//   console.log(namess.indexOf('i'))
//    console.log(namess.indexOf('i',8))
//  //console.log(namess.indexOf('i',2``))


// let task ="JavaScript is My Primary Language"
// console.log(task.split('a'));
// console.log(task.indexOf('a'))

//slice(starting index,ending index)
//if we din't mention the end index it will cut complete part from the starting index.
let str="HarshiniKS"
let b=str.slice(8)
console.log(b)
let a="AppleOrange"
let b1=a.slice(0,5)
console.log(b1)

//Split("seperator",max split)
let c="Delulu"
let d=c.split("l")
console.log(d)
let e="My name is Harshini"
console.log(e.split(" "))// can directly write it inside a log statement or u can store it another variable and log it.

//trim is used to remove white space from both the ends.
let e1="  DELULU "
console.log(e1.trim())
//replace is used to replace it with another char.

  //!replace
  //chat with another char at only first occurance.
  let a1="DELULU"
 console.log(a1.replace("D","Z"))

 //!replaceall-replace char at any occurance.
console.log(a1.replaceAll("L","Z"))


//we can replace all the occurance of particular charater by using replace method also by using forward slash.
let c1="Manual Testing is Manual Testing Manual Manual Manual Manual Manual Manual"
console.log(c1.replace(/M/g,"m"))//g referce to global declaration.
console.log(c1.replaceAll(" ",""))
console.log(c1.replace(/\s/g,""))//removes all the spaces.

//! concat
let b2="Manual"
let cc1="Testing"
let d1="topic"
console.log(b2.concat(" ", cc1," ", d1))

//! includes-(method) String.includes(searchString: string, position?: number | undefined): boolean)
let h="Shampooooooooo"
console.log(h.includes("S"))

//! chatAt
console.log(h.charAt(6))

//! indexOf()
console.log(h.indexOf("o"))
//lastIndexof()
console.log(h.lastIndexOf("o"))
console.log(h.startsWith("S"))
console.log(h.endsWith("o"))