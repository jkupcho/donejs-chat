import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET http://chat.donesjs.com/api/messages': store.findAll,
  'GET http://chat.donesjs.com/api/messages/{id}': store.findOne,
  'POST http://chat.donesjs.com/api/messages': store.create,
  'PUT http://chat.donesjs.com/api/messages/{id}': store.update,
  'DELETE http://chat.donesjs.com/api/messages/{id}': store.destroy
});

export default store;
