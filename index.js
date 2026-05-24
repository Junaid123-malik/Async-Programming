// async function  getdata() {
//     return new Promise( (resolve,reject) => {
//       setTimeout(() => {
//         resolve (455)
//       },3500);
//     })}
//   async function  getdata() {
//   let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let data=await x.json()
//     console.log(data);
//     return 455
    
//     }
//      async function  getdata() {
//   let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//      let data=await x.json()
//     return data;
    
// }
// Source - https://stackoverflow.com/a
// Posted by Razor, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-07, License - CC BY-SA 4.0

async function getdata () {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const data = await rawResponse.json();

  return data;
};
    async function main() {
    console.log('Loading modules');
    console.log('Do something else');
    console.log('Load data');
   let data = await getdata()
    console.log(data);
    console.log('process data')}
    main()
//    data.then ((v) => {
// console.log
// (data);
//     console.log('process data');})
    
    
    
    
