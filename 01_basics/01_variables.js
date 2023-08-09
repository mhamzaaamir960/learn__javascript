

const account_id = 14413;
let account_email = "hamza@gmail.com";
var account_password = "213910";
account_city = "Rawalpindi";
let account_state;


// account_id = 85943; not allowed

console.log(account_id);

/* prefer not to use var
because of issue in block scope and functional scope
*/

account_email = "hamza1122@gmail.com";
account_password = "938191";
account_city = "Islamabad"

console.table([account_id,account_email,account_password,account_city,account_state]);