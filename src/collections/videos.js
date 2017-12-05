var Videos = Backbone.Collection.extend({

  model: Video,


  initialize: function() {

    // this.set({
    //   currentModel: 'this.models[0]'
    // });
    // console.log(this);
  },

  search: function(searchData){
    Backbone.ajax({
      data: {
        q: searchData
      }
    });
  },

  parse: function(paramsObj){
    return paramsObj[Object.keys(paramsObj)[0]];
  }
});
