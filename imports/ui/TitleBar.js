import React from 'react';

class TitleBar extends React.Component {
	render() {
		return (
			<div className="title-bar">
				<div className="wrapper">
					<h1>Score Keep</h1>
					<h2 className="title-bar__subtitle">Created by Andrew Mead</h2>
				</div>
			</div>
		);
	}
}

export default TitleBar;