package com.dellnaresh.entity;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
}
