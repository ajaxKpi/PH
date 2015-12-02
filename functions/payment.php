<?php
/**
 * Created by PhpStorm.
 * User: zvorskyi
 * Date: 01.12.2015
 * Time: 12:16
 */

if(isset($_POST['Mode'])){
    $public_key ="i22615008395";
    $private_key = "wPd44vyFAeu8BzJwxnhehkJeB6Viwj6Z7SdLcOOS";



    $curr_date =  getdate();
    $reg_day = $curr_date["mday"];
    $reg_hour = $curr_date["hours"];
    $reg_min = $curr_date["minutes"];
    $reg_sec = $curr_date["seconds"];


    $order_id = "order#".$reg_day.$reg_hour.$reg_min.$reg_sec;

if ($_POST['Mode']=="350h"){
    $description = "Оплата тренинга";
    $amount = 350;}
    elseif($_POST['Mode']=="500h") {
        $description = "Оплата тренинга";
        $amount = 500;
    }
    else{
        $description = "Предоплата тренинга";
        $amount = 100;
    }


    require_once "Liquid.php";
    $liqpay = new LiqPay($public_key, $private_key);
    $html = $liqpay->cnb_form(array(
        'version'        => '3',
        'amount'         => $amount,
        'currency'       => 'UAH',
        'description'    => $description,
        'order_id'       => $order_id,
        'type' => 'buy',

        'language'=>'uk'
    ));


    echo json_encode($html);
}

