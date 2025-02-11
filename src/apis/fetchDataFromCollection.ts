import { databases } from "./appWrite";
import { Query } from "appwrite";
export default async function fetchDataFromCollection(
  dataBaseId: string,
  collectionId: string,
  documentId: string,
  queryKey: string,
  selectKey: string
) {
  const document = await databases.listDocuments(
    dataBaseId,
    collectionId,
    [Query.equal(queryKey, documentId)]
  );
  const data = document.documents[0][selectKey];

  return JSON.parse(data);
}
