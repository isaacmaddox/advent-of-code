import { readFileSync } from "fs";

const INPUT_PATH = process.cwd().endsWith("day-03") ? `${process.cwd()}\\input.txt` : `${process.cwd()}\\day-03\\input.txt`;

function read(): string {
   return readFileSync(INPUT_PATH).toString();
}

export async function part01(): Promise<number> {
   let answer = 0;
   let contents = read();
   let patt = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;

   const matches = contents.matchAll(patt);

   for (const match of matches) {
      const num1 = Number(match[1]);
      const num2 = Number(match[2]);
      answer += num1 * num2;
   }

   return answer;
}

export async function part02(): Promise<number> {
   let answer = 0;

   let contents = read().replaceAll(/don't\(\)(\s|.)*?do\(\)|don't(\s|.)*?$/g, '');

   let patt = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;

   const matches = contents.matchAll(patt);

   for (const match of matches) {
      const num1 = Number(match[1]);
      const num2 = Number(match[2]);
      answer += num1 * num2;
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