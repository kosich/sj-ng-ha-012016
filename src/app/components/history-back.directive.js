export default function historyBackDirective($window){ 'ngInject';

  return {
    restrict: 'E',
    transclude: true,
    template: '<span ng-click="onClick()" ng-transclude></span>',
    link: function(scope){
      scope.onClick = onClick;
    }
  };

  function onClick(){
    $window.history.back();
  }

}