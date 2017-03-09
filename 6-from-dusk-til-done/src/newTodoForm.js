import $ from "jquery";
export default function newTodoForm() {
	return $(document.createElement("form"))
		.append(
			$(document.createElement("input"))
			.attr("id", "new-todo-text")
			.attr("type", "input")
			.attr("placeholder", "Add Todo BOI")
		)
		.append(
			$(document.createElement("input"))
			.attr("type", "date")
			.attr("id", "new-todo-date")
		)
		.append(
			$(document.createElement("button"))
			.text("Add")
			.click((e) => {
				e.preventDefault();
				console.log("adding a todo");
				const newTodo = {
					text: $("#new-todo-text").val(),
					date: $("#new-todo-date").val()
				};
				
			})
		)
}
