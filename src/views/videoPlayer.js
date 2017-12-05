var VideoPlayerView = Backbone.View.extend( {
  initialize: function() {
    this.collection.on('select', function(context) {
      console.log('new context!!!: ', context);
      let currentModel;
      this.collection.models.forEach(function(model) {
        if (model.id === context.id) {
          currentModel = model;
        }
      });
      this.render(currentModel);
    }.bind(this));
  },

  render: function(model = this.collection.models[0]) {

    const title = model.attributes.title;
    const description = model.attributes.description;
    const url = `https://www.youtube.com/embed/${model.id}`;

    this.$el.html(this.template);
    this.$('iframe').attr('src', url);
    this.$('.video-player-details h3').html(title);
    this.$('.video-player-details div').html(description);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
