/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dellnaresh.exchangerate;

import java.math.BigDecimal;
import javax.money.CurrencyUnit;
import javax.money.NumberValue;
import javax.money.convert.ExchangeRate;
import javax.money.convert.ExchangeRateProvider;
import javax.money.convert.MonetaryConversions;

/**
 *
 * @author NARESHM
 */
public class CurrencyExchange {
      public static NumberValue getRate(CurrencyUnit fromCurrencyUnit,CurrencyUnit toCurrencyUnit ){
        ExchangeRateProvider exchangeRateProvider=MonetaryConversions.getExchangeRateProvider();
        ExchangeRate exchangeRate = exchangeRateProvider.getExchangeRate(fromCurrencyUnit,toCurrencyUnit);
        return exchangeRate.getFactor();
    }
}
