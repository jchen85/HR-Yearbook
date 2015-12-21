var StudentEntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'student-view-container',

  template: _.template('<h2><%= name %></h2><img src="<%= image %>" />'),

  events: {
    'click': 'clicked'
  },

  clicked: function() {
    this.router.navigate('cohort/' + this.cohort + '/' + this.model.get('id'), {trigger: true});
  },

  initialize: function(options) {
    this.router = options.router;
    this.cohort = options.cohort;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes))
    $('#students-view-container').append(this.$el);
  }
});