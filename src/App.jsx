import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';
import Header from './layout/Header/Header';
import Movie from './pages/Movie/Movie';
import TV from './pages/TV/TV';
import Bookmark from './pages/Bookmark/Bookmark';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movie />} />
					<Route path="tv-series" element={<TV />} />
					<Route path="bookmark" element={<Bookmark />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
