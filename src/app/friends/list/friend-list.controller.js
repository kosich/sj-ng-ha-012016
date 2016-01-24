export default function FriendListController(friendsService){ 'ngInject';

    const vm = this;

    vm.deleteFriend = deleteFriend;

    init();

    function init(){
        friendsService.query().then(friends=>{
            vm.friends=friends;
        });
    }

    function deleteFriend(friend){
        friendsService.remove(friend.id).then(()=>{
            // vm.friends.remove(friend);
        });
    }

}