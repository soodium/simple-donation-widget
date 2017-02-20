'use strict';

angular.module('myApp.donation-widget', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/donation-page', {
    templateUrl: 'donation-widget/donation-widget.html',
    controller: 'donationWidgetController'
  });
}])

.controller('donationWidgetController', function($scope) {

    // Projects information
    $scope.project = {
      donationGoal: 500,
      progressProcent: 0,
      totalDonations: 0,
      numberOfDonors: 0,
      endDate : 0,
      isGoalReached: false
    }

    // user's input
    $scope.donation = 0;

    // function for 'donating' to the project
    $scope.giveNow = function(giftAmount) {
        if (typeof giftAmount === 'number') {
            // update project status
            $scope.project.progressProcent += giftAmount / 5.0;
            $scope.project.totalDonations += giftAmount;
            $scope.project.numberOfDonors += 1;

            // check if goal is reached
            if ($scope.project.totalDonations >= $scope.project.donationGoal) {
                $scope.project.isGoalReached = true;
            }
        }
    }

});
