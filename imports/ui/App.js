import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar />
				<div className="wrapper">
					<AddPlayer />
					<PlayerList players={ this.props.players } />
				</div>
			</div>
		);
	}
}

export default App;