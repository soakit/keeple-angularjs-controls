﻿/// <reference path="../3rd/angular.js" />
angular.module('project', ['keeple.controls.fixed-table']).controller('project.controller.fixed-table.main',
    ['$rootScope', '$http', '$scope','$templateCache',
        function ($rootScope, $http, $scope, $templateCache) {
            /// <param name="$scope" type="Object"></param>
            $scope.columnsCount = 10;
            $scope.rowsCount = 40;

            $scope.columns = [];
            $scope.rows = [];

            $scope.fixedColumnsCount = 1;
            $scope.options = {
                fixedColumns: 1
            };

            for (var i = 0; i < $scope.columnsCount; i++) {
                $scope.columns.push('ColunaParaFixedTeste' + i);
            }

            for (var j = 0; j < $scope.rowsCount; j++) {
                $scope.rows.push({ id: j + 1 });
            }

            $scope.$watch('rowsCount', function (newValue, oldValue) {
                if (newValue > oldValue) {
                    while (newValue > oldValue) {
                        $scope.rows.push({ id: oldValue + 1 });
                        oldValue = oldValue + 1;
                    }
                }
                else if (newValue < oldValue) {
                    while (newValue < oldValue) {
                        oldValue = oldValue - 1;
                        $scope.rows.splice($scope.rows.length - 1, 1);
                    }
                }
            });

            $scope.$watch('columnsCount', function (newValue, oldValue) {
                if (newValue > oldValue) {
                    while (newValue > oldValue) {
                        $scope.columns.push('ColunaParaFixedTeste' + oldValue);
                        oldValue = oldValue + 1;
                    }
                }
                else if (newValue < oldValue) {
                    while (newValue < oldValue) {
                        oldValue = oldValue - 1;
                        $scope.columns.splice($scope.columns.length - 1, 1);
                    }
                }
            });

            $scope.$watch('fixedColumnsCount', function () {
                $scope.options.fixedColumns = $scope.fixedColumnsCount;
            });

            $scope.$templateCache = $templateCache;

            setTimeout(function(){
                $rootScope.$emit('tableRendered');
            }, 0);

        }
    ]);