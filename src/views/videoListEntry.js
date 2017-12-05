var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    console.log('VideoListEntryView: ', this);
    this.render();
  },

  event: {
    'click': 'handleClick'
  },

  handleClick: function() {
    console.log('click');
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

});
