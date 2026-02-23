export type ToolStep = {
  title: string;
  instruction: string;
  seconds?: number;
};

export type Tool = {
  slug: string;
  title: string;
  durationOptions: number[];
  category: string;
  whenToUse: string;
  steps: ToolStep[];
  cautions?: string;
  tags: string[];
};
