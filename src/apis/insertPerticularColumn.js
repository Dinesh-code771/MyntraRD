import { Query } from "appwrite";
import { databases } from "../apis/appWrite.js";
export async function insetPerticularColumn(
  data,
  dataBaseId,
  collectionId,
  columnName,
  value,
  key
) {
  try {
    console.log("Called", columnName, value, key, data);
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

    function checkAndInsert(array, value) {
      if (array.includes(value)) {
        return array.filter((val) => val != value);
      } else {
        return [...array, value];
      }
    }

    // using documemnt id  we are updating the value
    const documentId = queryResponse.documents[0].$id;
    console.log(queryResponse.documents[0], "document");
    const particularColumn = JSON.parse(queryResponse.documents[0][key]).map(
      (value, index) => {
        if (index === data.index) {
          return {
            ...value,
            selectedValues: checkAndInsert(value.selectedValues, data.value),
          };
        } else {
          return value;
        }
      }
    );
    console.log(particularColumn, "particularColumn");
    const response = await databases.updateDocument(
      dataBaseId,
      collectionId,
      documentId,
      {
        [key]: JSON.stringify(particularColumn),
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
