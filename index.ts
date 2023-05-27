import * as _ from "lodash";
import { User } from "./controllers/user";

export const handler = async () => {
  console.log("hello world");
  console.log("Name ivan");

  return {
    statusCode: "200",
    body: JSON.stringify(_.random(999) + " " + "Romeo" + " " + User()),
  };
};

// tsc -b
// mv index.js dist
