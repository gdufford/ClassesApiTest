import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:60565/api'
});
