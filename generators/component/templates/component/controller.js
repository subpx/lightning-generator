const $inject = ['componentService'];

const <%= title %>Ctrl = function (componentService) {
  let vm = this;

  angular.extend(vm, componentService.getProps(vm));
};

<%= title %>Ctrl.$inject = $inject;

export default <%= title %>Ctrl;
