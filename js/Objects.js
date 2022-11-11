// 1)
const customer = {
  firstName: "Alexc",
  lastName: "Sich",
  email: "Alesov@gmail.com",
  password: "qwerty",
  telephone: "0123123",
  address: {
    city: "Zaporizhzhja",
    street: "Rustavi",
    house: 4,
    flat: 31,
  },
  getFullAddress() {
    return `city ${this.address.city} street ${this.address.street} house ${this.address.house} flat ${this.address.flat}`;
  },
  changeTelephone(newTelephone) {
    this.telephone = newTelephone;
  },
};
customer.isMale = true;
console.log(customer.getFullAddress());
delete customer.address;
customer.changeTelephone(0032323);
console.log(customer.telephone);

const customer1 = Object.assign({}, customer);
console.log("customer1 : ", customer1);

const customer2 = { ...customer };
console.log("customer2 : ", customer2);

// 2)
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDamage: true,
};
for (const key in cat) {
  console.log(`cat.${key} = ${cat[key]}`);
}

// 3)
function Book(fullName, Name, Year, Address, Price) {
  this.author = fullName;
  this.name = Name;
  this.year = Year;
  this.address = Address;
  this.price = Price;
  this.getAge = function () {
    return 2022 - this.year;
  };
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}
const Book1 = new Book(
  "Andre Kilka",
  "Cat`s Car",
  2000,
  "city: Werkasy  street: Kolomishi 3",
  200
);
console.log(Book1);
console.log(Book1.getAge());
Book1.changePrice(400);
console.log(Book1.price);
