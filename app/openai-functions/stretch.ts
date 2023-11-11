import type * as types from "./functions.types";

const handleStretchInstructionData: types.FunctionInputHandler<
  StretchInstrctionsArgs
> = ({ bodyPart }) => {
  return VIDYAS[bodyPart];
};

export default handleStretchInstructionData;

export interface StretchInstrctionsArgs {
  bodyPart:
    | "head"
    | "neck"
    | "shoulders"
    | "arms"
    | "chest"
    | "upper back"
    | "lower back"
    | "buttocks"
    | "thighs"
    | "calves"
    | "feet";
}

// Artisanally curated stretching videos
const VIDYAS: Record<StretchInstrctionsArgs["bodyPart"], string> = {
  head: "https://www.youtube.com/watch?v=_-KNO3GE0l4",
  neck: "https://www.youtube.com/watch?v=XtHfEI5DUE0",
  shoulders: "https://www.youtube.com/watch?v=6jHsraw2NIk",
  arms: "https://www.youtube.com/watch?v=CZ9rvwtaK4Q",
  chest: "https://www.youtube.com/watch?v=NePr1XKRTLU",
  "upper back": "https://www.youtube.com/watch?v=vuGnzLxRvZM",
  "lower back": "https://www.youtube.com/watch?v=0wAw1-1MHa4",
  buttocks: "https://www.youtube.com/watch?v=bFV0LAKzIDA",
  thighs: "https://www.youtube.com/watch?v=Xj6KvJuyDnM",
  calves: "https://www.youtube.com/watch?v=D327Pwt-ONs",
  feet: "https://www.youtube.com/shorts/UYxeBA72-w0",
};
