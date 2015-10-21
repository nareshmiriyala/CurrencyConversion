package com.dellnaresh.entity;

import org.springframework.stereotype.Repository;

import javax.money.convert.ExchangeRate;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.Date;
import java.util.List;

/**
 * Created by nareshm on 16/10/2015.
 */
@Repository
public class ExchangeRateRepository implements RateRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Exchangerate> findAll() {
        return this.entityManager.createQuery("SELECT n FROM Exchangerate n", Exchangerate.class)
                .getResultList();
    }

    @Override
    public List<Exchangerate> findAll(String from, String to, Date startdate) {
        TypedQuery<Exchangerate> query = this.entityManager.createQuery("SELECT n FROM Exchangerate n WHERE n.fromcurrency=:arg1 and n.tocurrency=:arg2 ", Exchangerate.class);
        query.setParameter("arg1",from);
        query.setParameter("arg2",to);
//        query.setParameter("arg3",startdate);
        return query.getResultList();
    }

    @Override
    public void add(String from, String to, double rate,Date startdate) {
        Exchangerate rate1= new Exchangerate(from,to,rate,startdate);
        this.entityManager.persist(rate1);
    }

}
