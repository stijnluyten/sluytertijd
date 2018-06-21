albums = {
    buiten: {
        title: "Buiten",
        caption: "Foto's in de buitenlucht",
        pictures: [
            {
                src: "DSC_0378-1.jpg",
                caption: "Veterknoper"
            },
            {
                src: "DSC_0378-1.jpg",
                caption: "Veterknoper"
            },
            {
                src: "DSC_0378-1.jpg",
                caption: "Veterknoper"
            }
        ]
    },
    studio: {
        title: "Studio",
        caption: "Foto's in de studio",
        pictures: [
            {
                src: "DSC_0347-2.jpg",
                caption: "Broers 1"
            },
            {
                src: "thorsday4.jpg",
                caption: "Thor"
            },
            {
                src: "DSC_0347-2.jpg",
                caption: "Broers 1"
            },
            {
                src: "thorsday4.jpg",
                caption: "Thor"
            },
            {
                src: "DSC_0347-2.jpg",
                caption: "Broers 1"
            },
            {
                src: "thorsday4.jpg",
                caption: "Thor"
            }
        ]
    }
};


var app = angular.module('sluytertijd', []);

app.directive('sluytertijdAlbum', function () {
    return {
        restrict: 'E',
        templateUrl: "partials/sluytertijdAlbum.html",
        scope: {
            album: '='
        },
        controller: 'albumController',
        controllerAs: 'ctrl'
    };
});

app.controller('albumController', ['$scope', function ($scope) {
    var ctrl = this;

    ctrl.selectedPicture = undefined;

    ctrl.getAlbum = function () {
        return albums[$scope.album];
    };

    ctrl.getPathToSmallPicture = function(picture) {
        return "images/" + $scope.album + "/small/" + picture.src;
    };

    ctrl.getPathToLargePicture = function(picture) {
        return "images/" + $scope.album + "/large/" + picture.src;
    };

    ctrl.isSelected = function (picture) {
        return picture === ctrl.selectedPicture;
    };

    ctrl.selectPicture = function(picture) {
        ctrl.selectedPicture = picture;

        $('.modal .modal-body').css('overflow-y', 'auto');
        $('.modal .modal-body').css('max-height', $(window).height() * 0.9);
        $('.modal .modal-body img').css('max-height', $(window).height() * 0.8);

        $('#portfolioLightbox').modal();
    };
}]);

