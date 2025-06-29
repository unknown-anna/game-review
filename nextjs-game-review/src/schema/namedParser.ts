import z from "zod";
import z4 from "zod/v4";

export const parseWithSchemaName = (
	schema: z.ZodSchema,
	input: unknown,
	schemaName: string,
) => {
	try {
		return schema.parse(input);
	} catch (error) {
		if(error instanceof z.ZodError) {
			throw new ZodValidationError(error, schemaName);
		}
		throw error;
	}
};

export const parseAsyncWithSchemaName = async (
	schema: z.ZodSchema,
	input: unknown,
	schemaName: string,
) => {
	try {
		return await schema.parseAsync(input);
	} catch (error) {
		if(error instanceof z.ZodError) {
			throw new ZodValidationError(error, schemaName);
		}
		throw error;
	}
};

class ZodValidationError extends Error {
	constructor(error: z.ZodError, schemaName: string) {
		super(`Zod validation error {${schemaName}}: ${z4.prettifyError(error)}`);
		this.name = "ZodValidationError";
	}
}