const {listContacts, getContactById,removeContact,addContact}=require('./contacts');

const argv = require("yargs").argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone })=> {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts)
      break;

    case "get":
     const getContact =  await getContactById(id);
     console.log(getContact)
      break;

    case "add":
      const contactAdd= await addContact(name, phone,email)
      console.log(contactAdd)
      break;

    case "remove":
     const removeContacts = await removeContact(id);
     console.log(removeContacts)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);