class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        admin: "http://localhost:8082/coupon-system/admin/", 
        company: "http://localhost:8082/coupon-system/company/",
        customer: "http://localhost:8082/coupon-system/customer/"
    }
}

class ProductionGlobabls extends Globals{
    public urls = {
        admin: "http://localhost:8082/coupon-system/admin/", 
        company: "http://localhost:8082/coupon-system/company/",
        customer: "http://localhost:8082/coupon-system/customer/"
    }
}



const globals = process.env.NODE_ENV === "production" ? new ProductionGlobabls(): new DevelopmentGlobals();

export default globals;