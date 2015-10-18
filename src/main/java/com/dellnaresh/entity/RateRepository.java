package com.dellnaresh.entity;

import java.util.Date;
import java.util.List;

/**
 * Created by nareshm on 16/10/2015.
 */
public interface RateRepository {

    List<Exchangerate> findAll();
    List<Exchangerate> findAll(String from,String to,Date startdate);
}
