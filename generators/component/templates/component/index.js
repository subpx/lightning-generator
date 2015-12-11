const <%= title %> = angular.module('app.<%= title %>', []);

<%= title %>.controller('<%= title %>Ctrl', require('./<%= title %>Ctrl'));
<%= title %>.directive('<%= title %>', require('./<%= title %>Dir'));
<%= title %>.service('settingsService', require('../../services/settingsService'));

export default <%= title %>;
