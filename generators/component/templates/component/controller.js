const $inject = ['settingsService'];
const <%= title %>Ctrl = function (settingsService) {
  let vm = this;

  let data = settingsService.findObject(vm.lookUp, vm.data, vm.settings, vm.index);

  vm.modelData = data[0];
  vm.submitTo = data[1];
};

<%= title %>Ctrl.$inject = $inject;

export default <%= title %>Ctrl;
