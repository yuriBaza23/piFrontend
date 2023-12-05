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
  startDate: string?;
  dueDate: string?;
}

type Finance = "expense" | "revenue";

interface CategoryObject {
  id: string;
  name: string;
  type: 'revenue' | 'expense';
  companyId: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id?: string;
  name: string;
}

interface FinanceCategories {
  revenue: Category[];
  expense: Category[];
}