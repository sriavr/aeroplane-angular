package com.sridharjammalamadaka.rest;

import java.util.List;
import java.util.StringTokenizer;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.hibernate.Session;

import com.sridharjammalamadaka.model.Airport;
import com.sridharjammalamadaka.util.HibernateUtil;

@Path("/")
public class RestInterface {

	@Path("/list")
	@GET
	@Produces(value = "application/json")
	public List<Airport> getAirports(
			@DefaultValue("'Airports','Military Airport','Sea Plane Base','Railway Stations','Heliport2','Bus Stations','Off-line Point','Harbours'") @QueryParam("filter") String filter) {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "from Airport a";
			if (filter != null) {
				StringTokenizer st = new StringTokenizer(filter, ",");
				if (st.countTokens()>0){
					qry += " where a.type in ( " + filter + ")";
				}
			}
			list = session.createQuery(qry).list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

	@Path("/name/search")
	@GET
	@Produces(value = "application/json")
	public List<Airport> nameQuery(
			@DefaultValue("") @QueryParam("query") String query) {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "from Airport a where a.name like :name";
			list = session.createQuery(qry)
					.setParameter("name", "%" + query + "%").list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

	@Path("/country/search")
	@GET
	@Produces(value = "application/json")
	public List<Airport> countryQuery(
			@DefaultValue("") @QueryParam("query") String query) {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "from Airport a where a.country like :country";
			list = session.createQuery(qry)
					.setParameter("country", "%" + query + "%").list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

	@Path("/code/search")
	@GET
	@Produces(value = "application/json")
	public List<Airport> codeQuery(
			@DefaultValue("") @QueryParam("query") String query) {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "from Airport a where a.code like :code";
			list = session.createQuery(qry)
					.setParameter("code", "%" + query + "%").list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

	@Path("/search")
	@GET
	@Produces(value = "application/json")
	public List<Airport> generalQuery(
			@DefaultValue("") @QueryParam("query") String query) {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "from Airport a where a.code like :code or a.country like :code or a.name like :code";
			list = session.createQuery(qry)
					.setParameter("code", "%" + query + "%").list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

	@Path("/types")
	@GET
	@Produces(value = "application/json")
	public List<String> getTypes() {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			String qry = "select distinct type from Airport";
			list = session.createQuery(qry).list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting data.");
			ex.printStackTrace();
		}
		return list;
	}

}
