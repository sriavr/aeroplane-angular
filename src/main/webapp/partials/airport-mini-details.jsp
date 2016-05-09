<div id="mini-container" class="project-desc-box" style="width=400px">
	<h3>{{airport.name}}</h3>
	<dl class="dl-horizontal">
		<dt>
			<h5>Details</h5>
		</dt>
		<dd>
			<h5>ID: {{airport.id}}, Code:{{airport.code}}</h5>
		</dd>
		<dt>
			<h5>Coordinates</h5>
		</dt>
		<dd>
			<h5>{{airport.lat}},{{airport.lon}}</h5>
		</dd>
		<dt>
			<h5>Rating</h5>
		</dt>
		<dd>
			<h5>{{airport.rating}}</h5>
		</dd>
		<dt>
			<h5>Location</h5>
		</dt>
		<dd>
			<h5>{{airport.city}},{{airport.state}},{{airport.country}}</h5>
		</dd>

		<dt>
			<h5>Url</h5>
		</dt>
		<dd>
			<h5>
				<a href="{{airport.url}}">{{airport.url}}</a>
			</h5>
		</dd>
		<dt>
			<h5>Elevation</h5>
		</dt>
		<dd>
			<h5>{{airport.elev}}</h5>
		</dd>
		<dt>
			<h5>Direct Flight</h5>
		</dt>
		<dd>
			<h5>{{airport.directFlight}}</h5>
		</dd>
	</dl>
</div>