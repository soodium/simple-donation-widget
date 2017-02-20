'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should should have a project goal which is more than 0', inject(function($controller) {
      //spec body
      var donationWidgetController = $controller('donationWidgetController');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
