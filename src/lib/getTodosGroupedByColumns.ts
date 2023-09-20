// import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  // const data = await databases.listDocuments(
  //   process.env.NEXT_PUBLIC_DATABASE_ID!,
  //   process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  // );

  // const todos = data.documents;

  // const columns = todos.reduce((acc, todo) => {
  //   if (!acc.get(todo.status)) {
  //     acc.set(todo.status, {
  //       id: todo.status,
  //       todos: [],
  //     });
  //   }

  //   acc.get(todo.status)!.todos.push({
  //     $id: todo.$id,
  //     $createdAt: todo.$createdAt,
  //     title: todo.title,
  //     status: todo.status,
  //     ...(todo.image && { image: JSON.parse(todo.image) }),
  //   });

  //   return acc;
  // }, new Map<TypedColumn, Column>());

  // const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];

  // for (const columnType of columnTypes) {
  //   if (!columns.get(columnType)) {
  //     columns.set(columnType, {
  //       id: columnType,
  //       todos: [],
  //     });
  //   }
  // }

  // const sortedColumns = new Map(
  //   Array.from(columns.entries()).sort(
  //     (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
  //   )
  // );

  // const board: Board = {
  //   columns: sortedColumns,
  // };

  const mockData: Board = {
    columns: new Map<TypedColumn, Column>([
      [
        "backlog",
        {
          id: "backlog",
          todos: [
            {
              $id: "10",
              $createdAt: "2023-09-18T10:00:00",
              title: "Tarefa 1",
              description: "Descrição da Tarefa 1",
              status: "A fazer",
              startDate: "2023-09-19",
              endDate: "2023-09-21",
            },
            {
              $id: "11",
              $createdAt: "2023-09-18T11:00:00",
              title: "Tarefa 2",
              description: "Descrição da Tarefa 2",
              status: "A fazer",
              startDate: "2023-09-20",
              endDate: "2023-09-22",
            },
          ],
        },
      ],
      [
        "todo",
        {
          id: "todo",
          todos: [
            {
              $id: "1",
              $createdAt: "2023-09-18T10:00:00",
              title: "Tarefa 1",
              description: "Descrição da Tarefa 1",
              status: "A fazer",
              startDate: "2023-09-19",
              endDate: "2023-09-21",
            },
            {
              $id: "2",
              $createdAt: "2023-09-18T11:00:00",
              title: "Tarefa 2",
              description: "Descrição da Tarefa 2",
              status: "A fazer",
              startDate: "2023-09-20",
              endDate: "2023-09-22",
            },
          ],
        },
      ],
      [
        "inprogress",
        {
          id: "inprogress",
          todos: [
            {
              $id: "3",
              $createdAt: "2023-09-18T12:00:00",
              title: "Tarefa 3",
              description: "Descrição da Tarefa 3",
              status: "Em progresso",
              startDate: "2023-09-23",
              endDate: "2023-09-25",
            },
          ],
        },
      ],
      [
        "done",
        {
          id: "done",
          todos: [
            {
              $id: "4",
              $createdAt: "2023-09-18T13:00:00",
              title: "Tarefa 4",
              description: "Descrição da Tarefa 4",
              status: "Concluída",
              startDate: "2023-09-26",
              endDate: "2023-09-28",
            },
          ],
        },
      ],
    ]),
  };

  // Agora você pode atribuir mockData a um objeto Board
  const board: Board = mockData;

  return board;
};
