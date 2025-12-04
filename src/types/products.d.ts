export interface Iproduct{

    id:number;
    name:string;
    price:number;
    qty:number;
 

}

export interface Iproductprops{
  product:Iproduct
}

export interface Icartstate extends Iproduct{
  new_qty:number;
}

export interface ICartSliceState
{
  Products:Icartstate[];
}