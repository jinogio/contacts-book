// ტელეპონების წიგნი
// სადაც შევიყვანთ სახელს გვარს და ტელეფონის ნომერს
// კონტაქტების რაოდენობა
// კონტატების ძებნა

// PlAN

// +1. გვინდა კლასი რომელიც აღწერს კონტაქტს, მახასიათებლებით: სახელი, გვარი, ტელეფონის ნომერი
// +2. გვინდა კლასი რომელიც შეინახავს კონტაქტებს, დაგვიბრუნებს რაოდენობას და გააკეთებს ძებნას
// +3. გვინდა მოდული რომელშიც იქნება ყველა კითხვა

const PhoneBook = require("./phonebook");
const Input = require("./input");
const phonebook = new PhoneBook();
function addContact(callback) {
  console.log("Adding new contact to phonebook");

  Input.askName((name) => {
    Input.askLastname((lastname) => {
      Input.askPhone((phone) => {
        Input.askIfFavourite((isFavourite) => {
          phonebook.addContact(name, lastname, phone, isFavourite === "yes");

          console.log("You successfully saved", name, "to your phonebook");
          callback();
        });
      });
    });
  });
}

function displayTotal(callback) {
  console.log("You have", phonebook.getTotal(), "contacts in your phonebook");
  callback();
}

function displayContactsInfo(callback) {
  var contacts = phonebook.getFavourites();

  if (contacts.length === 0) {
    console.log("you dont have a contacts in book");
  } else {
    //   console.log("Favourite contacts: ");
    contacts.forEach((contact) => {
      console.log(contact.name, contact.lastname, contact.phone);
    });
  }
  callback();
}

function searchContacts(callback) {
  console.log("Searching contacts in your phonebook");
  Input.askSearch((text) => {
    var contacts = phonebook.search(text);
    if (contacts.length === 0) {
      console.log("Nothing found with", text);
    } else {
      contacts.forEach((contact) => {
        console.log(contact.name, contact.lastname, contact.phone);
      });
    }
    callback();
  });
}

function displayFavourites(callback) {
  var contacts = phonebook.getFavourites();

  if (contacts.length === 0) {
    console.log("Nothing found as favourites");
  } else {
    console.log("Favourite contacts: ");
    contacts.forEach((contact) => {
      console.log(contact.name, contact.lastname, contact.phone);
    });
  }
  callback();
}

function handleCommand(command) {
  switch (command) {
    case "1":
      addContact(start);
      break;
    case "2":
      displayTotal(start);
      break;
    case "3":
      searchContacts(start);
      break;
    case "4":
      displayFavourites(start);
      break;
    case "5":
    case "6":
      displayContactsInfo(start);
      break;
      process.exit(0);
      break;
    default:
      console.log("Unknown Command");
      start();
      break;
  }
}
function start() {
  Input.askCommand(handleCommand);
}
start();
