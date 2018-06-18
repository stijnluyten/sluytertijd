var app = angular.module('sluytertijd', []);
app.controller('albumController', function($scope) {
    var ctrl = this;

    ctrl.pictures = [
        {
            src: "images/DSC_0347-2.jpg",
            caption: "Broers 1"
        },
        {
            src: "images/DSC_0378-1.jpg",
            caption: "Veterknoper"
        }
    ];
    ctrl.selectedPicture = ctrl.pictures[0];

    ctrl.isSelected = function (picture) {
        return picture === ctrl.selectedPicture;
    }
});
