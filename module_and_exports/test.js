// // works fine as this is not a ref.
// module.exports = {
//     say: () => console.log("said something")
// }

// // since exports is a ref, module.exports is still an empty object, 
// // only exports has got a new object ref.
// exports = {
//     say: () => console.log("said something or not")
// }

// this works, because we are only modifying the object, not assigning a new one
exports.say = () => console.log("said something anyway");