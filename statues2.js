/*
This is my implementation of the Make Array Consecutive 2 problem on CodeSignal. 

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
Example
For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7.
*/

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


