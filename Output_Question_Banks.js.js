
Q1. console.log(1 + “1”) // 11

Q2. console.log(0.1 + 0.2); // 0.3

Q3. console.log(0.1 + 0.2 == 0.3); // false

Q4. console.log(false == '0') // true

Q5. console.log(false === '0') // false

Q6. for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // after 1ms it will print 3,3,3
  }, 1000);
}

Q7. (function immediateA(a) {
      return (function immediateB(b) {
        console.log(a); // 0
      })(1);
    })(0);


Q8. const objA = {
      cityName :”Delhi”
      }

    const objB = {
      cityName :”Delhi”
    }
  console.log(objA == objB) // false

Q9. console.log(3+3+"7") //67

Q10. console.log("7"+3+3) // 733

Q11. console.log(3 == "3") // true

Q12. console.log(null === undefined) // false 

Q13. console.log(1 + +"1") // 2 bcz +”1” evaluates to 1 as a numerical value.

Q14. console.log(1-"1") // 0 ,bcz -“1” converted as a numeric 1. 

Q15. console.log(1<2<3) // 1<2 = true -> true<3 = true bcz in JS true=1,

Q16. console.log(3>2>1) //   false=0 and Js checks from Left to right. 

Q17. var a1=5;
    console.log(a1++) // 5, first it will print
    console.log(a1) //6, after print, increment will happen.


