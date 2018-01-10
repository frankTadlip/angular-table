(function () {
    angular.module('app', [])
        .controller('angular.table.controller', angularTableController)
        .directive('angularTable', table);

    function angularTableController(){
        var vm = this;
        
        vm.header = ['Name', 'Age', 'Birthday', 'Sex', 'Address'];

        vm.data = [
            { id: 1 , header: 'Name' },
            { id: 2 , header: 'Age' },
            { id: 3 , header: 'Sex' },
        ]


    }

    function table() {
        return {
            scope: { 
                header: '=',
                data: '=',
                disabled: '=',
                fixedHeader: '=',
                height: '=',
                multiSelectable: '=',
                selectable: '=',
                action: '=',
            },
            restrict: 'E',
            templateUrl: 'table.html',
            transclude: true,
            link: function(scope) {
                console.log(scope)
            }
        }
    }

    

})();