/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dellnaresh.resources;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

/**
 * @author NARESHM
 */
public class Rate {
   private String from;
    private String to;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private Date startdate;
    double rateValue;
    public Rate() {

    }

    public Rate(String from, String to) {
        this.from = from;
        this.to = to;
    }

    public Rate(String from, String to, Date startdate) {
        this.from = from;
        this.to = to;
        this.startdate = startdate;
    }

    public Rate(String from, String to, Date startdate, double rateValue) {
        this.from = from;
        this.to = to;
        this.startdate = startdate;
        this.rateValue = rateValue;
    }

    public double getRateValue() {
        return rateValue;
    }

    public void setRateValue(double rateValue) {
        this.rateValue = rateValue;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    @Override
    public String toString() {
        return "Rate{" +
                "from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", startdate=" + startdate +
                '}';
    }
}
