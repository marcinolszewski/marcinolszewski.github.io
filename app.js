var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
  $scope.handle = '';

  $scope.lowercaseHandle = function () {
    return $filter('lowercase')($scope.handle);
  }

  $scope.$watch('handle', function (newValue, oldValue) {
    console.info('Changed');
    console.log('New value: ' + newValue);
    console.log('Old value: ' + oldValue);
  });

  $scope.characters = 5;

  $scope.rules = [{
      rule: "Must be at least 5 characters"
    },
    {
      rule: "Must not be used somewhere else"
    },
    {
      rule: "Must be cool"
    },
  ];

  $scope.contactEmail = '';
  $scope.contactName = '';
  $scope.contactPhone = '';
  $scope.clientId = '';

  $scope.postData = function () {
    $http({
      method: 'POST',
      url: 'https://cors-anywhere.herokuapp.com/http://app2.salesmanago.pl/api/contact/insert',
      headers: {
        "Accept": "application/json, application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        "async": true,
        "apiKey": "asdfjkh2323asdf",
        "clientId": $scope.clientId,
        "sha": "2ebf4bec5faab710c5d6368943013cda1ae9ea9b",
        "requestTime": 1327059355361,
        "contact": {
          "email": $scope.contactEmail,
          "name": $scope.contactName,
          "phone": $scope.contactPhone,
          "state": "PROSPECT"
        },
        "owner": "produkcja@salesmanago.pl",
        "newEmail": "",
        "forceOptIn": true,
        "forceOptOut": false,
        "forcePhoneOptIn": true,
        "forcePhoneOptOut": false,
        "tags": ["KONTAKT_TESTOWY", "DODANE_PRZEZ_API"],
        "removeTags": ["Test_tag", "New"],
        "properties": {
          "custom.nickname": $scope.contacttName,
          "custom.sex": "M"
        },
        "dictionaryProperties": [{
            "name": "birthday",
            "type": "DATE",
            "value": 1488927600000
          },
          {
            "name": "visits",
            "type": "NUMBER",
            "value": 42
          }
        ],
        "birthday": "19801017",
        "province": "Małopolska",
        "useApiDoubleOptIn": true,
        "apiDoubleOptInEmailTemplateId": null,
        "apiDoubleOptInEmailAccountId": null,
        "apiDoubleOptInEmailSubject": null,
        "lang": "PL",
        "consentDetails": [{
            "consentName": "ZGODA",
            "consentAccept": true,
            "agreementDate": 1391167515515,
            "ip": "192.168.7.139"
          },
          {
            "consentName": "ZGODA2",
            "consentAccept": false,
            "agreementDate": 1391167515789,
            "ip": "192.168.7.139"
          }
        ]
      }
    }).then(function successCallback(response) {
      console.log(response);
      if (response.data.success == false) {
        $scope.errorMessage = 'Coś poszło nie tak';
        $scope.successMessage = '';
      } else if(response.data.success == true) {
        $scope.successMessage = 'Kontakt został dodany';
        $scope.errorMessage = '';
      };
    }, function errorCallback(response) {
      console.log(response);
    })
  };

  $scope.errorMessage = '';

  $scope.getData = function () {
    $http({
      method: 'POST',
      url: 'https://cors-anywhere.herokuapp.com/http://app2.salesmanago.pl/api/contact/recentActivity',
      headers: {
        "Accept": "application/json, application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        "async": true,
        "apiKey": "asdfjkh2323asdf",
        "clientId": "36ah1dxt6fpehf53",
        "sha": "2ebf4bec5faab710c5d6368943013cda1ae9ea9b",
        "owner": "produkcja@salesmanago.pl",
        "requestTime": 1327059355361,
        "from": 1529359200000,
        "to": 1529791200000,
        "allVisits": true,
        "ipDetails": true
      }
    }).then(function successCallback(response) {
      console.log(response);
      $scope.monitoredContacts = response.data.recentActivity.totalContacts;

    }, function errorCallback(response) {
      console.log(response);
    })
  };




}]);