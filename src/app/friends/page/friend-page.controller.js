export default function FriendPageController(){ 'ngInject';

    const vm = this;

    vm.card = {
        id: 'id2',
        name: 'name 2',
        status: 'status 2',
        address: 'address 2',
        bio: `
some multiline
things
        `
    };
}