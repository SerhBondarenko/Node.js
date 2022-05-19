const shortid = require('shortid');

const path = require("path");
const fs =require("fs/promises")

const contactsPath = path.resolve("./db/contacts.json");



const  listContacts=async() =>{
  const dataString=await fs.readFile(contactsPath, 'utf-8' )
const data=JSON.parse(dataString)
return data
  }

  const getContactById=async(contactId) =>{
    const allContacts = await listContacts();
    const contacts =allContacts.find(el => el.id == contactId);
   return contacts?contacts:null;
}
  
 const  removeContact  = async (contactId) =>  {
    const contacts = await listContacts();
    const FilteredContacts = contacts.filter(contact => contact.id !== contactId);
    const newContactsList = await fs.writeFile(contactsPath,  JSON.stringify(FilteredContacts));
    return newContactsList
  }
  
  const  addContact=async(name, email, phone) =>{
    const contacts = await listContacts();
    const newContact={id:shortid.generate(),name,email,phone}
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts
}

  module.exports={
    listContacts,
    getContactById,
    removeContact,
    addContact
}

