import React from 'react';

import { Players } from './../api/players';

class AddPlayer extends React.Component {
	handleSubmit(e) {
		e.preventDefault();

		let playerName = e.target.playerName.value;
		let playerScore = 0;

		if (!playerName) {
			return false;
		}

		Players.insert({
			name: playerName,
			score: playerScore
		});

		e.target.playerName.value = '';
	}

	render() {
		return (
			<div className="item">
				<form className="form" onSubmit={ this.handleSubmit.bind(this) }>
					<input className="form__input" type="text" id="playerName" name="playerName" placeholder="Player name" />
					<button className="button">Add player</button> 
				</form>
			</div>
		);
	}
}

export default AddPlayer;