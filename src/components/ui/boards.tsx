import { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { Skeleton } from "./skeleton";
import { format } from "date-fns";
import { statusColors } from "./statusPieChart";
import { Badge } from "reactstrap";

const statusColorMap: { [status: string]: string } = {
  Concluído: "bg-concluido",
  "Concluído com atraso": "bg-concluido-atraso",
  Pendente: "bg-pendente",
  Atrasado: "bg-atrasado",
  Indefinido: "bg-indefinido",
};

interface IBoardsProps {
  boards: any[];
  lists: any[];
  cards: any[];
  loading: boolean;
  statusCounts: { [key: string]: { [key: string]: number } };
}

export const Boards = ({
  boards,
  cards,
  lists,
  loading,
  statusCounts,
}: IBoardsProps) => {
  return (
    <Fragment>
      {boards.length > 0
        ? boards.map((board) => (
            <div key={board.id}>
              <h1
                className="flex items-center font-bold py-4 px-4 border-b border-grey-lighter"
                key={board.id}
              >
                {board.name}
              </h1>
              <Table className="font-mono">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/5 font-bold">Tarefa</TableHead>
                    <TableHead className="w-1/5 font-bold">Lista</TableHead>
                    <TableHead className="w-1/6 font-bold">Prazo</TableHead>
                    <TableHead className="w-1/6 font-bold">Conclusao</TableHead>
                    <TableHead className="w-1/5 font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cards.length > 0 ? (
                    cards
                      .filter((el) => el.idBoard === board.id)
                      .map((card) => (
                        <TableRow key={card.id}>
                          <TableCell className="font-medium">
                            {card.name}
                          </TableCell>
                          <TableCell>
                            {
                              lists.filter((list) => list.id === card.idList)[0]
                                .name
                            }
                          </TableCell>
                          <TableCell>
                            {card.due
                              ? format(new Date(card.due), "dd/MM/yyyy")
                              : "--/--/--"}
                          </TableCell>
                          <TableCell>
                            {card.dueComplete
                              ? format(
                                  new Date(card.dateLastActivity),
                                  "dd/MM/yyyy"
                                )
                              : "--/--/--"}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5">
                              <div
                                className={`w-2.5 h-2.5 rounded-full mr-1.5 p-1.5 ${
                                  card.status === "Concluído"
                                    ? "bg-concluido"
                                    : card.status === "Concluído com atraso"
                                    ? "bg-concluido-atraso"
                                    : card.status === "Pendente"
                                    ? "bg-pendente"
                                    : card.status === "Atrasado"
                                    ? "bg-atrasado"
                                    : card.status === "Indefinido"
                                    ? "bg-indefinido"
                                    : "bg-gray-500"
                                }`}
                              />
                              {card.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                  ) : loading ? (
                    <TableRow>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <h1>Não há tarefas para este board</h1>
                  )}
                </TableBody>
              </Table>
            </div>
          ))
        : null}
    </Fragment>
  );
};
