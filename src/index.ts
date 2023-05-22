import "module-alias/register";
import { validateEnv } from "@util/validateEnv";

import { runServer } from "./app";

validateEnv();
runServer();
