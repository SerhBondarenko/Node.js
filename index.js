const {listContacts, getContactById,removeContact,addContact}=require('./contacts');

const argv = require("yargs").argv;

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
        const contactRemove= await removeContact(id)
        console.log(contactRemove)
        break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);