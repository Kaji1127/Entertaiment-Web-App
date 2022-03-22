import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Recommend from './components/Recommend/Recommend';
import SearchInput from './components/SearchInput/SearchInput';
import Trend from './components/Trend/Trend';

import Movies from './pages/Movies/Movies';
import TV from './pages/TV/TV';
import Bookmark from './pages/Bookmark/Bookmark';

function App() {
	// const trendItems = data.filter((item) => item.isTrending);
	// const recommendItems = data.filter((item) => !item.isTrending);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="movies" element={<Movies />} />
						<Route path="tv-series" element={<TV />} />
						<Route path="bookmark" element={<Bookmark />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
