var Videos = Backbone.Collection.extend({

  model: Video,

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
