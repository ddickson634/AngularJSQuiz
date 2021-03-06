(function(){

	var app = anguler.module('myQuiz',[]);

  app.controller('QuizController',['$scope','$http','$sce', function($scope,$http,$sce){

    $scope.score = ;
		$scope.activeQuestion = -1;
		$scope.activeQuestionAnswered = 0;
		$scope.percentage = 0;

		$http.get('quiz_data.json').then(function(quizData) {
			$scope.myQuestions = quizData.data;
			$scope.totalQuestions = $scope.myQuestions.length;
		});

  }]);

})();
