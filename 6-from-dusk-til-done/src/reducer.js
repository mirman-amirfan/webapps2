import $ from "jquery";
import todoListItem from "./todoListItem";
import newTodoForm from "./newTodoForm";

function updateTodos(todos) {
	console.log(todos);
	$("#root").empty();
	todos.forEach((todo) => {
		$("#root").append(
			todoListItem(todo)
		);
	});
	$("#root").append(
		newTodoForm()
	);
}

export default function reducer(state, action) {
	switch (action.type) {
		case "RETRIEVE_TODOS":
			return $.ajax(
					"/todos", {
						method: "GET"
					}
				)
				.done((data) => {
					console.log("Success");
					updateTodos(data);
					return data;
				})
				.fail(() => {
					console.error("Something bad happened");
				});
			return state;
		case "DELETE_TODO":
			return $.ajax({
					url: `/todos/${action.id}`,
					type: "DELETE",
					contentType: "application/json"
				})
				.done((res) => {
					updateTodos(res);
					return res;
				});
		case "ADD_TODO":
			return $.ajax({
					url: "/todos",
					type: "POST",
					contentType: "application/json",
					data: JSON.stringify(action.newTodo)
				})
				.done((res) => {
					updateTodos(res);
					return res;
				});
		case "UPDATE_TODO":
			return $.ajax({
					url: `/todos/${action.id}`,
					type: "PUT",
					contentType: "application/json",
					data: JSON.stringify(action.editedTodo)
				})
				.done((rest) => {
					updateTodos(res);
					return res;
				})
		default:
			return state;
	}
}
