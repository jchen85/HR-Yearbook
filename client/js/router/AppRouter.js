// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'landing',
    'cohort/:cohortNumber': 'cohortLanding',
    'cohort/:cohortNumber/:id': 'studentLanding'
  },

});