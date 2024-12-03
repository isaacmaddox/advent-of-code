import fs from "fs";

(async () => {
   const date = Number(process.env.DAY) || new Date().getDate();
   const folderName = `day-${date < 10 ? `0${date}` : date}`;

   const template = fs.readFileSync('./template.ts');

   fs.mkdirSync(folderName);
   fs.writeFileSync(`${folderName}/main.ts`, template);

   console.log(`Day ${date} creation complete!`);
})();