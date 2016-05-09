<style>
</style>
<div class="container">
	<div class="page-header">
		<h1 align="center">
			<i class="fa fa-plane"></i> Airports
		</h1>
	</div>

	<div class="col-md-3">

		<div class="panel panel-primary">
			<div class="panel-heading">Type</div>
			<div class="panel-body">
				<div class="facet-panel checkbox">
					<!--  <label><input type="checkbox" name="all" ng-model="all"
						ng-click="allClicked()" value="All" ng-checked="true"> All </label>  <br> -->
					<span ng-repeat="type in types track by $index"> <label> <input
							type="checkbox" name="selectedTypes[]" value={{type}}
							ng-checked="true" ng-click="toggleSelectionType(type)" />
							{{type}}
					</label><br>
					</span>
				</div>
			</div>
		</div>

		<div class="panel panel-primary">
			<div class="panel-heading">Sort By</div>
			<div class="panel-body">
				<div class="facet-panel checkbox">
					<input type="radio" name="grp1" ng-click="sort('elev')" value="1">
					Elevation <br> <input type="radio" name="grp1"
						ng-click="sort('direct_flight')" value="2"> Direct Flight<br>
					<input type="radio" name="grp1" ng-click="sort('rating')" value="3">
					Rating <br> </span>
				</div>
			</div>
		</div>

	</div>

	<div class="col-md-9">
		<div style="height: 50px;">
			<div class="row">
				<div class="col-md-3 pull-left" style="padding-left: 5px;">
					<p class="text-left">
						<input type="text" class="form-control" id="searchTextbox"
							placeholder="Quick Search" ng-model="airportSearch">
					</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="pull-right">
				Sort By:
				<div class="btn-group">
					<label class="btn btn-default" ng-model="radioModel"
						ng-click="sort('rating')" uncheckable>Rating<span
						class="glyphicon sort-icon" ng-show="sortKey=='rating'"
						ng-class="{'glyphicon-chevron-up':!reverse,'glyphicon-chevron-down':reverse}"></span>
					</label>
				</div>
			</div>
		</div>
		<div class="row">
			Results per page: <select ng-model="numPerPage" class="dropdown">
				<option value="10" selected>10</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="100">100</option>
				<option value="200">200</option>
			</select>
			<div class="col-md-12"
				dir-paginate="airport in airports | orderBy:sortKey:reverse | filter:airportSearch | itemsPerPage : numPerPage">
				<div class="row">
					<div class="list-panel-box">
						<div class="panel panel-primary">
							<div class="panel-body">
								<div class="col-md-2">
									<div class="row">
										<img class="img img-responsive"
											ng-src="images/{{airport.countryImage | lowercase}}.png" />
									</div>
								</div>
								<div class="col-md-6">
									<h3 style="padding-left: 10px;">
										<a href="index.jsp#/airports/{{airport.code}}">{{airport.name}}</a>
									</h3>

									<div data-score="{{ airport.rating }}" class="rating"></div>
									<rating ng-model="airport.rating" max="5" readonly="true"></rating>

									&nbsp;&nbsp;<i class="fa fa-link" aria-hidden="true"></i> <a
										ng-hide="airport.url == null" href="{{airport.url}}">know
										more</a>
								</div>
								<div class="col-md-4">
									<i class="fa fa-map-marker" aria-hidden="true"></i> <a
										href="https://www.google.com/maps/place/{{airport.lat}},{{airport.lon}}">{{airport.city}},
										{{airport.country}}</a> <br> <i class="fa fa-location-arrow"
										aria-hidden="true"></i> Elevation: {{airport.elev}} <br>
									<i class="fa fa-paper-plane" aria-hidden="true"></i> Direct
									Flight: {{airport.directFlight}}
								</div>
								<!-- id: {{airport.id}}, code:
									{{airport.code}}, lat: {{airport.lat}}, lon: {{airport.lon}} ,
									rating: {{airport.rating}}, , state:
									{{airport.state}}, country: , tz:
									{{airport.tz}}, types: {{airport.types}}, url: ,
									elev : , directflight: 
									countryImage: {{airport.countryImage}}  -->
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div>
					<dir-pagination-controls direction-links="true"
						boundary-links="true"></dir-pagination-controls>
				</div>
			</div>
		</div>
	</div>


</div>