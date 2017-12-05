var VideoListView = Backbone.View.extend({
  initialize: function() {
    // console.log('VideoListView: ', this);
    this.collection.map(function(model) {
      const newVideoListEntryView = new VideoListEntryView({model});
      newVideoListEntryView.render();
    }, this);

    this.render();
  },

  event: {
    'sync': 'handleSync'
  },

  handleSync: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
