module.exports = {
   mongooseToObject: function(mongoose) {
      return mongoose ? mongoose.toObject():mongoose
   },

   multipleToObject: function(mongoose) {
      return mongoose.map(mongoose => mongoose.toObject())
   }
}