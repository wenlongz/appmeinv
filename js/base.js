var app=angular.module('wascat',['ionic']);
app.controller('indexCtrl',function  ($scope,$http) {

$scope.id=1;

$scope.fn=function  (i) {
	$scope.id=i
	console.log($scope.id)
	
}

});
app.controller('listCtrl1',function  ($scope,$http) {
	
	$http.jsonp('php/news.php', {
					params: {
//						page: 2,
						channelId: '5572a109b3cdc86cf39001db',
						channelName: '国内最新',
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
				var	datas=data.showapi_res_body.pagebean.contentlist ;
//					$scope.isShow = data.showapi_res_body;
					
					$scope.news = datas;
				console.log($scope.news.link);
				
				
				})
	
});
app.controller('listCtrl2',function  ($scope,$http) {
	var chang=function  () {
		$http.jsonp('php/meinv.php', {
					params: {
						num:10,
//						page: 2,
//						channelId: '5572a109b3cdc86cf39001db',
//						channelName: '国内最新',
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
				
				$scope.news=data.newslist;
				console.log(data);
				
				
				});
	};
	chang();
	
	$scope.chang= chang ;			
				
	
});
app.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('index', {
		//url+#/index
		url: '/index',
		templateUrl: 'template/index.html',
		controller: 'indexCtrl'
	}).state('index.list', {
		//新闻列表
		url: '/list',
		templateUrl: 'template/newsList.html',
		controller: 'listCtrl1'
	}).state('index.yule', {
		//新闻列表
		url: '/yule',
		templateUrl: 'template/newsYule.html',
		controller: 'listCtrl2'
		
	})
}])