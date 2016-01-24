import FriendListController from './list/friend-list.controller.js';
import FriendCardDirective from './list/card/friend-card.directive.js';
import FriendCardController from './list/card/friend-card.controller.js';

import FriendPageController from './page/friend-page.controller.js';

angular.module('friends', [])
  .config(function routerConfig ($stateProvider) { 'ngInject';

    $stateProvider
      .state('friendList', {
        url: '/friends',
        templateUrl: 'app/friends/list/friend-list.html',
        controller: 'FriendListController',
        controllerAs: 'vm'
      })
      .state('friendPage', {
        url: '/friends/:id',
        templateUrl: 'app/friends/page/friend-page.html',
        controller: 'FriendPageController',
        controllerAs: 'vm'
      });

  })
  // list
  .controller('FriendListController', FriendListController)

  .directive('sjFriendCard', FriendCardDirective)
  .controller('FriendCardController', FriendCardController)

  // page
  .controller('FriendPageController', FriendPageController);
