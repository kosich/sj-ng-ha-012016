export default function friendsResource($resource){ 'ngInject';

    return $resource('http://private-12625-tinatest.apiary-mock.com/friends/:id');

}