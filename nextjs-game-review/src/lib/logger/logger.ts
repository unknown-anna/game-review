import "server-only";
import pino, { type Logger } from "pino";

let logger: Logger<never, boolean>;
if (process.env.LOG_LEVEL) {
	logger = pino({
		level: process.env.LOG_LEVEL,
	});
} else if(process.env.NODE_ENV === "development") {
	logger = pino({
		level: "debug",
	});
} else {
	logger = pino({
		level: "info",
	});
}
export default logger;