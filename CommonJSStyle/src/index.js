/*

account-business.js: -- getClientAccountsElement -- getAccountElement
client-business.js: -- getClientElement -- getClientNode -- getFullName
client-list-business.js: -- printClientsAccounts
data-business.js: -- getAccounts -- getClients
style-business.js: -- getNodeStyle

*/

const ClientListBusiness = require("./client-list-business");

function malditoWindowOnLoad() {
  ClientListBusiness.printClientsAccounts();
}

malditoWindowOnLoad();
