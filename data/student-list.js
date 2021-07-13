export { 
	find
}
const studemt = [
  {text: 'Guy McGuy'},
  {text: 'Steven Stephson'},
  {text: 'Royal Billy'},
]
const find = (conditions, callback) => {
 
  try {
  
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }

    if (Object.keys(conditions).length === 0) return callback(null, studemt)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}