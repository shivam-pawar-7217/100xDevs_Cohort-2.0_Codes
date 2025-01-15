"use strict";
;
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: 'Taro', age: 20 }, { name: 'Jiro', age: 25 });
console.log(age);
