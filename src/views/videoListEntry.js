var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.$el.on('click', function(e) {
      this.model.select();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log('here here', this);
    this.$('.video-list-entry-detail').html(this.model.attributes.description);
    this.$('.video-list-entry-title').html(this.model.attributes.title);
    this.$('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html'),

});
