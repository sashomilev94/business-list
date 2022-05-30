import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Table from './Table';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DetailPage from './DetailPage';


function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorResponse, setErrorResponse] = useState('');

	useEffect(() => {
		const dataURL = `https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f`;
		axios.get(dataURL)
			.then(res => {
				const info = res.data;
				setData(info);
			}).catch(error => {
				setErrorResponse(error.request.statusText);
			}).finally(() => {
				setLoading(false);
			})
	}, [])
	console.log(errorResponse)

	const renderData = () => {
		if (errorResponse !== '') {
			return <div className="ErrorData">
				<p>Data {errorResponse}</p>
			</div>
		}

		return <Routes >
			<Route path="/" element={<Table businessData={data} />} />
			<Route path="/data-details/:id" element={<DetailPage businessData={data} />} />
		</Routes >
	}

	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				{loading ?
					<div className="Loader">
						<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" width="200" height="200">
							<path fill="#8909b3" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
								<animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
							</path>
						</svg>
					</div>
					:
					renderData()

				}

			</div>
		</BrowserRouter>
	);
}

export default App;
