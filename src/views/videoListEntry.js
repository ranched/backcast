var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    this.$el.on('click', function(e) {
      this.model.select();
    }.bind(this))
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

});
