/**
 * Created by kevinhuron on 01/06/2016.
 */
angular.module('UsersCtrl', ['UsersService']).controller('UsersController', function($scope, user) {
    /*Article.get($routeParams.idA).then(function(oneArticle) {
        var article = oneArticle.data;
        $scope.allArticles = article;
    });*/
    /*$scope.create = function(user) {
        inscription.create(user);
    };*/
    // process the form
    $scope.user = {};
    var userData;
    $scope.processForm = function() {
        $scope.firstnameRequired = '';
        $scope.lastnameRequired = '';
        $scope.mailRequired = '';
        $scope.passwordRequired = '';
        $scope.registrationFailed = '';
        $scope.registrationSuccess ='';
        $scope.loader = true;
        if (!$scope.user.firstname || !$scope.user.lastname || !$scope.user.mail || !$scope.user.password) {
            if (!$scope.user.firstname) {
                $scope.firstnameRequired = 'Votre Nom est requis';
                $scope.loader = false;
            }
            if (!$scope.user.lastname) {
                $scope.lastnameRequired = 'Votre prénom est requis';
                $scope.loader = false;
            }
            if (!$scope.user.mail) {
                $scope.mailRequired = 'Votre mail est requis et vous servira à vous connecter';
                $scope.loader = false;
            }
            if (!$scope.user.password) {
                $scope.passwordRequired = 'Un mot de passe est requis pour vous connecter';
                $scope.loader = false;
            }
        } else {
            userData = {"firstname":$scope.user.firstname, "lastname":$scope.user.lastname, "mail":$scope.user.mail, "passwd":$scope.user.password};
            user.create(userData).then(function(registr) {
                var registration = registr.data;
                if (registration == "NOK") {
                    $scope.registrationFailed = 'Votre inscription à échoué ! Vérifié vos informations (Il se peut que votre email soit déjà dans notre base)';
                    $scope.loader = false;
                } else {
                    $scope.registrationSuccess = 'Votre inscription à bien été prise en compte !';
                    $scope.loader = false;
                }
            });
        }
    };
        /*inscription.create($scope.user)

        .success(function(data) {
            console.log(data);

            if (!data.success) {
                // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        });
    };*/
});