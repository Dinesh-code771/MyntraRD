import { Query } from "appwrite";
import { databases } from "../apis/appWrite.js";
export async function insertDataIntoDocument(
  data,
  dataBaseId,
  collectionId,
  columnName,
  value
) {
  try {
    //getting document using col name and val
    const queryResponse = await databases.listDocuments(
      dataBaseId,
      collectionId,
      [Query.equal(columnName, value)]
    );

    if (queryResponse.documents.length === 0) {
      console.log("No documents found matching the query.");
      return;
    }

    // using documemnt id  we are updating the value
    const documentId = queryResponse.documents[0].$id;
    const response = await databases.updateDocument(
      dataBaseId,
      collectionId,
      documentId,
      {
        selectedFilters: data,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
