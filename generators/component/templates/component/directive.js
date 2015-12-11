const $inject = [];
const <%= title %> = function () {
  return {
    restrict: 'A',
    scope:{
      lookUp: '=lookUp',
      data: '=data',
      settings: '=settings'
    },
    bindToController: true,
    controller: '<%= title %>Ctrl',
    controllerAs: 'vm',
    template: require('./<%= title %>.html')
  }
};

<%= title %>.$inject = $inject;

export default <%= title %>;
