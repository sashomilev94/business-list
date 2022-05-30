import { NavLink } from "react-router-dom";

interface PropsInterface {
	name: string;
	desc: string;
	id: string;
}
function Table({ name, desc, id }: PropsInterface) {
	return (
		<div className="TableLine">
			<NavLink to={`data-details/${id}`}>
				<div className="TableLineLeft">
					<p>
						{name}
					</p>
				</div>
				<div className="TableLineRight">
					<p>
						{desc}
					</p>
				</div>
			</NavLink>
		</div>
	);
}

export default Table;
