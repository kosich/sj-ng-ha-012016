export default function FriendListController(friendsService, toastr){ 'ngInject';

    const vm = this;
    vm.onFriendRemove = onFriendRemove;

    init();

    function init(){
        friendsService.query().then(friends=>{
            vm.friends=friends;
        });
    }

    function onFriendRemove(friendToRemove){
        friendsService.remove(friendToRemove.id)
            .then(removeFriendFromList)
            .then(showSuccessToastr)
            .catch(showFailToastr);


        function removeFriendFromList(){
            let removeIndex = vm.friends.findIndex(f=>f.id===friendToRemove.id);
            vm.friends.splice(removeIndex, 1);
        }

        function showSuccessToastr(){
            toastr.success(`${friendToRemove.name} has been removed from friends`);
        }

        function showFailToastr(){
            toastr.error(`Failed to remove ${friendToRemove.name} from friends`);
        }

    }

}