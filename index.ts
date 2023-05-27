
export const handler = async () => {
  console.log('hello world');
  console.log('Name ivan');

  return {
    statusCode: "200",
    body: JSON.stringify(Math.random() * 999  + 'Romeo'),
  };
};


// tsc index.ts
// mv index.js dist
