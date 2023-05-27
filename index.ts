
export const handler = async () => {
  return {
    statusCode: "200",
    body: JSON.stringify(Math.random() * 999  + 'Romeo'),
  };
};


// tsc index.ts
// mv index.js dist
