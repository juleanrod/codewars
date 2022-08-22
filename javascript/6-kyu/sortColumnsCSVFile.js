/* Description:
 * You get a string with the content of a csv-file. The columns are separated 
 * by semicolons.
 * The first line contains the names of the columns.
 * Write a method that sorts the columns by the names of the columns 
 * alphabetically and incasesensitive.
 *
 * Before sorting:
    As table (only visualization):
    |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
    |17945       |10091    |10088  |3907   |10132          |
    |2           |12       |13     |48     |11             |

    The csv-file:
    myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
    17945;10091;10088;3907;10132\n
    2;12;13;48;11

    ----------------------------------

    After sorting:
    As table (only visualization):
    |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
    |3907   |17945       |10091    |10088  |10132          |
    |48     |2           |12       |13     |11             |

    The csv-file:
    Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
    3907;17945;10091;10088;10132\n
    48;2;12;13;11

* There is no need for prechecks. You will always get a correct string with more
* than 1 line und more than 1 row. All columns will have different names.
* Have fun coding it and please don't forget to vote and rank this kata! :-)
 * */

function sortCsvColumns(file) {
  let arr = [];
  file = file.split('\n').map(x => x.split(';'));

  for (let i = 0; i < file[0].length; i++) {
    let temp = [];
    for (let j = 0; j < file.length; j++){
      temp.push(file[j][i]);
    }
    arr.push(temp);
  }
  
  arr.sort((a,b) => a[0].localeCompare(b[0]));

  let arr2 = [];
  for (let t = 0; t < arr[0].length; t++) {
    let temp = [];
    for (let q = 0; q < arr.length; q++) {
      temp.push(arr[q][t]);
    }
    arr2.push(temp);
  }

  return arr2.map(v => v.join(';')).join('\n');
}

// Time to complete: 49min
