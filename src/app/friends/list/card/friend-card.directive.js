export default function FriendCardDirective(){
  return {
    templateUrl: 'app/friends/list/card/friend-card.html',
    controller: 'FriendCardController',
    controllerAs: 'vm',
    scope: true,
    bindToController: {
      card: '='
    }
  };
}