<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> The correct answer is "C: undefined". Because at first declare a variable name "greeting" with out value. in the 2n line mistakenly wrote "greetign" as the variable name. That why the value is not set in the variable. So, when console log "greeting", it show "undefined". </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The correct answer is ' C: "12" '. Because "2" is a string. when javaScript try to add it to the number 1. the 1 and 2 will sit side by side with out Mathematical adding.so, The result of 1 + "2" is "12" as a string. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The correct answer is 'A: ['🍕', '🍫', '🥑', '🍔']'. At frist give an array Called "food". after that the code updates the info.favoriteFood property to "🍝". this update does not affect the original food array. So, when you console log "food" at the end, it will still display the original food array, which is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The correct answer is 'B: Hi there, undefined'. when call a function with parameters, it need arguments.  the sayHi function expects one argument, which is name. so, when console log sayHi without providing any argument it return "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The correct answer is 'C: 3'. becouse, the "forEach" method iterates through each element in the "nums" array. For each element num, the code checks if num is truthy. If num is truthy, it increments the count variable by 1. but the 0 is falsey value. so, the result is 3.</i>

</p>
</details>
