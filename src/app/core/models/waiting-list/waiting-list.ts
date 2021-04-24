import { Buyer, Product } from '../index'

export class WaitingList{

	Id!: string;
	Name!: string;
	Product!: Product;
	Buyers!: Buyer[];


	constructor(init?: Partial<WaitingList>){
		Object.assign(this, init);
	}
}