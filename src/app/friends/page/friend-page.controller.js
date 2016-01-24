export default function FriendPageController($stateParams, friendsService){ 'ngInject';

    const vm = this;

    init();

    function init(){
        friendsService.get($stateParams.id).then(card=>vm.card = card);
    }

}