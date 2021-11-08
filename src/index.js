import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App.js";
import { store } from "./app/stores.js";

const render = () => {
	ReactDOM.render(
		<App state={store.getState()} dispatch={store.dispatch} />,
		document.getElementById("root")
	);
};

render();
store.subscribe(render);
