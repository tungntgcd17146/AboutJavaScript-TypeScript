export const Rules = {
    regexName :
             /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/,
    regexAge :
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
    regexEmail : 
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    regexAddress :
            /(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [a-zA-z]{2}/,
}