import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayersPositions } from './../imports/api/players';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './../imports/ui/App';

Meteor.startup(() => {
	Tracker.autorun(() => {
		let players = Players.find({}, { sort: { score: -1 } }).fetch();
		let positionedPlayers = calculatePlayersPositions(players);

		ReactDOM.render(<App players={ positionedPlayers } />, document.getElementById('app'));
	});
});