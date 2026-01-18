import React,{ useState } from "react";
import currencyInfo from "./hooks/useCurencyInfo";

function App(){
   const [currency,setcurrency]=useState("inr");
    const data=currencyInfo(currency);

    return(
       <div>
        <h1>Currency Converter</h1>

        <select value={currency} onChange={(e)=>setcurrency(e.target.value)}>
           <option value="inr">Indian Rupee (INR)</option>
<option value="usd">US Dollar (USD)</option>
<option value="eur">Euro (EUR)</option>
<option value="gbp">British Pound (GBP)</option>
<option value="jpy">Japanese Yen (JPY)</option>
<option value="aud">Australian Dollar (AUD)</option>
<option value="cad">Canadian Dollar (CAD)</option>
<option value="cny">Chinese Yuan (CNY)</option>
<option value="aed">UAE Dirham (AED)</option>
<option value="sgd">Singapore Dollar (SGD)</option>
<option value="chf">Swiss Franc (CHF)</option>
<option value="nzd">New Zealand Dollar (NZD)</option>
<option value="zar">South African Rand (ZAR)</option>
<option value="rub">Russian Ruble (RUB)</option>
<option value="krw">South Korean Won (KRW)</option>
<option value="mxn">Mexican Peso (MXN)</option>
<option value="brl">Brazilian Real (BRL)</option>
<option value="try">Turkish Lira (TRY)</option>
<option value="thb">Thai Baht (THB)</option>
<option value="myr">Malaysian Ringgit (MYR)</option>
<option value="idr">Indonesian Rupiah (IDR)</option>
<option value="php">Philippine Peso (PHP)</option>
<option value="pln">Polish Zloty (PLN)</option>
<option value="sek">Swedish Krona (SEK)</option>
<option value="nok">Norwegian Krone (NOK)</option>
<option value="dkk">Danish Krone (DKK)</option>
<option value="hkd">Hong Kong Dollar (HKD)</option>
<option value="ils">Israeli Shekel (ILS)</option>
<option value="sar">Saudi Riyal (SAR)</option>
<option value="egp">Egyptian Pound (EGP)</option>
<option value="pkr">Pakistani Rupee (PKR)</option>
<option value="bdt">Bangladeshi Taka (BDT)</option>
<option value="lkr">Sri Lankan Rupee (LKR)</option>
<option value="ngn">Nigerian Naira (NGN)</option>
<option value="kes">Kenyan Shilling (KES)</option>
<option value="vnd">Vietnamese Dong (VND)</option>
<option value="czk">Czech Koruna (CZK)</option>
<option value="huf">Hungarian Forint (HUF)</option>
<option value="ron">Romanian Leu (RON)</option>
<option value="ars">Argentine Peso (ARS)</option>
<option value="clp">Chilean Peso (CLP)</option>
<option value="cop">Colombian Peso (COP)</option>
<option value="pen">Peruvian Sol (PEN)</option>
<option value="uah">Ukrainian Hryvnia (UAH)</option>
<option value="bgn">Bulgarian Lev (BGN)</option>
<option value="isk">Icelandic Krona (ISK)</option>
<option value="mad">Moroccan Dirham (MAD)</option>
<option value="twd">Taiwan Dollar (TWD)</option>
<option value="qar">Qatari Riyal (QAR)</option>
<option value="kwd">Kuwaiti Dinar (KWD)</option>
<option value="omr">Omani Rial (OMR)</option>
<option value="jod">Jordanian Dinar (JOD)</option>
<option value="bhd">Bahraini Dinar (BHD)</option>
<option value="sek">Swedish Krona (SEK)</option>
<option value="nok">Norwegian Krone (NOK)</option>

        </select>

    <h1>Rates</h1>
<p>India: {data.inr}</p>
<p>USA: {data.usd}</p>
<p>Euro: {data.eur}</p>
<p>UK: {data.gbp}</p>
<p>Japan: {data.jpy}</p>
<p>Australia: {data.aud}</p>
<p>Canada: {data.cad}</p>
<p>China: {data.cny}</p>
<p>UAE: {data.aed}</p>
<p>Singapore: {data.sgd}</p>
<p>Switzerland: {data.chf}</p>
<p>New Zealand: {data.nzd}</p>
<p>South Africa: {data.zar}</p>
<p>Russia: {data.rub}</p>
<p>South Korea: {data.krw}</p>
<p>Mexico: {data.mxn}</p>
<p>Brazil: {data.brl}</p>
<p>Turkey: {data.try}</p>
<p>Thailand: {data.thb}</p>
<p>Malaysia: {data.myr}</p>
<p>Indonesia: {data.idr}</p>
<p>Philippines: {data.php}</p>
<p>Poland: {data.pln}</p>
<p>Sweden: {data.sek}</p>
<p>Norway: {data.nok}</p>
<p>Denmark: {data.dkk}</p>
<p>Hong Kong: {data.hkd}</p>
<p>Israel: {data.ils}</p>
<p>Saudi Arabia: {data.sar}</p>
<p>Egypt: {data.egp}</p>
<p>Pakistan: {data.pkr}</p>
<p>Bangladesh: {data.bdt}</p>
<p>Sri Lanka: {data.lkr}</p>
<p>Nigeria: {data.ngn}</p>
<p>Kenya: {data.kes}</p>
<p>Vietnam: {data.vnd}</p>
<p>Czech Republic: {data.czk}</p>
<p>Hungary: {data.huf}</p>
<p>Romania: {data.ron}</p>
<p>Argentina: {data.ars}</p>
<p>Chile: {data.clp}</p>
<p>Colombia: {data.cop}</p>
<p>Peru: {data.pen}</p>
<p>Ukraine: {data.uah}</p>
<p>Bulgaria: {data.bgn}</p>
<p>Iceland: {data.isk}</p>
<p>Morocco: {data.mad}</p>
<p>Taiwan: {data.twd}</p>
<p>Qatar: {data.qar}</p>
<p>Kuwait: {data.kwd}</p>
<p>Oman: {data.omr}</p>
<p>Jordan: {data.jod}</p>
<p>Bahrain: {data.bhd}</p>

       </div>
    )
}
export default Aps;