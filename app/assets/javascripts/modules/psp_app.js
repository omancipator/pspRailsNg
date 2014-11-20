(function(){
  angular.module('pspApp',['loanPurposeSelectModule'])
    .run(function($rootScope){
      $rootScope.$apply($(document).foundation());
    }
  );
})();

