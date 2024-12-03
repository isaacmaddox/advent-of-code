import { part01, part02 } from "./main"

it("Part 1 should be 2904518", async () => {
   const answer = await part01();

   expect(answer).toBe(2904518);
});

it("Part 2 should be 18650129", async () => {
   const answer = await part02();

   expect(answer).toBe(18650129);
})