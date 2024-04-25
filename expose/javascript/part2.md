1. 3 will be printed out to the terminal since that is the value of i upon termination of the loop. i is accessible outside the loop as well since it is a  var and has function scope.
   
2. 150 will be printed out since that is the value of discountedPrice in the final iteration. Although declared inside the for loop, it is accessible outside since it has funtion scope (because it is a var).

3. 150 will be printed since that is what finalPrice is assigned in the last iteration of the loop round(150 * 100) / 100 = 150

4. The for loop iterates over the prices array and applies a discount of 0.5 or 50% to each element in this case. It also rounds the discountedPrice.

Output = [50, 100, 150]

5. ERROR! The scope of `i` is limited to the for loop so we can not access it outside

6. ERROR! The scope of `discountedPrice` is the block scope and can only be referenced in the for loop.

7. 150 would be printed. `finalPrice` is in the same block scope and holds the rounded discounted price for the last elelement processed in the loop.

8.  The for loop iterates over the prices array and applies a discount of 0.5 or 50% to each element in this case. It also rounds the discountedPrice. Further, there is no error since each variable has a block scope and is used only within that scope.

Output = [50, 100, 150]

9. There would be an error. This is because i is not defined in that scope since it is declared using `let`

10. The output woudld be 3, which is the length of the `prices` array. Also, the `length` is defined in the same block scope.

11. The function returns [50, 100, 150]. This is because we iterate over each element of the `prices` array and push `discountedPrice` into the `discounted` array. All variable access are legal, keeping in mind the scope of the variables.

12.

```js
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log("Hello!");},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41'] 
}


console.log(student.name) // A
console.log(student['Grad Year']) // B
student.greeting() // C
console.log(student['Favorite Teacher'].name) // D
console.log(student.courseLoad[0])
```

Output:
```
Sarah
2022
Hello!
Thomas Powell
CSE 110
```

13.

A. '32'
B. 1
C. 3
D.' 3null'
E. 4
F. 0
G. '3undefined'
H. NaN

14.

A. true
B. false
C. true
D. false
E. false
F. true

15. `==` is used for a non-strict equality check while `===` is used for a strict equality check. In other words, `===` checks for equality without carrying out type conversion.