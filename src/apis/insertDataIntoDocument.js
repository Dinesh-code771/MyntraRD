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
    const queryResponse = await databases.listDocuments(
      dataBaseId,
      collectionId,
      [Query.equal(columnName, value)]
    );

    if (queryResponse.documents.length === 0) {
      console.log("No documents found matching the query.");
      return;
    }
    const documentId = queryResponse.documents[0].$id;
    const response = await databases.updateDocument(
      dataBaseId,
      collectionId,
      documentId,
      {
        selectedFilters: data,
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
