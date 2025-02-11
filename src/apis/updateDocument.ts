import { databases } from "./appWrite";

export default async function updateDocument(
  dataBaseId: string,
  collectionId: string,
  documentId: string,
  selectKey: string,
  data: any
) {
  const document = await databases.updateDocument(
    dataBaseId,
    collectionId,
    documentId,
    {
      [selectKey]: JSON.stringify(data),
    }
  );
  return document;
}
