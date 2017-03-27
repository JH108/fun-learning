angular.module('funLearning.signup', [])
  .controller('SignupCtrl', function($scope, UsersFactory, $sanitize) {


    // {firstName: firstName, lastName: lastName, username: username, password: password, birthday: birthday, gender: gender, administrator: isAdministrator, letterGrade: letterGrade, teacher: teacher, school: school}
    // $scope.addUser = function(user) {
    //   $scope.firstName = '';
    //   $scope.lastName = '';
    //   $scope.password = '';
    //   $scope.username = '';
    //   $scope.birthday = '';
    //   $scope.gender = '';
    //   $scope.isAdministrator = '';
    //   $scope.letterGrade = '';
    //   $scope.teacher = '';
    //   $scope.school = '';
    //   UsersFactory.addNewUser(user);
    // };
    $scope.addUser = function() {
      $scope.avatarHead = "assets/bear_animation_head_only.png"

      var user = {
        firstName: $sanitize($scope.firstname),
        lastName: $sanitize($scope.lastname),
        username: $sanitize($scope.username),
        password: $sanitize($scope.password),
        age: $sanitize($scope.birthday),
        gender: $sanitize($scope.gender),
        isAdministator: $sanitize($scope.isAdministrator),
        grade: $sanitize($scope.grade),
        teacher: $sanitize($scope.teacher),
        school: $sanitize($scope.school),
        dateJoined: "03-25-2017"
        avatar: ["assets/bear_animation_body.png", $scope.avatar_head],
        gameResults:
      };
      // resets each modules values to clear the forms fields
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.password = '';
      $scope.username = '';
      $scope.birthday = '';
      $scope.gender = '';
      $scope.isAdministrator = '';
      $scope.letterGrade = '';
      $scope.teacher = '';
      $scope.school = '';
      UsersFactory.addNewUser(user);
    };

    // $scope.setAvatarHead = function($event){
    //   console.log("setting avatar head", $event.target.getAttribute('value'))
    //   $scope.avatarHead = $event.target.getAttribute('value');
    //   var avatarHeadForDatabase =
    // }
//   angular.module('ui.bootstrap.demo').controller('DateParserDemoCtrl', function ($scope, uibDateParser) {
//   $scope.format = 'yyyy/MM/dd';
//   $scope.date = new Date();
// });

  })
