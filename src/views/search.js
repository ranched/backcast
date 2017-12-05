var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    
    this.$('button').on('click', function() {
      this.collection.search(this.$('input').val());
    }.bind(this));

    this.$('input').on('keyup', null, {keyCode: 13}, function() {
      this.collection.search(this.$('input').val());
    }.bind(this));

    return this;
  },



  template: templateURL('src/templates/search.html')

});
