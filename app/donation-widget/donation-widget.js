'use strict';

var widget = angular.module('myApp.donation-widget', [])


    .directive('donationWidget', function() {
        return {
            templateUrl: './donation-widget/donation-widget.html',
            controller: 'donationWidgetController',
            controllerAs: 'donationWidgetVm',
            restrict: 'E',
        };

    }).controller('donationWidgetController', function() {

        // Projects information
        this.project = {
            donationGoal: 500,
            progressProcent: 0,
            totalDonations: 0,
            numberOfDonors: 0,
            endDate: 0,
            isGoalReached: false
        }

        // function for 'donating' to the project
        this.giveNow = function() {
            if (typeof this.donation === 'number') {
                // update project status
                this.project.progressProcent += this.donation / 5.0;
                this.project.totalDonations += this.donation;
                this.project.numberOfDonors += 1;

                // check if goal is reached
                if (this.project.totalDonations >= this.project.donationGoal) {
                    this.project.isGoalReached = true;
                }
            }
        }
    });
