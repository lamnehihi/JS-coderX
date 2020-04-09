/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
var axios = require('axios');
var co = require('co');
function getvalue(url) {
  return new axios.get(url);
} 
// Cách 1: Sử dụng vòng lặp for
// for(url of urls){
//   getvalue(url)
//   .then(function(body) {
//     console.log(body.data);
//   })
// }
// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var getLinks = co.wrap(function*(urls) {
  var values = yield urls.map(function(url) {
    return getvalue(url);
  });
  return values;
});

getLinks([urls])
.then(function(value) {
  console.log(value.data);
})
.catch(function(err) {
  console.log(err);
});