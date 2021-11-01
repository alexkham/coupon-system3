import CategoryModel from "./CategoryModel";
import CompanyModel from "./CompanyModel";

class CouponModel {
    
    public id?:number;
    public company:CompanyModel;
    public category?:CategoryModel;
    public title?:string;
    public description?:string;
    public startDate?: any;
    public endDate?: any;
    public quantity?:number;
    public unitPrice?:number;
    public imageUrl?: string;
    public isActive? : boolean;
}

export default CouponModel;

/*
private Long id;
	private Long companyId;
	private Long categoryId;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private Integer quantity;
	private Double unitPrice;
	private String imageUrl;
	private Boolean isActive;
	

*/