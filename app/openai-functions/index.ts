import type * as types from "./functions.types";

import stretch from "./stretch";

// The IDs are defined in OpenAI assistant spec
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const functionsByIDs: Record<string, types.FunctionInputHandler<any>> = {
  get_stretching_instructions: stretch,
};

export default functionsByIDs;
