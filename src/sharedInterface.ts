export interface Address {
	number: string;
	street: string;
	zip: string;
	city: string;
	country: string;
}

export interface BusinessData {
	id: string;
	name: string;
	description: string;
	phone: string;
	image: string;
	email: string;
	address: Address;
}
