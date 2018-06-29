//var mode   = process.env.NODE_ENV;
//'a.b.etc'.split('.').reduce(index, obj);
/**
 * rightmost object wins
 * const person1 = { name: 'David Walsh', age: 33 };
const person2 = { name: 'David Walsh Jr.', role: 'kid' };

const merged = {...person1, ...person2}
 */

// var glob = require( 'glob' )
//   , path = require( 'path' );
//   const ROOT = path.resolve('./')
// const configDir = path.join(ROOT,'config/')
// glob.sync( `${configDir}**/*.yml` ).forEach( function( file, index ) {
//  // require( path.resolve( file ) )
// /*  global.test = file
//  log.info(global.test)
//  log.info(index) */
//  log.info(file)
// });
const config = require("config");
config.blah = 'cool'
console.log(config.get('Customer'));
module.exports = config;
