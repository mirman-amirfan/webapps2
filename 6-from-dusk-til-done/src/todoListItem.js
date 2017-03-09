import $ from "jquery";
import {
	deleteTodo,
	editTodo
} from "./actions";

export default function todoListItem(todo) {
	return $(document.createElement("div"))
		.append(
			$(document.createElement("h3")).text(
				`${todo.date}: ${todo.text}`
			)
		)
		.append(
			$(document.createElement("input"))
			.attr("type", "checkbox")
			.attr("checked", todo.completed)
			.click((e) => {
				const editedTodo = {
					id: todo.id,
					text: todo.text,
					date: todo.date,
					completed: e.target.checked
				}
				editTodo([], todo.id);
			})
		)
		.append(
			$(document.createElement("button"))
			.attr("id", "delete-todo")
			.attr("type", "button")
			.text("Delete")
			.click((e) => {
				const c = confirm("Are ya sure ya wanna delete $(todo.text)");
				if (c) {
					deleteTodo([], todo.id);
				}
			})
		)
		.append(
			$(document.createElement("button"))
			.attr("id", "btn-edit-${todo.id}")
			.attr("type", "button")
			.text("Edit")
			.click((e) => {
				console.log("editing a todo");
				editTodo([], todo.id, editedTodo);
			})
		)
		.append(
			$(document.createElement("div"))
			.attr("id", "edit-todo-$(todo.id)")
			.append(
				$(document.createElement("input"))
				.attr("type", "text")
				.val(todo.text)
				.attr("id", "edit-todo-text-${todo.id}")
			)
			.append(
				$(document.createElement("input")
					.attr("type", "date")
					.val(todo.date)
					.attr("id", "edit-todo-date-$(todo.id)")
				)
			)
			.append(
				$(document.createElement("button"))
				.attr("type", "button")
				.text("Save")
				.click((e) => {
					console.log("Saving todo");
					const editedTodo = {
						id: todo.id,
						text: $(`#edit-todo-text-${todo.id}`).val(),
						date: $(`#edit-todo-date-${todo.id}`).val(),
						completed: $(`#todo-${todo.id}-completed`).is(":checked")
					}
					$(e.target).parent()lslideUp();
					$(`#btn-edit-${todo}`).show();
					editTodo([], todo.id, editedTodo);
				})
			)
			.append(
				$(document.createElement("button"))
				
			)
		)
		.addClass("todo");
}
