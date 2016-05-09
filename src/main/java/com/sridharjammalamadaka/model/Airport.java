package com.sridharjammalamadaka.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Data Parameters: airports[] —> { id, code, lat, lon, name, rating, city,
 * state, country, tz, type, url}
 * 
 * code AS text (airport code name)
 * 
 * lat, lon AS float (latitude, longitude of exact airport location ).
 * 
 * name AS text (name of the airport)
 * 
 * rating AS float (rating of the respective airport)
 * 
 * city, state AS text (name of the city, state where Airport is situated)
 * 
 * country AS text (country in which airport is situated)
 * 
 * tz AS text (timezone/clock of the airport)
 * 
 * type AS text (type of the airport)
 * 
 * url AS text (MMT Link to search for respective airport)
 * 
 * ^ Some parameters may have twist (null value, unicode) in it; handle it
 * gracefully!
 * 
 * @author sjj06600
 *
 */
@Entity
@Table(name = "mmt")
// @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Airport {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "code")
	private String code;

	@Column(name = "lat")
	private float lat;

	@Column(name = "lon")
	private float lon;

	@Column(name = "name")
	private String name;

	@Column(name = "rating")
	private float rating;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String state;

	@Column(name = "country")
	private String country;

	@Column(name = "tz")
	private String tz;

	@Column(name = "type")
	private String type;

	@Column(name = "url")
	private String url;

	@Column(name = "elev")
	private int elev;

	@Column(name = "direct_flight", nullable = true)
	private Integer directFlight;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public float getLat() {
		return lat;
	}

	public void setLat(float lat) {
		this.lat = lat;
	}

	public float getLon() {
		return lon;
	}

	public void setLon(float lon) {
		this.lon = lon;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getTz() {
		return tz;
	}

	public void setTz(String tz) {
		this.tz = tz;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getElev() {
		return elev;
	}

	public void setElev(int elev) {
		this.elev = elev;
	}

	public Integer getDirectFlight() {
		return directFlight;
	}

	public void setDirectFlight(Integer directFlight) {
		this.directFlight = directFlight;
	}

	public static void main(String[] args) {
		System.out.println("Hari ");
	}
}
