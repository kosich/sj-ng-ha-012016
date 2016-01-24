export default function friendsService(friendsResource){ 'ngInject';

    function query(){
        return friendsResource.query().$promise;
    }

    function get(id){
        return friendsResource.get({ id }).$promise;
    }

    function remove(id){
        return friendsResource.remove({ id }).$promise;
    }

    return {
        query,
        get,
        remove
    }
}