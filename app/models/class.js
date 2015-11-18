import DS from 'ember-data';

export default DS.Model.extend({
    classNumber: DS.attr('string'),
    startDate: DS.attr('date'),
    gradDate: DS.attr('date'),
    classDmnId: DS.attr('string'),
    operatingLocation: DS.attr('string'),
    status: DS.attr('string'),
    course: DS.attr('string')
});