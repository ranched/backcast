var VideoListView = Backbone.View.extend({
  initialize: function() {
    // console.log('VideoListView: ', this);
    this.render();
    // this.$el.children()[0].$('video-list').children().detach();
    // console.log('this: ', this.$el);
    // this.$el.h
    window.listview = this.$el;
    this.collection.map(function(model, i) {
      const newVideoListEntryView = new VideoListEntryView({model});
      //newVideoListEntryView.render();
      //console.log('appending newEntry', newVideoListEntryView.el);
      const child = this.$('.video-list').children()[i];
      $(child).html(newVideoListEntryView.el);
    }, this);
  },

  event: {
    'sync': 'handleSync'
  },

  handleSync: function() {
    this.render();
  },

  render: function() {
    //console.log('kiddos before: ', this.$el.children());
    this.$el.children().detach();
    //console.log('kiddos: ', this.$el.children());
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
