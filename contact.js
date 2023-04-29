class Contact {
    constructor(name, lastname, phone, isFavourite) {
        this._name = name
        this._lastname = lastname
        this._phone = phone
        this._isFavourite = isFavourite
    }

    get name() {
        return this._name
    }

    get lastname() {
        return this._lastname
    }

    get phone() {
        return this._phone
    }

    get isFavourite() {
        return this._isFavourite
    }
}

module.exports = Contact