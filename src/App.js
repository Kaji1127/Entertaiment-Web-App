import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TV from './pages/TV/TV';
import Bookmark from './pages/Bookmark/Bookmark';
import BookmarkContext from './context/BookmarkContext';
import './App.scss';

const App = () => {
	const ctx = useContext(BookmarkContext);
	const trendItems = ctx.items.filter((item) => item.isTrending);
	const recommendItems = ctx.items.filter((item) => !item.isTrending);
	const movieItems = ctx.items.filter((item) => item.category === 'Movie');
	const tvItems = ctx.items.filter((item) => item.category === 'TV Series');
	const bookmarkedItems = ctx.bookmarkItem;

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route
							index
							element={
								<Home
									trendItems={trendItems}
									recommendItems={recommendItems}
									allItems={ctx.allItem}
								/>
							}
						/>
						<Route path="movies" element={<Movies movieItems={movieItems} />} />
						<Route path="tv-series" element={<TV tvItems={tvItems} />} />
						<Route
							path="bookmark"
							element={<Bookmark bookmarkedItems={bookmarkedItems} />}
						/>
						{/* <Route path="search" element={<Search />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
