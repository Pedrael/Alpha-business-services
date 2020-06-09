import 'owl.carousel';
import App from './middleware.js'
import Mail from './mail.js'
import './jquery.maskedinput.js'

App()
Mail()

jQuery(function($) {
   $("#phone").mask("+7-999-999-9999", {autoclear: false});
});
