
var arr = [];
var rows = 5;
var columns = 5;
fillArray(arr, rows, columns);

// Create and Fill array
function fillArray(arr, rows, columns)
{
    for (var i = 0; i < rows; i++)
     {
        arr.push([0])
        for (var j = 0; j < columns; j++) 
        {
            arr[i][j] = 0;
        }
     }
}
console.log(arr);
var Vienna ="Vienna is a nice city";
var arrVienna = Vienna.split(" ");

console.log(arrVienna);
var arrViennaIndex = 0;
// put "Vienna is a nice city" in right place
for (var i = 0; i < rows; i++) 
{
    for (var j = 0; j < columns; j++)
     {
        if (i==j)
        {
			arr[i][j] = arrVienna[arrViennaIndex];
			//console.log(arrVienna[arrViennaIndex]);
			//console.log(arr[i][j]);
        	arrViennaIndex = arrViennaIndex+1;
        }
        	
    }
}
console.log(arr);

var ArrContent="";
// Create text to add to HTML
for (var i = 0; i < rows; i++) 
{
    //ArrContent=ArrContent+"<br>";
    for (var j = 0; j < columns; j++) 
    {
        if (i==j)
        {           
            ArrContent = ArrContent + "<div class=\"sentence\"> <P class=\"boxContainer\">" + arr[i][j] + " </P></div>";
        }
        else
        {
            ArrContent = ArrContent + "<div class=\"nullBox\"> <P class=\"boxContainer\">" + arr[i][j] + " </P></div>";
        }
    }
}

console.log(ArrContent);
document.getElementById("container").innerHTML = ArrContent;

