import nconf from 'nconf';
import _ from 'lodash';

const baseManager = {
  handle(app) {
    this.configureCommon(app);
    const env = process.env.NODE_ENV || 'development';
    const action = `configure${_.capitalize(env)}Env`
    this[action](app);
  },

  configureCommon(/*app*/) {},

  configureProductionEnv(/*app*/) {},

  configureDevelopmentEnv(/*app*/) {}    
};

export default baseManager;
