import '../stylesheets/application';
//import 'material-dashboard.js';
import 'bootstrap';
import '../javascript/application';

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
});