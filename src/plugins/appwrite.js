import { Client, Databases, Account, Query } from 'appwrite';
// Init your Web SDK
const client  = new Client();
client 
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace this with your endpoint
  .setProject('6568415f59803a8e3a6b'); // Replace this with your ProjectID

// appwrite.account.createAnonymousSession().then(
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// export const account = new Account(client);
export const databases = new Databases(client);
export const DATABASE_ID = '656841b4bb3fcf8aed93'; // Replace with your Collection ID
export const COLLECTION_ID = '656841d8236e4cc3c1c2'; // Replace with your Collection ID
// export Query;

// export const db = appwrite.database;
// export const COLLECTION_ID = '656841d8236e4cc3c1c2'; // Replace with your Collection ID