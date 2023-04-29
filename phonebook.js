const Contact = require("./contact");

class PhoneBook {
  constructor() {
    this._contacts = [];
  }

  addContact(name, lastname, phone, isFavourite) {
    this._contacts.push(new Contact(name, lastname, phone, isFavourite));
  }

  showContact() {
    return this._contacts;
  }

  getTotal() {
    return this._contacts.length;
  }

  search(text) {
    return this._contacts.filter((contact) => {
      return contact.name.includes(text) || contact.lastname.includes(text);
    });
  }

  getFavourites() {
    return this._contacts.filter((contact) => contact.isFavourite);
  }
}

module.exports = PhoneBook;
