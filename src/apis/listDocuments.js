import { Query } from "appwrite";
import { databases } from "../apis/appWrite.js";
export async function listDocuments(
  dataBaseId,
  collectionId,
  columnName,
  value,
  getThisDetails
) {
  try {
    const response = await databases.listDocuments(dataBaseId, collectionId, [
      Query.equal(columnName, value),
    ]);
    const { documents } = response;
    console.log(documents, "documents");
    let details = {};
    for (let i = 0; i < getThisDetails.length; i++) {
      details[getThisDetails[i]] = JSON.parse(documents[0][getThisDetails[i]]);
    }
    return details;
  } catch (error) {
    console.error(error, "error");
  }
}
