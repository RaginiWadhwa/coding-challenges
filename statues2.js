function solution(statues) {
  let max = 0
  let min = Number.MAX_VALUE;
  const statuesSet = new Set(statues);
  let statuesNeeded = 0;
  
  for(let i=0; i<statues.length;i++) {
    if(statues[i]>max) {
      max = statues[i]
    }
    if(statues[i]<min) {
      min=statues[i]
    }
  }
  for(let i=min; i<max;i++) {
    if(!statuesSet.has(i)) {
      statuesNeeded++;
    }
  }
  return statuesNeeded;
}

console.log(solution([2, 3, 8, 6, 10]));


