import $ from "jquery";
import {getTodos} from "./actions";

$(document).ready(() => {
	getTodos([]);
});
