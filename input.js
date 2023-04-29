const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askCommand(callback) {
  var texts = [
    "#########################################################\n",
    "1.Add New Contact",
    "2.Display Total",
    "3.Search",
    "4.Display Favourites",
    "5.Exit",
    "6.Display contacts ",
    "Enter Command: ",
  ];

  read.question(texts.join("\n"), callback);
}

function askName(callback) {
  read.question("Enter Name: ", callback);
}
function askLastname(callback) {
  read.question("Enter Lastname: ", callback);
}
function askPhone(callback) {
  read.question("Enter phone number: ", callback);
}
function askIfFavourite(callback) {
  read.question("Is Contact Favourite (yes / no): ", callback);
}
function askSearch(callback) {
  read.question("Enter search text: ", callback);
}

module.exports = {
  askCommand,
  askName,
  askLastname,
  askPhone,
  askSearch,
  askIfFavourite,
};
