export default function FriendListController(){ 'ngInject';

  const vm = this;

  vm.deleteFriend = deleteFriend;

  init();

  function init(){
    vm.friends = [
      {
        id: 'id1',
        name : 'name 1',
        status: 'status 1',
        address: 'address 1'
      }, {
        id: 'id2',
        name: 'name 2',
        status: 'status 2',
        address: 'address 2'
      }
    ];
  }

  function deleteFriend(){
    // some service .delete
  }

}