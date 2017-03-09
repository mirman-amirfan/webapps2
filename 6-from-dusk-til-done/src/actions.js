import reducer from "./reducer";

export function addTodo(state, newTodo) {
	return reducer(state, {
		type: "ADD_TODO",
		newTodo
	})
}

export function getTodos(state){
	console.log("Getting Todos...");
	return reducer(state, {
		type: "RETRIEVE_TODOS"
	});
}

export function deleteTodo(state, id) {
	return reducer(state, {
		type: "DELETE_TODO",
		id
	});
}

export function editTodo(state, id, editedTodo){
	return reducer(state, {
		type: "UPDATE_TODO",
		id,
		editedTodo
	}
	)
}
