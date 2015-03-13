module = angular.module("Prova", []);

module.controller("VeiculoController", ["$scope","$http", VeiculoController]);

function DisciplinaController($scope,$http){
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;    
    $scope.disciplinas = [];
    $scope.disciplina = {};
    $scope.isNovo = true;
    
    function funcaoExcluir(aSerExcluido){
        $http.delete("/disciplinas"+aSerExcluido).success(onSuccess).error(onError);
        
        function onSuccess(data,status){
            console.log(data)
            funcaoCarregar()
        }
        function onError(data,status){
            Alert("deu ruim" + data)
        }
        
        
    }
    function funcaoSalvar(){
        if ($scope.isNovo)
            $http.post("/disciplinas").succes(onSuccess).error(onError);        
        else
            $http.put("/disciplinas").succes(onSuccess).error(onError);
        
        function onSuccess(data, status){
            console.log(data);
            funcaoCarregar()
        }
        function onError(data,status){
            Alert("deu ruim" + data)
        }
    }
        
    function funcaoCarregar(){
            $http.get("/disciplinas").success(onSuccess).error(onError);
        function onSuccess(data, status){
            $scope.veiculos = data;
            console.log(data);
    
        }
        function onError(data,status){
            Alert("deu ruim" + data)
        }    
    }
    function funcaoEditar(){
        $scope.isNovo = false
    }
}


