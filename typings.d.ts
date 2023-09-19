interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "backlog" | "todo" | "inprogress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  description: string;
  status: string;
  startDate: string;
  dueDate: string;
}
