import { Validation } from '../interface/validate';

 /**
   * Validate form helper
   * @param {RegExp} regexRule 
   * @param {string} input 
   * @param {string} errorMessage 
   */
export const validateForm: Validation = (
  regexRule: RegExp, 
  input: string, 
  errorMessage: string
  ): string | undefined => {

  if (!regexRule.test(input)) {
    return errorMessage;
  }
};

