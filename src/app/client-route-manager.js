import express from 'express';
import nconf from 'nconf';
import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import routes from './routes';
import ContextWrapper from './components/common/ContextWrapper';


const ClientRouteManager = {

  mapClientRoutes(args) {
    const {app} = args;
    app.use('/', this.createClientRouter(args))
  },

  createClientRouter(args) {
    let {router, index} = args;
    if(!router) {
      router = express.Router();
    }
    if(!index) {
      index = 'index';
    }
    router.get('*', (req, res) => {
      match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
        const {promises, components} = this.mapComponentsToPromises(
          renderProps.components, renderProps.params);

        Promise.all(promises).then((values) => {
          const data = this.prepareData(values, components);
          const html = this.render(renderProps, data);

          res.render(index, {
              content: html,
              context: JSON.stringify(data)
          });
        }).catch((err) => {
          res.status(500).send(err);
        });
      });
    });

    return router;
  },

  mapComponentsToPromises(components, params) {
    const filteredComponents = components.filter((Component) => {
      return (typeof Component.requestData === 'function');
    });

    const promises = filteredComponents.map(function(Component) {
      return Component.requestData(params, nconf.get('domain'));                  
    });

    return {promises, components: filteredComponents};
  },

  prepareData(values, components) {
    const map = {};

    values.forEach((value, index) => {
      map[components[0].NAME] = value.data;
    });

    return map;
  },

  render(renderProps, data) {      
    let html = renderToString(
      <ContextWrapper data={data}>
          <RoutingContext {...renderProps}/>
      </ContextWrapper>
    );

    return html;
  }
}

export default ClientRouteManager