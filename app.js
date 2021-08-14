const mainc = require("./modules");

const yargs = require("yargs");

yargs.command({
  command: "addUser",
  descrie: "write user",
  builder: {
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    balance: {
      describe: "money",
      demandOption: true,
      type: "number",
    },
    status: {
      describe: "status",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    mainc.add(argv);
  },
});

yargs.command({
  command: "delUser",
  descrie: "delet user",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    mainc.removeUser(argv);
  },
});

yargs.command({
  command: "deposit",
  descrie: "deposit",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "number",
    },
    amount: {
      describe: "withdrawl",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    mainc.addBalance(argv);
  },
});

yargs.command({
  command: "decmoney",
  descrie: "decmoney",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "number",
    },
    amount: {
      describe: "dec",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    mainc.decBalance(argv);
  },
});

yargs.argv;
