import { sleep } from "src";

module.exports = async () => {
  await sleep(3000); 
  console.log("\nMessage from globalSetup")
};
