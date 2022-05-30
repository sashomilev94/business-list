import Container from '../Container';
import { BusinessData } from '../sharedInterface';
import TableLine from '../TableLine';
import './Table.css';

function Table(props: { businessData: BusinessData[] }) {
	return (
		<div className="Table">
			<Container width={'1140px'}>
				<div className="TableLines">
					<div className="TableLineHead">
						<div className="TableLineLeft">
							<h3>
								Name
							</h3>
						</div>
						<div className="TableLineRight">
							<h3>
								Description
							</h3>
						</div>
					</div>

					{props.businessData.map((singleData) => <TableLine key={singleData.id} id={singleData.id} name={singleData.name} desc={singleData.description} />)}
				</div>
			</Container>
		</div>
	);
}

export default Table;
