/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dellnaresh.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.dellnaresh.exchangerate.CurrencyExchange;
import com.dellnaresh.resources.RateData;
import javax.money.CurrencyUnit;
import javax.money.NumberValue;
import org.javamoney.moneta.CurrencyUnitBuilder;
import org.springframework.web.bind.annotation.RequestBody;
/**
 *
 * @author NARESHM
 */
@RestController
public class CurrencyExchangeController {
     @RequestMapping(method = RequestMethod.POST,value="/getrate")
    public double getConversionRate(@RequestBody RateData rateData){
         CurrencyUnitBuilder of = CurrencyUnitBuilder.of(rateData.getFromCurrency(), "ECB");
         CurrencyUnit fromCu = of.build();
           CurrencyUnitBuilder to = CurrencyUnitBuilder.of(rateData.getToCurrency(), "ECB");
         CurrencyUnit toCu = to.build();
         NumberValue rate = CurrencyExchange.getRate(fromCu, toCu);
        return rate.doubleValue();
    }
}
