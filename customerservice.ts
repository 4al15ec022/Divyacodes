import{customer} from './../model/customer';

const arrcust=[new customer(1,"bhairavi","mysore",45),new customer(2,"anand","nagamangala",15),new customer(3,"vivek","hamsanagar",18),new customer(4,"vinay","moodbidri",21)];
export class CustomerService{
constructor(){}
public getCustomers():customer[]{
    return arrcust;
}

public getCustomerById(cid):customer{
    var c1;
    arrcust.forEach(c =>{
        
        if(c.cid ==cid){
            c1=c;
    
        }else
            return "not found";
    });
    return c1;
}
public addCustomer(cust:customer){
    arrcust.push(cust);
}

public updateCustomer(cust:customer){
    console.log(cust.cid);
    var upd =this.getCustomerById(cust.cid);
    arrcust.forEach(c=>{
        if (c.cid==cust.cid){
            c.cname=cust.cname;
            c.cloc=cust.cloc;
            c.cage=cust.cage;
        }
    })
    return upd;
}

public deleteCustomer(cust:customer){
    var dcust=this.getCustomerById(cust.cid);
    arrcust.pop();
}
ngOnInit(){

}
}