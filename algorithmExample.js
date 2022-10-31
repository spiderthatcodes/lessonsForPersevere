// STEP ONE: UNDERSTAND THE PROBLEM...READ THE INSTRUCTIONS, READ THE TEST CASES


function titleCase(str) {
    let newString =  str.toLowerCase().split(" ").map((item) => 
        item.replace(item.charAt(0), item.charAt(0).toUpperCase())
    )
    return newString.join(" ")
  }
  
  console.log(titleCase("I'm a little tea pot"));


//   titleCase("I'm a little tea pot") should return a string.
//   titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
//   titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
//   titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.