class FamilyTree {
  constructor (value) {
      if (value === undefined || typeof value !== 'string') {
        throw 'error'
      } 
      return this.value = value
  }
}

module.exports = FamilyTree;
