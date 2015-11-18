import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateClass: function() { 
			this.model.save();
		}
	}
});
