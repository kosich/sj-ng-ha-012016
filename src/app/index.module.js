// MODULES 
import {} from './friends/friends.module';

// GLOBAL
import { config } from './index.config';
import { routerConfig } from './index.route';
import historyBackDirective from './components/history-back.directive';

angular.module('sj', [
  'ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'toastr', /* 3rd party */
  'friends' /* own */
  ])
  .config(config)
  .config(routerConfig)
  .directive('sjHistoryBack', historyBackDirective)
