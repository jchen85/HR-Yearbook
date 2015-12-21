var StudentsView = Backbone.View.extend({

  tagName: 'div',

  id: 'students-view-container',

  initialize: function(options) {
    this.collection.on('sync', this.render.bind(this, options), this);
    this.render(options);
  },

  render: function(options) {
    $('#page-content-container').append(this.$el);
    this.collection.each(function(student) {
      if (student.get('name') !== '') {
        new StudentEntryView({model: new Student(student.attributes), router: options.router, cohort: options.cohort});
      }
    })
  }

})