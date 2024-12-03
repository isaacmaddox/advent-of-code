import { readFileSync } from "fs";

async function part01(): Promise<number> {
   let answer: number = 0;

   let contents: string = readFileSync("./input.txt").toString();
   let split = contents.replace(/\s+/g, ' ').split(' ');

   let [lhs, rhs] = [
      split.filter((_, i) => i % 2 === 0).map(n => Number(n)),
      split.filter((_, i) => i % 2 === 1).map(n => Number(n)),
   ];

   lhs.sort();
   rhs.sort();

   for (let i = 0; i < lhs.length; ++i) {
      answer += Math.abs(lhs[i] - rhs[i]);
   }

   return answer;
}

async function part02(): Promise<number> {
   let answer: number = 0;

   let contents: string = readFileSync("./input.txt").toString();
   let split = contents.replace(/\s+/g, ' ').split(' ');
   let rhsMap: Map<number, number> = new Map();

   let [lhs, rhs] = [
      split.filter((_, i) => i % 2 === 0).map(n => Number(n)),
      split.filter((_, i) => i % 2 === 1).map(n => Number(n)),
   ];

   for (const num of rhs) {
      rhsMap.set(
         num,
         (rhsMap.get(num) || 0) + 1
      )
   }

   for (const num of lhs) {
      answer += num * (rhsMap.get(num) || 0);
   }

   return answer;
}

(async () => {
   const p1Ans = await part01();
   const p2Ans = await part02();

   console.log(`Part 1: ${p1Ans}`);
   console.log(`Part 2: ${p2Ans}`);
})();