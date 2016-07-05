miAppHome.service('detalleTransferenciaService', function ($q, $http, cookieService) {

    this.getDetalleTransferencia = function (idTransferencia) {
        var datosRecu = null;
        var deferred = $q.defer();
        var uri = 'https://tierradecoloresapi.herokuapp.com/transferencia/detalle/trans';
        var token = cookieService.get('token');
        token.then(function (data) {
            $http({
                url: uri,
                method: 'get',
                params: {
                    idTransferencia: idTransferencia
                },
                headers: {
                    'Authorization': 'Bearer ' + data,
                    'Content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                datosRecu = response;
                deferred.resolve(datosRecu);
            }, function errorCallback(response) {
                datosRecu = response;
                deferred.resolve(datosRecu);
            });
        });
        return deferred.promise;
    };

    this.findByParams = function (params) {
        var datosRecu = null;
        var deferred = $q.defer();
        var uri = 'https://tierradecoloresapi.herokuapp.com/transferencia/detalle/search';
        var token = cookieService.get('token');
        token.then(function (data) {
            $http({
                url: uri,
                method: 'get',
                params: {
                    descripcion: params.descripcion,
                    marca: params.marca,
                    talla: params.talla,
                    codigo: params.codigo,
                    categoria: params.categoria,
                    sucursal: params.sucursal
                },
                headers: {
                    'Authorization': 'Bearer ' + data,
                    'Content-type': 'application/json'
                }
            }).then(function successCallback(response) {
                datosRecu = response;
                deferred.resolve(datosRecu);
            }, function errorCallback(response) {
                datosRecu = response;
                deferred.resolve(datosRecu);
            });
        });
        return deferred.promise;
    };

});