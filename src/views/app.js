var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    const videoList = new VideoListView({collection: this.videos});
    this.$('.list').html(videoList.el);
    const videoPlayer = new VideoPlayerView({collection: this.videos});
    videoPlayer.render();
    this.$('.player').html(videoPlayer.el);
    const searchView = new SearchView();
    searchView.render();
    this.$('.search').html(searchView.el);
    this.videos.search();
    this.listenTo(this.videos, 'sync', function() {
      this.videos.models[0].select();
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template());
    $('body').append(this.el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
