var viewAirportsApp = angular.module('viewAirportsApp', [ 'ngRoute',
		'airportControllers', 'ngResource',
		'angularUtils.directives.dirPagination' ]);

viewAirportsApp.factory("Airport", function($resource) {
	return $resource("api/list?filter=:filter");
});

viewAirportsApp.factory("Types", function($resource) {
	return $resource("api/types");
});

viewAirportsApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/airports', {
		templateUrl : 'partials/airport-list.jsp',
		controller : 'AirportListCtrl'
	}).when('/airports/:id', {
		templateUrl : 'partials/airport-details.jsp',
		controller : 'AirportDetailCtrl'
	}).otherwise({
		redirectTo : '/airports'
	});
} ]);

var airportControllers = angular.module('airportControllers',
		[ 'ui.bootstrap' ]);

airportControllers
		.controller(
				"AirportListCtrl",
				function($scope, Airport, Types, $log, $location, $routeParams) {
					$scope.airports = [];
					$scope.numPerPage = 10;
					$scope.totalItems = 0;
					$scope.typeSelection = [ "Airports", "Military Airport",
							"Sea Plane Base", "Other Airport",
							"Railway Stations", "Heliport2", "Bus Stations",
							"Off-line Point", "Harbours" ];
					$scope.defaultFilter = '"Airports", "Military Airport", "Sea Plane Base", "Other Airport","Railway Stations", "Heliport2", "Bus Stations","Off-line Point","Harbours"';

					Types.query(function(data) {
						$log.debug("successfully loaded types");
						$scope.types = data;
					});

					$scope.sort = function(keyname) {
						$scope.sortKey = keyname;
						$scope.reverse = !$scope.reverse;
						$log.debug("Inside sort method. keyname: "
								+ $scope.sortKey + ", reverse: "
								+ $scope.reverse)
					};

					$scope.allClicked = function() {
						$log.debug("All clicked");
						if ($scope.all) {
							$scope.typeSelection = [ "Airports",
									"Military Airport", "Sea Plane Base",
									"Other Airport", "Railway Stations",
									"Heliport2", "Bus Stations",
									"Off-line Point", "Harbours" ];
						} else {
							$scope.typeSelection = [];
						}
					};

					$scope.toggleSelectionType = function(type) {
						$log.debug("Inside toggleSelectionType()");
						$log.debug("type: " + type);

						var idx = $scope.typeSelection.indexOf(type);
						// is currently selected
						if (idx > -1) {
							$log.debug("Already selected")
							$scope.typeSelection.splice(idx, 1);
						}
						// is newly selected
						else {
							$log
									.debug("Push newly selected file extension to typeSelection array");
							$scope.typeSelection.push(type);
						}

						$scope.typeStr = "";
						for (var i = 0; i < $scope.typeSelection.length; i++) {
							if ($scope.typeSelection[i]) {
								// $scope.typeStr +=
								// encodeURIComponent($scope.typeSelection[tmp])
								// + ",";
								$scope.typeStr += "'" + $scope.typeSelection[i]
										+ "'";
								if (i != ($scope.typeSelection.length - 1))
									$scope.typeStr += ","
							}
						}
						$log.debug("typeStr: " + $scope.typeStr);

						Airport
								.query(
										{
											filter : $scope.typeStr
										},
										function(data) {
											$log
													.debug("successfully loaded airports")
											$log.debug("Filter is "
													+ $scope.typeStr);
											$scope.airports = data;
											for (i = 0; i < $scope.airports.length; i++) {
												// console.log("seeing "+
												// $scope.airports[i].name);
												if ($scope.mapping[$scope.airports[i].country])
													$scope.airports[i].countryImage = $scope.mapping[$scope.airports[i].country];
												// console.log("setting
												// countryImage:" +
												// $scope.airports[i].countryImage);
											}
											$scope.totalItems = $scope.airports.length;
											$log.debug("totalItems: "
													+ $scope.totalItems
													+ ", numPerPage: "
													+ $scope.numPerPage)
										});
					};

					$scope
							.$watch(
									'currentPage + numPerPage',
									function() {
										Airport
												.query(
														{
															filter : $scope.typeStr
														},
														function(data) {
															$log
																	.debug("successfully loaded airports")
															$log
																	.debug("Filter is "
																			+ $scope.typeStr);
															$scope.airports = data;
															for (i = 0; i < $scope.airports.length; i++) {
																// console.log("seeing
																// "+
																// $scope.airports[i].name);
																if ($scope.mapping[$scope.airports[i].country])
																	$scope.airports[i].countryImage = $scope.mapping[$scope.airports[i].country];
																// console.log("setting
																// countryImage:"
																// +
																// $scope.airports[i].countryImage);
															}
															$scope.totalItems = $scope.airports.length;
															$log
																	.debug("totalItems: "
																			+ $scope.totalItems
																			+ ", numPerPage: "
																			+ $scope.numPerPage)
														});
									});

					$scope.mapping = {
						"Andorra" : "AD",
						"United Arab Emirates" : "AE",
						"Afghanistan" : "AF",
						"Antigua and Barbuda" : "AG",
						"Anguilla" : "AI",
						"Albania" : "AL",
						"Armenia" : "AM",
						"Angola" : "AO",
						"Argentina" : "AR",
						"American Samoa" : "AS",
						"Austria" : "AT",
						"Australia" : "AU",
						"Aruba" : "AW",
						"\u00c5land Islands" : "AX",
						"Azerbaijan" : "AZ",
						"Bosnia and Herzegovina" : "BA",
						"Barbados" : "BB",
						"Bangladesh" : "BD",
						"Belgium" : "BE",
						"Burkina Faso" : "BF",
						"Bulgaria" : "BG",
						"Bahrain" : "BH",
						"Burundi" : "BI",
						"Benin" : "BJ",
						"Bermuda" : "BM",
						"Brunei Darussalam" : "BN",
						"Bolivia, Plurinational State of" : "BO",
						"Brazil" : "BR",
						"Bahamas" : "BS",
						"Bhutan" : "BT",
						"Botswana" : "BW",
						"Belarus" : "BY",
						"Belize" : "BZ",
						"Canada" : "CA",
						"Cocos (Keeling) Islands" : "CC",
						"Congo, the Democratic Republic of the" : "CD",
						"Central African Republic" : "CF",
						"Congo" : "CG",
						"Switzerland" : "CH",
						"C\u00f4te d'Ivoire" : "CI",
						"Cook Islands" : "CK",
						"Chile" : "CL",
						"Cameroon" : "CM",
						"China" : "CN",
						"Colombia" : "CO",
						"Costa Rica" : "CR",
						"Cuba" : "CU",
						"Cape Verde" : "CV",
						"Cura\u00e7ao" : "CW",
						"Christmas Island" : "CX",
						"Cyprus" : "CY",
						"Czech Republic" : "CZ",
						"Germany" : "DE",
						"Djibouti" : "DJ",
						"Denmark" : "DK",
						"Dominica" : "DM",
						"Dominican Republic" : "DO",
						"Algeria" : "DZ",
						"Ecuador" : "EC",
						"Estonia" : "EE",
						"Egypt" : "EG",
						"Eritrea" : "ER",
						"Spain" : "ES",
						"Ethiopia" : "ET",
						"Finland" : "FI",
						"Fiji" : "FJ",
						"Falkland Islands (Malvinas)" : "FK",
						"Micronesia, Federated States of" : "FM",
						"Faroe Islands" : "FO",
						"France" : "FR",
						"Gabon" : "GA",
						"United Kingdom" : "GB",
						"Grenada" : "GD",
						"Georgia" : "GE",
						"Guernsey" : "GG",
						"Ghana" : "GH",
						"Gibraltar" : "GI",
						"Greenland" : "GL",
						"Gambia" : "GM",
						"Guinea" : "GN",
						"Equatorial Guinea" : "GQ",
						"Greece" : "GR",
						"South Georgia and the South Sandwich Islands" : "GS",
						"Guatemala" : "GT",
						"Guam" : "GU",
						"Guinea-Bissau" : "GW",
						"Guyana" : "GY",
						"Hong Kong" : "HK",
						"Honduras" : "HN",
						"Croatia" : "HR",
						"Haiti" : "HT",
						"Hungary" : "HU",
						"Indonesia" : "ID",
						"Ireland" : "IE",
						"Israel" : "IL",
						"Isle of Man" : "IM",
						"India" : "IN",
						"British Indian Ocean Territory" : "IO",
						"Iraq" : "IQ",
						"Iran, Islamic Republic of" : "IR",
						"Iceland" : "IS",
						"Italy" : "IT",
						"Jersey" : "JE",
						"Jamaica" : "JM",
						"Jordan" : "JO",
						"Japan" : "JP",
						"Kenya" : "KE",
						"Kyrgyzstan" : "KG",
						"Cambodia" : "KH",
						"Kiribati" : "KI",
						"Comoros" : "KM",
						"Saint Kitts and Nevis" : "KN",
						"Korea, Democratic People's Republic of" : "KP",
						"Korea, Republic of" : "KR",
						"Kuwait" : "KW",
						"Cayman Islands" : "KY",
						"Kazakhstan" : "KZ",
						"Lao People's Democratic Republic" : "LA",
						"Lebanon" : "LB",
						"Saint Lucia" : "LC",
						"Liechtenstein" : "LI",
						"Sri Lanka" : "LK",
						"Liberia" : "LR",
						"Lesotho" : "LS",
						"Lithuania" : "LT",
						"Luxembourg" : "LU",
						"Latvia" : "LV",
						"Libya" : "LY",
						"Morocco" : "MA",
						"Monaco" : "MC",
						"Moldova, Republic of" : "MD",
						"Montenegro" : "ME",
						"Madagascar" : "MG",
						"Marshall Islands" : "MH",
						"Macedonia, the former Yugoslav Republic of" : "MK",
						"Mali" : "ML",
						"Myanmar" : "MM",
						"Mongolia" : "MN",
						"Macao" : "MO",
						"Northern Mariana Islands" : "MP",
						"Martinique" : "MZ",
						"Mauritania" : "MR",
						"Montserrat" : "MS",
						"Malta" : "MT",
						"Mauritius" : "MU",
						"Maldives" : "MV",
						"Malawi" : "MW",
						"Mexico" : "MX",
						"Malaysia" : "MY",
						"Mozambique" : "MZ",
						"Namibia" : "NA",
						"New Caledonia" : "NC",
						"Niger" : "NE",
						"Norfolk Island" : "NF",
						"Nigeria" : "NG",
						"Nicaragua" : "NI",
						"Netherlands" : "NL",
						"Norway" : "NO",
						"Nepal" : "NP",
						"Nauru" : "NR",
						"Niue" : "NU",
						"New Zealand" : "NZ",
						"Oman" : "OM",
						"Panama" : "PA",
						"Peru" : "PE",
						"French Polynesia" : "PF",
						"Palestine" : "PS",
						"Papua New Guinea" : "PG",
						"Philippines" : "PH",
						"Pakistan" : "PK",
						"Poland" : "PL",
						"Pitcairn" : "PN",
						"Puerto Rico" : "PR",
						"Portugal" : "PT",
						"Palau" : "PW",
						"Paraguay" : "PY",
						"Qatar" : "QA",
						"Réunion" : "RE",
						"Romania" : "RO",
						"Serbia" : "RS",
						"Russian Federation" : "RU",
						"Rwanda" : "RW",
						"Saudi Arabia" : "SA",
						"Solomon Islands" : "SB",
						"Seychelles" : "SC",
						"Sudan" : "SD",
						"Sweden" : "SE",
						"Singapore" : "SG",
						"Saint Helena, Ascension and Tristan da Cunha" : "SH",
						"Slovenia" : "SI",
						"Slovakia" : "SK",
						"Sierra Leone" : "SL",
						"San Marino" : "SM",
						"Senegal" : "SN",
						"Somalia" : "SO",
						"Suriname" : "SR",
						"South Sudan" : "SS",
						"Sao Tome and Principe" : "ST",
						"El Salvador" : "SV",
						"Sint Maarten (Dutch part)" : "SX",
						"Syrian Arab Republic" : "SY",
						"Swaziland" : "SZ",
						"Turks and Caicos Islands" : "TC",
						"Chad" : "TD",
						"French Southern Territories" : "TF",
						"Togo" : "TG",
						"Thailand" : "TH",
						"Tajikistan" : "TJ",
						"Tokelau" : "TK",
						"Timor-Leste" : "TL",
						"Turkmenistan" : "TM",
						"Tunisia" : "TN",
						"Tonga" : "TO",
						"Turkey" : "TR",
						"Trinidad and Tobago" : "TT",
						"Tuvalu" : "TV",
						"Tanzania, United Republic of" : "TZ",
						"Taiwan, Province of China" : "TW",
						"Ukraine" : "UA",
						"Uganda" : "UG",
						"United States" : "US",
						"Uruguay" : "UY",
						"Uzbekistan" : "UZ",
						"Holy See (Vatican City State)" : "VA",
						"Saint Vincent and the Grenadines" : "VC",
						"Venezuela, Bolivarian Republic of" : "VE",
						"Virgin Islands, British" : "VG",
						"Virgin Islands, U.S." : "VI",
						"Viet Nam" : "VN",
						"Vanuatu" : "VU",
						"Samoa" : "WS",
						"Yemen" : "YE",
						"South Africa" : "ZA",
						"Zambia" : "ZM",
						"Zimbabwe" : "ZW"
					};

					$scope.typeStr = "";
					for (var i = 0; i < $scope.typeSelection.length; i++) {
						if ($scope.typeSelection[i]) {
							// $scope.typeStr +=
							// encodeURIComponent($scope.typeSelection[tmp])
							// + ",";
							$scope.typeStr += "'" + $scope.typeSelection[i]
									+ "'";
							if (i != ($scope.typeSelection.length - 1))
								$scope.typeStr += ","
						}
					}

					Airport
							.query(
									{
										filter : $scope.typeStr
									},
									function(data) {
										$log
												.debug("successfully loaded airports")
										$log.debug("Filter is "
												+ $routeParams.filter);
										$scope.airports = data;
										for (i = 0; i < $scope.airports.length; i++) {
											// console.log("seeing "+
											// $scope.airports[i].name);
											if ($scope.mapping[$scope.airports[i].country])
												$scope.airports[i].countryImage = $scope.mapping[$scope.airports[i].country];
											// console.log("setting
											// countryImage:" +
											// $scope.airports[i].countryImage);
										}
										$scope.totalItems = $scope.airports.length;
										$log.debug("totalItems: "
												+ $scope.totalItems
												+ ", numPerPage: "
												+ $scope.numPerPage)
									});

				});

airportControllers.controller('AirportDetailCtrl', function($scope,
		$routeParams, Airport, $http, $location, $log) {
	$log.debug("Inside AirportDetailCtrl");
	Airport.get({
		id : $routeParams.id
	}, function(data) {
		$scope.airport = data;
	});
});
