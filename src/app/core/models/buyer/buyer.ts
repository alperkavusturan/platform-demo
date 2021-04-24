export class Buyer{

	Id!: string;
	Email!: string;
	Name!: string;
	Surname!: string;
	Location!: string;

	constructor(init?: Partial<Buyer>){
		Object.assign(this, init);
	}
}