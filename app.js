(function() {
  'use strict';

  const app = angular.module('myApp', []);

  app
  .controller('AppController', AppController)
  .directive('todd', ToddDirective)

  AppController.$inject = [];

  function AppController() {}

  ToddDirective.$inject = [];

  function ToddDirective() {
    console.log('hi');
    return {
      restrict: 'A',
      scope: {
        backgroundColor: '@',
        textColor: '@'
      },
      controller: function($scope) {
        $scope.sayHelloTodd = function() {
          alert('hi');
        }
        $scope.changeColor = function() {
          alert('yo');
        }
      },
      template: '<p>hi</p>',
      link: function(scope, element, attrs, ctrl, transcludeFn) {
        console.log(attrs);

        element.css('background-color', attrs.backgroundColor);
        element.css('color', attrs.textColor);

        element.on('mouseover', function() {
          element.css('background-color', 'green');
          element.css('color', 'red');
        })
        element.on('mouseleave', function() {
          element.css('background-color', attrs.backgroundColor);
          element.css('color', attrs.textColor);
        })
      }
    }
  }

}());
