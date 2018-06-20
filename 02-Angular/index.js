const app = angular.module("myapp", []);

app.controller("myctrl", ($scope, myfactory)=>
    {
        $scope.load = () => {
            console.log("Load ctrl Call");
            var pr = myfactory.talkToServer($scope);
            console.log("Data set ctrl");
            pr.then(function(data){
                $scope.result = data;
            },function(err) {
                $scope.error = err;
            })
            
        
        }
    }
);

app.factory("myfactory", ($http,$q) => {
    const object = {
        talkToServer(s) {
            var pr = $q.defer();
            console.log("Server Call Factory");
            var url="http://localhost:4000/items";
            $http.get(url).then(sucess, fail);

            function sucess(data) {
                console.log("Sucess",data);
                pr.resolve(data);
                //s.result = data;
                //return data;
            }

            function fail(errro) {
                pr.reject(error);
                //return error;
            }
            //offers,discount
            return pr.promise;
        }
    };
    return object;
})