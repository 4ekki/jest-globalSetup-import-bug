import { sleep } from "../../src" 

test("some test", async () => {
  await sleep(1000); 
  console.log("Message from test");
  expect(1).toBeTruthy(); 
})