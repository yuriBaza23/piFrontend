import { Fragment } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Loader2 } from "lucide-react";
import { Skeleton } from "./skeleton";
import { format } from "date-fns";

interface IBoardsProps {
  boards: any[];
  lists: any[];
  cards: any[];
  loading: boolean;
}

export const Boards = ({ boards, cards, lists, loading }: IBoardsProps) => {
  return (
    <Fragment>
      {boards.length > 0 ? boards.map((board) => (
        <div key={board.id}>
          <h1 className='flex items-center font-bold py-4 border-b border-grey-lighter' key={board.id}>
            {board.name}
          </h1>
          <Table>
            <TableCaption>Lista de tarefas do board {board.name}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[500px]">Tarefa</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Prazo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cards.length > 0 ? cards.filter(el => el.idBoard === board.id).map((card) => (
                <TableRow key={card.id}>
                  <TableCell className="font-medium">{card.name}</TableCell>
                  <TableCell>{lists.filter(list => list.id === card.idList)[0].name}</TableCell>
                  <TableCell>{card.due ? format(new Date(card.due), 'dd/MM/yyyy') : 'Não há prazo estabelecido'}</TableCell>
                </TableRow>
              )) : loading ? (
                <TableRow>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-[100px] h-[20px] rounded-full"/>
                  </TableCell>
                </TableRow>
              ) : <h1>Não há tarefas para este board</h1>   
            }
            </TableBody>
          </Table>
        </div>
      )) : null}
    </Fragment>
  )
}