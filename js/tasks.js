'use strict';
import { default as users } from './users.js';

// Задача 1======================================
const getUserNames = users => {
  return users.map(({ name }) => name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задача 2======================================
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задача 3======================================
// const getUsersWithGender = (users, gender) => {
//   return users.filter(({ gender: userGender }) => userGender === gender).map(({ name }) => name);
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задача 4======================================
// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => !isActive);
// };
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задача 5======================================
// const getUserWithEmail = (users, email) => {
//   return users.find(({ email: userEmail }) => userEmail === email);
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Задача 6======================================
// const getUsersWithAge = (users, min, max) => {
//   return users.filter(({ age }) => age >= min && age <= max);
// };
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задача 7======================================
// const calculateTotalBalance = users => {
//   return users.reduce((acc, { balance }) => acc + balance, 0);
// };
// console.log(calculateTotalBalance(users)); // 20916

// Задача 8======================================
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);
// };
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задача 9======================================
// const sortByFriendsNumber = (a, b) => a.friends.length - b.friends.length;
// const getNamesSortedByFriendsCount = users => {
//   return [...users].sort(sortByFriendsNumber).map(({ name }) => name);
// };
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задача 10======================================
// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
//     .filter((value, index, newArr) => newArr.indexOf(value) === index)
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
