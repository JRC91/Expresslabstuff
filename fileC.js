/*const dogs = 'I love dogs!';
const cats = 'I love cats!';

module.exports.dogs = dogs;
module.exports.cats = cats;
*/

/*const dogs = 'I love dogs!'
const cats = 'I love cats!'

module.exports = {
  dogs: dogs,
  cats: cats
}
*/
const dogs = 'I love dogs!'
const cats = 'I love cats!'

module.exports = dogs
module.exports = cats

var start = new Date;
setTimeout(function() {
  var end = new Date;
  console.log(end-start);}, 500);
  while(new Date - start <1000){};
