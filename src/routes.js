import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsIndex from './components/posts_index'; 
import PostsNew from './components/posts_new';

// Index route -> if the route matches the parent, show index
export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex}/>
		<Route path="posts/new" component={PostsNew} />
	</Route>
);



