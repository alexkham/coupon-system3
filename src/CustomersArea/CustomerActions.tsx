
import React from "react";
const baseUrl='/customers'

export const CustomerActions=[

    {
        action:'Purchase Coupon',
        description:'',
        path: baseUrl+'/purchase-coupon'
    },

    {
        action:'Get Customer Coupons',
        description:'',
        path: baseUrl+'/get-customer-coupons'
    },

    {
        action:'Get Customer Coupons by Category',
        description:'',
        path: baseUrl+'/get-customer-coupons-by-category'
    },

    {
        action:'Get Customer Coupons by Price',
        description:'',
        path: baseUrl+'/get-customer-coupons-by-price'
    },

    {
        action:'Get Customer Detail',
        description:'',
        path: baseUrl+'/get-customer-details'
    }



]