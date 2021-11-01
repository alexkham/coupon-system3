
import React from "react";
const baseUrl='/companies'

export const CompaniesActions=[

    {
        action:'Add Coupon',
        description:'',
        path: baseUrl+'/add-coupon'
    },

    {
        action:'Update Coupon',
        description:'',
        path: baseUrl+'/update-coupon'
    },

    {
        action:'Delete Coupon',
        description:'',
        path: baseUrl+'/delete-coupon'
    },

    {
        action:'Get Company Coupons',
        description:'',
        path: baseUrl+'/get-company-coupons'
    },

    {
        action:'Get Company Coupons by Category',
        description:'',
        path: baseUrl+'/get-company-coupons-by-category'
    },

    {
        action:'Get Company Coupons by Price',
        description:'',
        path: baseUrl+'/get-company-coupons-by-price'
    },

    {
        action:'Get Company Details',
        description:'',
        path: baseUrl+'/get-company-details'
    }



]