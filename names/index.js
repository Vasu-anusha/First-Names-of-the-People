const PeopleNames = require('../country/state/city/index')
const getFirstNames = require('../utilities/utils/index')
const getPeopleInCity = PeopleNames => {
  return getFirstNames(PeopleNames)
}
module.exports = getPeopleInCity
console.log(PeopleNames)
