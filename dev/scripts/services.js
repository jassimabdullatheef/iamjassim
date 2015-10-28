app.service('workServices',function(){

  return {
    allThumbs : ['website','branding','others'],
    activeThumbs : ['website','branding','others']
  };

});

app.factory('Works',['$resource',
  function($resource){
    return  $resource('scripts/works.json',{},{
      query: {method:'GET', params:{url:''}, isArray:true}
    });
}]);
