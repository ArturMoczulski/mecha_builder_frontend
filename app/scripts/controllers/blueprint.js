'use strict';

angular.module('mechaBuilderFrontendApp')
  .controller('BlueprintCtrl', function ($scope) {
    this.blueprint = {
      body: {
        name: 'body type 1',
        socketGroups: [
          {
            name: 'arms',
            socketsCount: 2
          },
          {
            name: 'legs',
            socketsCount: 4
          }
        ]
      },
      parts: {
        arms: [ { name: 'standard arm', blueprint: { sku: '001', socketPlugsCount: 1 } } ],
        legs: [
          { name: 'standard leg', blueprint: { sku: '001', socketPlugsCount: 1 }},
          { name: 'standard leg', blueprint: { sku: '001', socketPlugsCount: 1 }},
          { name: 'standard leg', blueprint: { sku: '001', socketPlugsCount: 1 }},
          { name: 'standard leg', blueprint: { sku: '001', socketPlugsCount: 1 }}
        ]
      }
    };
  });
