import { Address } from "../sharedInterface";
import './NearbyPlace.css';

interface PropsInterface {
	name: string;
	address: Address;
}

function NearbyPlace({ name, address }: PropsInterface) {
	return (
		<div className="NearbyPlace">
			<p>{name}</p>
			<p>{address.country}, {address.zip} {address.street} {address.number}, {address.city}</p>
		</div>
	);
}

export default NearbyPlace;
