import fs from "fs"
/**
 * First task - Read the csv files in the inputPath and analyse them
 *
 * @param {string[]} inputPaths An array of csv files to read
 * @param {string} outputPath The path to output the analysis
 */
function analyseFiles(inputPaths: string[], outputPath: string) { 
  
  const readableStream = fs.createReadStream(inputPaths[0]);          // console.log(...inputPaths);
  const writableStream = fs.createWriteStream(outputPath);
  console.log(outputPath);
  readableStream.setEncoding('utf8');


  readableStream.pipe(writableStream);
  readableStream.on('data', (chunk) =>{
    console.log(chunk);
    console.log("***********");
    const arrayOfChunk = chunk.split("\n");
    

    //Below will give the uniques sets of gmail, i.e no repetion of mail
    //Using set turn it to set object, then using spread op turn it back to array
    var uniqueEmail;
      for(let anyText of arrayOfChunk){
        uniqueEmail = [...new Set(arrayOfChunk)]
        
      }
      console.log(uniqueEmail);

  // readableStream.on('data', function(uniqueEmail) {
  //     writableStream.write(uniqueEmail);
  // });
    
  });

  //console.log(readableStream);
  console.log('Complete the implementation in src/analysis.ts');
}

export default analyseFiles;




////// Below is my Terminal Result


// decagon@PEAK2-MacBook-Air task-two % email-analysis fixtures/inputs/small-sample.csv report-analysis.json

// /Users/decagon/Documents/GitHub/week-4-task-sq012-peak2/task-two/report-analysis.json
// Complete the implementation in src/analysis.ts
// Emails
// test@example.com
// john@gmail.com
// support@decagon.com.ng
// jane@gmail.com
// sample@yahoo.com
// student@decagon.dev
// experiment@deca
// transform@gmail.com
// validator@email.co.uk
// test+example@mail.org
// almost@valid
// info@decagon.com.ng
// john@gmail.com
// support@decagon.com.ng
// jane@gmail.com
// sample@yahoo.com
// ***********
// [
//   'Emails',                                         line 78 to 92 is my output in terminal, but not entering report-analysis.json
//   'test@example.com',
//   'john@gmail.com',
//   'support@decagon.com.ng',
//   'jane@gmail.com',
//   'sample@yahoo.com',
//   'student@decagon.dev',                                 
//   'experiment@deca',
//   'transform@gmail.com',
//   'validator@email.co.uk',
//   'test+example@mail.org',
//   'almost@valid',
//   'info@decagon.com.ng'
// ]
