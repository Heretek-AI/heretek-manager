import { Command } from "commander";
import { initCommand } from "./commands/init.js";

const program = new Command();

program
  .name("heretek-manager")
  .description("Local AI management platform for llama.cpp")
  .version("0.1.0");

program.addCommand(initCommand);

// Stub commands — will be implemented in later tasks
for (const name of ["install", "list", "use", "remove", "run", "config", "doctor", "lemonade"]) {
  program.command(name).description(`${name} command (coming soon)`).action(() => {
    console.log(`${name}: not yet implemented`);
  });
}

program.parse();
