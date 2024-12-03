import { readFileSync } from "fs";

const INPUT_PATH = process.cwd().endsWith("day-02") ? `${process.cwd()}\\input.txt` : `${process.cwd()}\\day-02\\input.txt`;

function read(): string {
   return readFileSync(INPUT_PATH).toString();
}

function checkSafe(list: number[]): boolean {
   const dir = list[0] < list[1] ? 1 : -1;

   for (let i = 0; i < list.length - 1; ++i) {
      if (
         dir === 1 && list[i] >= list[i + 1]
         || dir === -1 && list[i] <= list[i + 1]
         || Math.abs(list[i] - list[i + 1]) < 1
         || Math.abs(list[i] - list[i + 1]) > 3
      ) return false;
   }

   return true;
}

export async function part01(): Promise<number> {
   let answer = 0;
   const contents = read();

   const lists: number[][] = contents.split('\n').map(line => {
      return line.split(' ').map(n => Number(n));
   });

   for (const list of lists) {
      answer += checkSafe(list) ? 1 : 0;
   }

   return answer;
}

export async function part02(): Promise<number> {
   let answer = 0;
   const contents = read();

   const lists: number[][] = contents.split('\n').map(line => {
      return line.split(' ').map(n => Number(n));
   });

   for (const list of lists) {
      const perms: number[][] = [];

      for (let i = 0; i < list.length; ++i) {
         perms.push(
            list.filter((_, ind) => ind !== i)
         );
      }

      perms.push(list);

      for (const permutation of perms) {
         if (checkSafe(permutation)) {
            ++answer;
            break;
         }
      }
   }

   return answer;
}

if (require.main === module)
   (async () => {
      const p1Ans = await part01();
      const p2Ans = await part02();

      console.log(`Part 1: ${p1Ans}`);
      console.log(`Part 2: ${p2Ans}`);
   })();