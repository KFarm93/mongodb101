// db.languages.find({});
//
// var language = {
//   language: 'Python',
//   inventors: ['Guido van Rossum'],
//   first_appeared: 1991,
//   paradigms: ['object-oriented', 'imperative', 'functional', 'procedural', 'reflective'],
//   typing_discipline: ['duck', 'dynamic', 'strong', 'gradual']
// };
//
// db.languages.insert(language);
//
// var language = {
//   language: 'JavaScript',
//   inventors: ['Brandon Eich'],
//   first_appeared: 1995,
//   paradigms: ['scripting', 'object-oriented(prototype-based)', 'imperative', 'functional', 'event-driven'],
//   typing_discipline: ['duck', 'dynamic']
// };
//
// db.languages.insert(language);
//
// var language = {
//   language: 'Java',
//   inventors: ['James Gosling'],
//   first_appeared: 1995,
//   paradigms: ['object-oriented(class-based)', 'structured', 'imperative', 'generic', 'reflective', 'concurrent'],
//   typing_discipline: ['static', 'strong', 'safe', 'nominative', 'manifest']
// };
//
// db.languages.insert(language);
//
// var language = {
//   language: 'Haskell',
//   inventors: ['Simon Peyton Jones']
// };
//
// db.languages.insert(language);
//
// var language = {
//   language: 'Closure',
//   inventors: ['Rich Hickey'],
//   paradigms: ['functional'],
//   typing_discipline: ['dynamic', 'strong']
// };
//
// db.languages.insert(language);
// db.languages.find({
//     _id: ObjectId("584ecc1bb1213a1a4b42b28f")
// })
//
// db.languages.find({
//     paradigms: /object-oriented.*/i
// })

// db.languages.find({
//     paradigms: 'functional'
// })

// db.languages.find({
//     typing_discipline: 'duck'
// })

// db.languages.find({
//     typing_discipline: 'static'
// })

// db.languages.find({
//     typing_discipline: 'strong'
// })

// db.languages.find({
//     first_appeared: { $lt: 2006 }
// })

// db.languages.find({
//     $and: [
//       {
//          first_appeared: { $lte : 1999 }
//       },
//       {
//       first_appeared: { $gte: 1990 }
//     }
//   ]
// })
//

// db.languages.find({
//     $and: [
//     {
//         typing_discipline: 'duck',
//     },
//     {
//         paradigms: /object-oriented.*/i
//     }
//   ]
// })

// db.languages.find({
//     $and: [
//     {
//         paradigms: /object-oriented.*/i,
//     },
//     {
//         paradigms: 'functional'
//     }
//   ]
// })

// var fieldsToModify = {
//   inventors: ['Lennart Augustsson', 'Dave Barton', 'Brian Boutel', 'Warren Burton', 'Joseph Fasel', 'Kevin Hammond', 'Ralf Hinze', 'Paul Hudak', 'John Hughes', 'Thomas Johnsson', 'Mark Jones', 'Simon Peyton Jones', 'John Launchbury', 'Erik Meijer', 'John Peterson', 'Alastair Reid', 'Colin Runciman', 'Philip Wadler'],
//   paradigms: ['functional', 'imperative', 'lazy/non-strict', 'modular'],
//   typing_discipline: ['static', 'strong', 'inferred']
// };
//
// db.languages.update({
//   _id : ObjectId("584ecf9fb1213a1a4b42b292"),
// }, {
//   $set: fieldsToModify
// });

// var fieldsToModify = {
//   inventors: ['Brendan Eich']
// };
//
// db.languages.update({
//   _id : ObjectId("584ece9ab1213a1a4b42b290")
// }, {
//   $set: fieldsToModify
// });

// var fieldsToModify = {
//   language: 'Clojure'
// };
// 
// db.languages.update({
//   _id : ObjectId("584ed0c2b1213a1a4b42b293"),
// }, {
//   $set: fieldsToModify
// });

// var fieldsToSet = {
//     language: 'Elm',
//     inventors: ['Evan Czaplicki'],
//     first_appeared: 2012,
//     typing_discipline: ['static', 'strong', 'inferred']
// };
//
// db.languages.update({
//     language: 'Elm',
// }, {
//     $set: fieldsToSet
// }, {
//     upsert: true
// });
