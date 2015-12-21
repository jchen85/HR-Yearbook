var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
    }.bind(this));

    options.router.on('route:cohortLanding', function(cohort) {
      this.renderCohort(cohort, options.router);
    }.bind(this));

    options.router.on('route:studentLanding', function() {
      console.log(arguments);
    }.bind(this));
  },

  renderCohort: function(cohort, router) {
    $('.student-view-container').remove();
    new StudentsView({collection: new Students({cohort: cohort}), router: router, cohort: cohort});
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());   
  }
})