export class Product{

	Id!: string;
	Name!: string;
	TargetAmount!: number;
	Measurement!: string;
	Price!: number;

	constructor(init?: Partial<Product>){
		Object.assign(this, init);
	}
}