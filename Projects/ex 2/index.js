/*
assumbtions:
- csv file contains data for persons
- birth date in the csv file formated as MM/DD/YYYY
- birth time formated as 12 hour (am, pm)

Task requirements:
- change the birth date format to matach the person country format (as posible)
- calculate the age of the person in 1st October 2025
- add the calculated age to the person data
- create a paragraph from the formated data
- save new data in a new file

*/
/*
 * 4,male,Winnifred Hollow,whollow3@webmd.com,07/09/1996,10:47 AM,PT,Portugal,pt,UTC
 * 5,male,Brandyn Schirach,bschirach4@clickbank.net,07/05/1988,07:42 PM,DO,Dominican Republic,es,UTC
 *
 * [4] date
 * [5] time
 * [9] timezone
 * 
 * [8] lang code
 * [6] country code
 * 
 * [7] country name
 * [2] full name
 * [3] email
 * [0] id
 * [1] gender
 */

/*
 * 1- read file , assign file data to string variable
 * 2- split the data by end of line '\n'
 * 3- loop for each line (for each loop )
 *  - - split the line data by ','
 *  - - use country and language code along with time zone to format the data
 *  - - calculate the age
 *  - - construct the final paragragh
 *  - - append it to string variable 
 * 4- write new file (txt)
 * */
import { DateTime } from 'luxon'
import * as fs from 'fs'

let data = fs.readFileSync( './MOCK_DATA.csv' , {encoding: 'utf8' , flag : 'r'});
let data_array = data.split('\n');
let new_data = '';

data_array.forEach(
   line => {
        let ln = line.split(',');

        let full = DateTime.fromFormat(`${ln[4]} ${ln[5]}` , 'MM/dd/yyyy t' , {zone : ln[9]});
        let local_datetime = full.setLocale(`${ln[8]}-${ln[6]}`).toLocaleString(DateTime.DATETIME_FULL);
        
        let october = DateTime.fromFormat('2025-10-01 00:00:00' , 'yyyy-MM-dd hh:mm:ss' , { zone: ln[9] });
        let diff = october.diff(full , 'year');
        let g = ln[1] == 'male' ? 'his' : 'her' ;

        let tm = `
    ${ln[0]}-${ln[2]} is born in ${ln[7]} on ${local_datetime} 
    ${g} age in October 2025 will be almost ${Math.round(diff.years)} years
    ${g} contact information : ${ln[3] } 
            -------------------------------`;

         new_data += tm ;  
         
         
        //console.log('-----');
        //console.log(tm);
        //console.log(data_array);
   }
  
);
try{
    fs.writeFileSync('./new_data.txt' , new_data , {encoding: 'utf8'});         
    console.log('New file written successfully !');
}
catch(e){
    console.log(e);
}      

//console.log(data);


