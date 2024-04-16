module.exports = {
    async beforeCreate(event) {
      const {data} = event.params
      data.creation_date = new Date();
    }
  }