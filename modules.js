const fs = require("fs");

let read = null;

const readFromJson = function () {
  try {
    read = JSON.parse(fs.readFileSync("jsondata.json"));
  } catch (e) {
    read = [];
  }
  return read;
};

// add new user
////////////////////////////////////////////

const addUser = function (name, balance,status) {
  // this.name = name;
  // this.balance = balance;
  // this.status = status;
  let id = new Date();

  const fake = {
    id: id.getTime(),
    name: name,
    balance: balance,
    status: status
  };
  // console.log(fake)
  return fake;
};

const add = function (a, b, c) {
  const write = readFromJson();
  const fake1 = addUser(a, b, c);
  write.push(fake1);

  writeToJson(write);
};

const writeToJson = function (entry) {
  fs.writeFileSync("jsondata.json", JSON.stringify(entry));
};
//call add
//add("m",10,false)

//add balance
/////////////////////////////////////////////////////////////////

const addBalance = function (id, withdrawl) {
  const costumers = readFromJson();
  if (withdrawl > 1000) {
    console.log("max exceeded");
  } else {
    costumers.forEach((costumer) => {
      if (costumer.id == id) {
        let i = +costumer.balance;
        let sum = i + withdrawl;
        costumer.balance = sum;
        writeToJson(costumers);
      }
    });
  }
};
//call addBalance
//addBalance(1628894275193,1000)

//decrease balance
////////////////////////////////////////////////////////////////
const decBalance = function (id, dec) {
  const costumers = readFromJson();
  if (dec > 5000) {
    console.log("max exceeded");
  } else {
    costumers.forEach((costumer) => {
      if (costumer.id == id) {
        costumer.balance -= dec;
        if (costumer.balance <= 0) {
          console.log("balance is'nt enough");
        } else {
          writeToJson(costumers);
        }
      }
    });
  }
};

//call decBalance
//decBalance(1628894276858,5)

// remove user
////////////////////////////////////////////
const removeUser = function (id) {
  const costumers = readFromJson();
  let index = costumers.findIndex((x) => x.id === id);
  costumers.splice(index, 1);
  writeToJson(costumers);
};

// call remove user
//removeUser(9);

module.exports = {
  add,
  removeUser,
  addBalance,
  decBalance
};
