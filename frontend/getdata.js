//syntax: $.getJSON(url, [data], [callback]);
//AJAX library
// const b1 = document.getElementById("b1");
// b1.addEventListener("click", getFromServer);

// console.log("Hello");

let a = 10;
let b = 5;

let c = a + b;
// c will be 15

// let first = "Jeremy";
// let last = "Leow";

// let name = first + last; // DixantMittal

// $(".mypanel").html("Hello there!")

//console.log("Hello" + name);

/*
let age = 19;

if (age >= 18) {
  $(".mypanel").html("Congratulations, you are eligible to vote!");
} else {
  $(".mypanel").html("Sorry, please try again next time");
}
*/

let names = ["Dixant", "Jon", "Keith"];

let details = {
  first_name: "Dixant",
  last_name: "Mittal",
};

let users = [
  {
    first_name: "Dixant",
    last_name: "Mittal",
  },
  {
    first_name: "Jon",
    last_name: "Scheele",
  },
];

// $(".mypanel").html("Hello, " + names[0]);
// $(".mypanel").html("Hello, " + details.last_name);
// $(".mypanel").html("Hello, " + users[0].last_name);

// let all_names = "";

// names.forEach((data) => {
//   all_names = all_names + " " + data;
// });

// for (i = 0; i < names.length; i++) {
//     all_names = all_names + " " + names[i];
// }

// $(".mypanel").html(all_names);

// let code = "<ul>";

// names.forEach((name) => {
//   code = code + "<li>" + name + "</li>";
// });
// code = code + "</ul>";

// $(".mypanel").html(code);

let code = "<ul>";
users.forEach((user) => {
  code += `<li> First Name: ${user.first_name} | Last Name: ${user.last_name} </li>`;
});
code += "</ul>";

$(".mypanel").html(code);
