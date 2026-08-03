import { Command } from "commander";

export const initCommand = new Command("init")
  .description("Initialize heretek-manager: detect hardware and install recommended builds")
  .action(async () => {
    console.log("heretek-manager init");
    console.log("Detecting hardware...");
    // TODO: integrate hardware detection
    console.log("Hardware detection: not yet implemented");
  });
