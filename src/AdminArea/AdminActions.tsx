import React from "react";
  
const basePath='/admin'

export const AdminActions=[

    {
        action:'Add Company',
        description:'',
        path:basePath+'/add-company'
    },

    {
        action:'Update Company',
        description:'',
        path:basePath+'/update-company'
    },

    {
        action:'Delete Company',
        description:'',
        path:basePath+'/delete-company'
    },
    {
        action:'Get All Companies',
        description:'',
        path:basePath+'/get-all-companies'
    },

    {
        action:'Get One Company',
        description:'',
        path:basePath+'/get-one-company'
    },
    {
        action:'Add Customer',
        description:'',
        path:basePath+'/add-customer'
    },

    {
        action:'Update Customer',
        description:'',
        path:basePath+'/update-customer'
    },

    {
        action:'Delete Customer',
        description:'',
        path: basePath+'/delete-customer'
    },


    {
        action:'Get All Customers',
        description:'',
        path: basePath+ '/get-all-customers'
    },

    {
        action:'Get One Customer',
        description:'',
        path: basePath+'/get-one-customer'
    }


]