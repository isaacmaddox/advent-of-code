import { part01, part02 } from "./main"

it("Part 1 should be 175615763", async () => {
   const answer = await part01();

   expect(answer).toBe(175615763);
});

it("Part 2 should be 74361272", async () => {
   const answer = await part02();

   expect(answer).toBe(74361272);
})