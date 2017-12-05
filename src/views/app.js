var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    const videoList = new VideoListView({collection: this.videos});
    const videoPlayer = new VideoPlayerView({collection: this.videos});
    videoPlayer.render();
    const searchView = new SearchView();
    searchView.render();
    this.videos.search();
    console.log('out', this.videos);
    this.listenTo(this.videos, 'sync', function(){
      this.videos.models[0].select();
    }.bind(this))
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
