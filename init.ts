import fs from "fs";

(() => {
   const date = Number(process.env.DAY) || new Date().getDate();
   const folderName = `day-${date < 10 ? `0${date}` : date}`;

   const mainTemplate = fs.readFileSync('./template/main.ts.txt');
   const specTemplate = fs.readFileSync('./template/main.spec.ts.txt');

   fs.mkdirSync(folderName);
   fs.writeFileSync(`${folderName}/main.ts`, mainTemplate.toString().replaceAll('{{FOLDER}}', folderName));
   fs.writeFileSync(`${folderName}/main.spec.ts`, specTemplate);

   console.log(`Day ${date} creation complete!`);
})();