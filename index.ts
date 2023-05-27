// import { random } from "lodash";

export const handler = () => {
  return {
    "statusCode": "200",
    "body": JSON.stringify(Math.random() * 999),
  };
};
