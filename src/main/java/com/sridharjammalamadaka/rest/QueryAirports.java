package com.sridharjammalamadaka.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.hibernate.Session;

import com.sridharjammalamadaka.model.Airport;
import com.sridharjammalamadaka.util.HibernateUtil;

@Path("/query")
public class QueryAirports {
	@Path("/{id}/index")
	@GET
	@Produces(value = "application/json")
	public List<Airport> queryAirports() {
		List list = null;
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			list = session.createQuery("from Airport").list();
			session.close();
		} catch (Exception ex) {
			System.out.println("Error occurred while getting projects.");
			ex.printStackTrace();
		}
		return list;
	}
}
