class CustomerModel {
    public id?:number;
    public firstName?:string;
    public lastName?:string;
    public email?:string;
    public password?:string;
    public isActive?: boolean;
   
}

export default CustomerModel;

{/* 

 private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	@OneToMany
	private Collection<Coupon> coupons;
	private Boolean isActive;   

*/}