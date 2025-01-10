import { colors } from "@mui/material";
import { Client, Databases, ID } from "appwrite";
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("676a1d49003bb5132d38");

const databases = new Databases(client);

const promise = databases.updateDocument(
  "676a1ec4001bf5b712d9", //dabase id
  "676a1ee4001ae452e2df", // collectoin id
  "676cc1a7001c009ca249",
  {
    CategoryType: "Kids",
    colors: JSON.stringify([
      {
        filterName:
          "<div className='flex items-center gap-3'> <div className='w-[10px] h-[10px] border rounded-full bg-[red]'></div> <p>Red</p></div>",
        type: "Colors",
      },
      {
        filterName:
          "<div className='flex items-center gap-3'> <div className='w-[10px] h-[10px] border rounded-full bg-[blue]'></div> <p>blue</p></div>",
        type: "Colors",
      },
      {
        filterName:
          "<div className='flex items-center gap-3'> <div className='w-[10px] h-[10px] border rounded-full bg-[green]'></div> <p>green</p></div>",
        type: "Colors",
      },
      {
        filterName:
          "<div className='flex items-center gap-3'> <div className='w-[10px] h-[10px] border rounded-full bg-[black]'></div> <p>black</p></div>",
        type: "Colors",
      },
      {
        filterName:
          "<div className='flex items-center gap-3'> <div className='w-[10px] h-[10px] border rounded-full bg-[white]'></div> <p>white</p></div>",
        type: "Colors",
      },
    ]),
  }
);

export { client, databases };

// databases
//   .getDocument(
//     "676a1ec4001bf5b712d9",
//     "676a1ee4001ae452e2df",
//     "676cc1a7001c009ca249"
//   )
//   .then((response) => {
//     console.log(
//       "Documents:",
//       response.brands,
//       typeof response.brands,
//       JSON.parse(response.brands)[0].filterName
//     );
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
