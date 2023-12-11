export type IStatistics = {
  id: number;
  name: string;
  done: number,
  inProgress: number,
  delayed: number,
}

export const getAllStatistics = (numberOfCompanies: number) => {
  const statisticsArray: IStatistics[] = []

  for (let i = 0; i < numberOfCompanies; i++) {
    statisticsArray.push({
      id: i,
      name: `Company ${i}`,
      done: Math.floor(Math.random() * 100),
      inProgress: Math.floor(Math.random() * 100),
      delayed: Math.floor(Math.random() * 100),
    })
  }

  statisticsArray[0].done = 31;
  statisticsArray[0].inProgress = 0;
  statisticsArray[0].delayed = 1;

  const totalDone = statisticsArray.reduce((acc, curr) => acc + curr.done, 0)
  const totalInProgress = statisticsArray.reduce((acc, curr) => acc + curr.inProgress, 0)
  const totalDelayed = statisticsArray.reduce((acc, curr) => acc + curr.delayed, 0)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        statisticsArray,
        totalDone,
        totalInProgress,
        totalDelayed,
      })
    }, 3000)
  })
}