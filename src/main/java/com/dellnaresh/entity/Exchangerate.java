package com.dellnaresh.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by nareshm on 20/10/2015.
 */
@Entity
public class Exchangerate {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    private String fromcurrency;

    private String tocurrency;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private double rate;

    private Date currentdate;

    public Exchangerate(){

    }

    public Exchangerate(String fromcurrency, String tocurrency, double rate, Date currentdate) {
        this.fromcurrency = fromcurrency;
        this.tocurrency = tocurrency;
        this.rate = rate;
        this.currentdate = currentdate;
    }

    public String getFromcurrency() {
        return fromcurrency;
    }

    public void setFromcurrency(String fromcurrency) {
        this.fromcurrency = fromcurrency;
    }

    public String getTocurrency() {
        return tocurrency;
    }

    public void setTocurrency(String tocurrency) {
        this.tocurrency = tocurrency;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public Date getCurrentdate() {
        return currentdate;
    }

    public void setCurrentdate(Date currentdate) {
        this.currentdate = currentdate;
    }
}
