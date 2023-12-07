'use client'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ArcElement
);

interface IStatisticsProps {
  completedCards: number;
  notCompletedCards: number;
  atrazadas: number;
  loading: boolean;
}

function Statistics({ completedCards, notCompletedCards, atrazadas, loading }: IStatisticsProps) {
  return(
    <div className='w-96 p-10 flex gap-10'>
      <Doughnut 
        data={{
          labels: ["Terminadas", "Em andamento", "Atrasadas"],
          datasets: [{
            data: [completedCards, notCompletedCards, atrazadas],
            borderColor: [
                "rgb(75, 192, 77)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
            ],
            backgroundColor: [
              "rgb(75, 192, 77)",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 132)",
            ],
            borderWidth: 2,
          }]
        }}
      />

      <div className='flex flex-col gap-4'>
        <h1>Legenda</h1>
        <div className='flex gap-4 flex-col w-96'>
          <div className='flex gap-2'>
            <div className='w-4 h-4 bg-green-500 rounded-full'></div>
            <p>Terminadas</p>
          </div>
          <div className='flex gap-2'>
            <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
            <p>Em andamento</p>
          </div>
          <div className='flex gap-2'>
            <div className='w-4 h-4 bg-red-500 rounded-full'></div>
            <p>Atrasadas</p>
          </div>
          <p>Essa empresa possui {' '}
          {atrazadas} {atrazadas > 1 || atrazadas === 0 ? 'tarefas' : 'tarefa'} {atrazadas > 1 || atrazadas === 0 ? 'atrazadas' : 'atrazada'}, {' '}
          {completedCards} {completedCards > 1 || completedCards === 0 ? 'tarefas' : 'tarefa'} {completedCards > 1 || completedCards === 0 ? 'terminadas' : 'terminada'} e {' '}
          {notCompletedCards} {notCompletedCards > 1 || notCompletedCards === 0 ? 'tarefas' : 'tarefa'} {notCompletedCards > 1 || notCompletedCards === 0 ? 'em andamento' : 'em andamento'}.
          </p>
        </div>
      </div>
    </div>
  );
}

export {Statistics};