

var app = angular.module("configurationModule");

app.controller("createConfigController", ["$scope", function ($scope) {



    //Reset function
    $scope.blankConfig = {};

    $scope.reset = function () {
        $scope.configuration = angular.copy($scope.blankConfig);
    };

    $scope.reset();
    //--------------------------

    // Date picker 
    $scope.today = function (whichDate) {
        switch (whichDate) {
            case 'create':
                $scope.dt.create = new Date();
                break;
            case 'start':
                $scope.dt.start = new Date();
                break;
            case 'expiration':
                $scope.dt.expiration = new Date();
                break;
            default:
                $scope.dt = new Date();
        }
    };

    $scope.today = function (whichDate) {

        switch (whichDate) {
            case 'create':
                $scope.configuration.createDate = new Date();
                break;
            case 'start':
                $scope.configuration.startDate = new Date();
                break;
            case 'expiration':
                $scope.configuration.expirationDate = new Date();
                break;
            default:
                $scope.configuration.Date = new Date();
        }
    };

    $scope.today();

    $scope.clear = function (whichDate) {
        switch (whichDate) {
            case 'create':
                $scope.configuration.createDate = '';
                break;
            case 'start':
                $scope.configuration.startDate = '';
                break;
            case 'expiration':
                $scope.configuration.expirationDate = '';
                break;
            default:
                $scope.dt = null;
        }


    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open = function ($event, id) {

        switch (id) {
            case 'create':
                $scope.status.create.opened = true;
                break;
            case 'start':
                $scope.status.start.opened = true;
                break;
            case 'expiration':
                $scope.status.expiration.opened = true;
                break;
            default:
                $scope.status.opened = true;
        }

    };

    $scope.setDate = function (year, month, day) {
        //        $scope.dt = new Date(year, month, day);
        $scope.configuration.createDate = new Date(year, month, day);
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

    $scope.status.create = {
        opened: false
    };

    $scope.status.start = {
        opened: false
    };

    $scope.status.expiration = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };


    //    Demo Data
    //Applications
    $scope.configuration.apps = [
        {
            id: '0',
            dataType: 'app',
            code: '0001',
            description: 'Windows Mobile application',
            company: 'LANCEict',
            tags: '#windows #mobile #app'
        },
        {
            id: '1',
            dataType: 'app',
            code: '0002',
            description: 'Android application',
            company: 'LANCEict',
            tags: '#android #mobile #app'
        },
        {
            id: '2',
            dataType: 'app',
            code: '0003',
            description: 'IOS application',
            company: 'LANCEict',
            tags: '#ios #mobile #app'
        },
        {
            id: '3',
            dataType: 'app',
            code: '0004',
            description: 'Windows application',
            company: 'LANCEict',
            tags: '#Windows #desktop #app'
        },
    ]

    $scope.detailData = [];

    $scope.details = function (type, id) {
        console.log(id.param);

        switch (type) {
            case 'app':
                $scope.detailData.id = $scope.configuration.apps[id.param].id,
                    $scope.detailData.type = $scope.configuration.apps[id.param].dataType,
                    $scope.detailData.code = $scope.configuration.apps[id.param].code,
                    $scope.detailData.description = $scope.configuration.apps[id.param].description,
                    $scope.detailData.company = $scope.configuration.apps[id.param].company,
                    $scope.detailData.tags = $scope.configuration.apps[id.param].tags

                console.log($scope.detailData);
                break;
            case 'device':
                $scope.detailData.id = $scope.configuration.devices[id.param].id,
                    $scope.detailData.dataType = $scope.configuration.devices[id.param].dataType,
                    $scope.detailData.code = $scope.configuration.devices[id.param].code,
                    $scope.detailData.description = $scope.configuration.devices[id.param].description,
                    $scope.detailData.category = $scope.configuration.devices[id.param].category,
                    $scope.detailData.group = $scope.configuration.devices[id.param].group,
                    $scope.detailData.type = $scope.configuration.devices[id.param].type,
                    $scope.detailData.function = $scope.configuration.devices[id.param].function,
                    $scope.detailData.valorization = $scope.configuration.devices[id.param].valorization,
                    $scope.detailData.troubleshooting = $scope.configuration.devices[id.param].troubleshooting,
                    $scope.detailData.sensor = $scope.configuration.devices[id.param].sensor

                console.log($scope.detailData);
                break;
            case 'qualifiers':

                break;
            default:

        }

    }
    //    $scope.details();
    //Devices
    $scope.configuration.devices = [
            {
                id: '0',
                dataType: 'device',
                code: '0001',
                description: 'Wunderbar',
                category: 'Environmental and Health care',
                group: 'Het is al geruime tijd een',
                type: 'Het is al geruime tijd een',
                function: 'Het is al geruime tijd een',
                valorization: 'Het is al geruime tijd een',
                troubleshooting: 'Het is al geruime tijd een',
                sensor: 'Het is al geruime tijd een'
            },
            {
                id: '1',
                dataType: 'device',
                code: '0002',
                description: 'Wunderbar2',
                category: 'Environmental and Health care',
                group: 'Het is al geruime tijd een',
                type: 'Het is al geruime tijd een',
                function: 'Het is al geruime tijd een',
                valorization: 'Het is al geruime tijd een',
                troubleshooting: 'Het is al geruime tijd een',
                sensor: 'Het is al geruime tijd een'
            },
            {
                id: '2',
                dataType: 'device',
                code: '0003',
                description: 'Wunderbar3',
                category: 'Environmental and Health care',
                group: 'Het is al geruime tijd een',
                type: 'Het is al geruime tijd een',
                function: 'Het is al geruime tijd een',
                valorization: 'Het is al geruime tijd een',
                troubleshooting: 'Het is al geruime tijd een',
                sensor: 'Het is al geruime tijd een'
            },
            {
                id: '3',
                dataType: 'device',
                code: '0004',
                description: 'Wunderbar4',
                category: 'Environmental and Health care',
                group: 'Het is al geruime tijd een',
                type: 'Het is al geruime tijd een',
                function: 'Het is al geruime tijd een',
                valorization: 'Het is al geruime tijd een',
                troubleshooting: 'Het is al geruime tijd een',
                sensor: 'Het is al geruime tijd een'
            },
    ]
    //    Qualifiers
    $scope.configuration.qualifiers = [
        {
            id: '0',
            dataType: 'qualifiers',
            code: '0001',
            description: 'Q1',
            category: 'A',
            group: 'Het is al geruime tijd een',
            type: 'Het is al geruime tijd een',
            function: 'Het is al geruime tijd een',
            valorization: 'Het is al geruime tijd een',
            troubleshooting: 'Het is al geruime tijd een',
            sensor: 'Het is al geruime tijd een'
        },
        {
            id: '1',
            dataType: 'qualifiers',
            code: '0002',
            description: 'Q2',
            category: 'B',
            group: 'Het is al geruime tijd een',
            type: 'Het is al geruime tijd een',
            function: 'Het is al geruime tijd een',
            valorization: 'Het is al geruime tijd een',
            troubleshooting: 'Het is al geruime tijd een',
            sensor: 'Het is al geruime tijd een'
        },
        {
            id: '2',
            dataType: 'qualifiers',
            code: '0003',
            description: 'Q3',
            category: 'A',
            group: 'Het is al geruime tijd een',
            type: 'Het is al geruime tijd een',
            function: 'Het is al geruime tijd een',
            valorization: 'Het is al geruime tijd een',
            troubleshooting: 'Het is al geruime tijd een',
            sensor: 'Het is al geruime tijd een'
        },
        {
            id: '3',
            dataType: 'qualifiers',
            code: '0004',
            description: 'Q4',
            category: 'A',
            group: 'Het is al geruime tijd een',
            type: 'Het is al geruime tijd een',
            function: 'Het is al geruime tijd een',
            valorization: 'Het is al geruime tijd een',
            troubleshooting: 'Het is al geruime tijd een',
            sensor: 'Het is al geruime tijd een'
        },
    ]

}])
