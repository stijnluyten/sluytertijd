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

app.directive('navigation', function () {
    return {
        restrict: 'E',
        templateUrl: "partials/navigation.html",
        scope: {
            pageName: '='
        }
    };
});

app.controller('homepageController', ['$scope', function ($scope) {
    var ctrl = this;

    ctrl.selectedAlbumName = undefined;

    ctrl.getAlbumNames = function() {
        return Object.keys(albums);
    };

    ctrl.getPathToAlbumPicture = function(albumName) {
        return "images/" + albumName + "/small/" + ctrl.getAlbum(albumName).pictures[0].src;
    };

    ctrl.getAlbum = function(albumName) {
        return albums[albumName];
    };

    ctrl.selectAlbumName = function(albumName) {
        ctrl.selectedAlbumName = albumName;
    };

    ctrl.albumNameSelected = function() {
        return ctrl.selectedAlbumName !== undefined;
    };
}]);


app.controller('portfolioController', ['$window', function ($window) {
    var ctrl = this;

    ctrl.selectedAlbumName = undefined;

    ctrl.init = function() {
        var hash = $window.location.hash
        ctrl.selectedAlbumName = hash.substring(1, hash.length);
    };
}]);



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
        return ctrl.selectedPicture !== undefined
            && picture.src === ctrl.selectedPicture.src
            && picture.caption === ctrl.selectedPicture.caption;
    };

    ctrl.selectPicture = function(picture) {
        ctrl.selectedPicture = picture;

        $('.modal .modal-body').css('overflow-y', 'auto');
        $('.modal .modal-body').css('max-height', $(window).height() * 0.9);
        $('.modal .modal-body img').css('max-height', $(window).height() * 0.8);
        $('.carousel-item').removeClass('active');

        $('#portfolioLightbox').modal();
    };
}]);

