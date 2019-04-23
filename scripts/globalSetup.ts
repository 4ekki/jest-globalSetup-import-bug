import { sleep } from "../tests/src";

module.exports = async () => {
  await sleep(1000); 
  console.log("\nMessage from globalSetup")
};
