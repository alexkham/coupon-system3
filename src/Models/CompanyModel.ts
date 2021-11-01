class CompanyModel {

    
    public companyId?:number;
    public name?:string;
    public email?: string;
    public password?: string;
    public isActive? : boolean;
}

export default CompanyModel;

/*

private Long companyId;
	private String companyName;
	private String email;
	private String password;
	private Boolean isActive;
	@OneToMany
	private Collection<Coupon> companyCoupons;

*/ 