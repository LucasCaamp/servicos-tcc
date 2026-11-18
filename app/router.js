import EmberRouter from '@ember/routing/router';
import config from 'servicos-tcc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('solicitante');
  this.route('prestador');
});
