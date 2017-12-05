var VideoPlayerView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('select', function(){
      this.render();
    }.bind(this));
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    console.log("this:", this);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
