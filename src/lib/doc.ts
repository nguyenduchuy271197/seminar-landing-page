import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
console.log(process.env.GOOGLE_PRIVATE_KEY);

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const doc = new GoogleSpreadsheet(
  "1vYS2iRX2O79AxUhZf44nK22KM93xXvXaMMyjh65HTk8",
  serviceAccountAuth
);
