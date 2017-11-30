import moment from 'moment';

module.exports = {
  formatDate: function(date) {
    return moment(date).format('dddd, MMMM D YYYY');
  }
}
