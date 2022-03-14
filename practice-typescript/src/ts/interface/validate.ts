/**
   * Validate form helper type
   */
export type Validation = (
  regexRule: RegExp,
  input: string,
  errorMessage: string
) => string | undefined;

