export default function FriendCardDirective(){
  return {
    restrict: 'E',
    templateUrl: 'app/friends/list/card/friend-card.html',
    scope: {
      friend: '=',
      onRemove: '='
    }
  };
}