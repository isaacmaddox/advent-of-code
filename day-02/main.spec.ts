import { part01, part02 } from "./main"

it("Part 1 should be 257", async () => {
   const answer = await part01();

   expect(answer).toBe(257);
});

it("Part 2 should be 328", async () => {
   const answer = await part02();

   expect(answer).toBe(328);
})