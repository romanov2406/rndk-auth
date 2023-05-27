import * as _ from 'lodash'


export const handler = async () => {
  console.log('hello world');
  console.log('Name ivan');

  return {
    statusCode: "200",
    body: JSON.stringify(_.random(999)  + ' ' + 'Romeo'),
  };
};


// tsc -b
// mv index.js dist
