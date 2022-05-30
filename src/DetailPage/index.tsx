import { useParams } from 'react-router-dom';
import Container from '../Container';
import NearbyPlace from '../NearbyPlace';
import { BusinessData } from '../sharedInterface';
import './DetailPage.css';

function DetailPage(props: { businessData: BusinessData[] }) {
	const { id } = useParams();
	const singleBusiness = props.businessData.find((d) => d.id === id);
	const nearbyBusiness = props.businessData.filter((d) => d.address.city === singleBusiness?.address.city && d.id !== id);

	return (
		<>
			<div className="Details">
				<Container width="1140">
					<div className="DetailsImage" style={{ backgroundImage: "url(" + singleBusiness?.image + ")" }}>
					</div>

					<div className="DetailsInfo">
						<div className="DetailsInfoCol">
							<div className="DetailsInfoInner">
								<div className="DetailsInfoPart">
									<h3>Address</h3>

									<p>{singleBusiness?.address.number} {singleBusiness?.address.street} <br /> {singleBusiness?.address.zip}</p>
								</div>

								<div className="DetailsInfoPart">
									<h3>Contact</h3>

									<p>
										<a href={"tel:" + singleBusiness?.phone}>{singleBusiness?.phone}</a>
										<br />
										<a href={"mailto:" + singleBusiness?.email}>{singleBusiness?.email}</a>
									</p>
								</div>
							</div>
						</div>

						<div className="DetailsInfoCol">
							<div className="DetailsInfoPlaces">
								<h3>Nearby Places</h3>

								{nearbyBusiness.map(nb => {
									return <NearbyPlace name={nb.name} address={nb.address} />
								})}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export default DetailPage;
