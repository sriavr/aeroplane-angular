package sridharjammalamadaka;

import java.util.List;

import org.hibernate.Session;
import org.junit.Assert;
import org.junit.Test;

import com.sridharjammalamadaka.util.HibernateUtil;

public class AirportTest {

	@Test
	public void testReadAirport() {
		Session session = HibernateUtil.getSessionFactory().openSession();
		List list = session.createQuery("from Airport").list();
		Assert.assertTrue(list.size() > 0);
		session.close();
	}

}
