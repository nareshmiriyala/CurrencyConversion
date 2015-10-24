/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dellnaresh.controller;

import com.dellnaresh.entity.Exchangerate;
import com.dellnaresh.entity.RateRepository;
import com.dellnaresh.resources.Rate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.dellnaresh.exchangerate.CurrencyExchange;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.money.CurrencyUnit;
import javax.money.NumberValue;

import org.javamoney.moneta.CurrencyUnitBuilder;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

/**
 * @author NARESHM
 */
@RestController
public class CurrencyExchangeController {
    private Logger logger=LoggerFactory.getLogger(CurrencyExchangeController.class);
    @Autowired
    private RateRepository repository;
    @RequestMapping(method = RequestMethod.POST, value = "/getrate",consumes = {"application/json", "application/xml"})
    public double getConversionRate(@RequestBody Rate rate) {
        logger.info("Rate Data:"+rate);
        CurrencyUnitBuilder of = CurrencyUnitBuilder.of(rate.getFrom(), "ECB");
        CurrencyUnit fromCu = of.build();
        CurrencyUnitBuilder to = CurrencyUnitBuilder.of(rate.getTo(), "ECB");
        CurrencyUnit toCu = to.build();
        NumberValue numberValue = CurrencyExchange.getRate(fromCu, toCu);
        return numberValue.doubleValue();
    }
    @Transactional(readOnly = true)
    @RequestMapping(method = RequestMethod.POST, value = "/gethistory",consumes = {"application/json", "application/xml"})
    public List<Exchangerate> getConversionHistory(@RequestBody Rate rate) {
            logger.info("Get History input {}",rate);
        List<Exchangerate> exchangerateList = this.repository.findAll(rate.getFrom(), rate.getTo(), rate.getStartdate());
        return exchangerateList;
    }
    @RequestMapping(method = RequestMethod.POST, value = "/addrate",consumes = {"application/json", "application/xml"})
    public void addConversionHistory(@RequestBody Rate rate) {
        logger.info("Add History input {}",rate);
        this.repository.add(rate.getFrom(),rate.getTo(),rate.getRateValue(),rate.getStartdate());
    }

}
