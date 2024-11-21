/**
 * First Example on strings parsing in metwally labs
 * html file path :
 * /home/moatazm/NodeJs-course/Projects/program1/metwally_first_string_example.html
 * 
 * steps:
 * 1 - read the html file as a string 
 * 2 - assaign the string value into a leteral variable
 * 
*/

const fs = require('node:fs');
const html_file = "ds01.html";
let html = fs.readFileSync(html_file , "utf8" );

// we got the file data hahahahaha
// console.log(html);

/**
 * our target is the div with "Id-item-title" class
 * find all divs with this class. the start and the end of each div 
 * 
 * start loop
 *  -- find start_index of "Id-item-title" 
 *  -- find end_index of </div> 
 *  -- extract substring
 *  -- clean the text of substring
 *  -- replace html symboles with the real char
 *  -- add to result array
 * end loop
 * 
 * 
 */

/**
 * <div class="ld-item-title">
			05 &#8211; Operators &#8211; Arithmetic
		</div> <!--/.ld-item-title-->
 */

let item = [];
let start_index = -1 ;
let end_index = -1 ; 

for (let i = 0; i < html.length; i++) {
    start_index = html.indexOf('"ld-item-title"' , i );
    if (start_index === -1) break ; 
    i = start_index ; 

    end_index = html.indexOf('</div>' , i );
    if (end_index === -1) break ; 
    i = end_index

    let item = html.substring(start_index , end_index);

    //console.log(item);
    /**
     * "ld-item-title">
				05 &#8211; Operators &#8211; Arithmetic
     */
    item = item.replace('"ld-item-title">','');

    /**
     * 
				01 &#8211; Prepare Development Environment
			
parse.js:64

     */

    item = item.trim();
    /**
     * 01 &#8211; Prepare Development Environment
     */

    // replacing all big spaces
    item = item.replaceAll('  ' , ' ');
    
    // compress all lines into one line
    item = item.replaceAll('/n' , ' ');

    item = replaceSymboles(item);
    console.log(item);
    
    
}


function replaceSymboles(str) {

    let start_index = -1 ;
    let end_index = -1 ; 

    for (let i = 0; i < str.length; i++) {
        start_index = str.indexOf('&#' , i );
        if (start_index === -1) break ; 
        i = start_index ; 

        end_index = str.indexOf(';' , i );
        if (end_index === -1) break ; 
        i = end_index

        let code = str.substring(start_index + 2 , end_index);
        // 8211
        let ucode = '0x' + Number(code).toString(16);
        // 0x2013 - en dash
        let char = String.fromCodePoint(ucode);
        // - 
        str = str.replaceAll('&#' + code + ";" , char);

    }

    return str ;
    
}
