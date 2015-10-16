package com.dellnaresh.entity;

import java.util.List;

/**
 * Created by nareshm on 16/10/2015.
 */
public interface RateRepository {

    List<Exchangerate> findAll();
}
