module.exports = {
   mongooseToObject: function(mongoose) {
      return mongoose ? mongoose.ToObject():mongoose
   },

   multipleToObject: function(mongoose) {
      return mongoose.map(mongoose => mongoose.ToObject())
   }
}