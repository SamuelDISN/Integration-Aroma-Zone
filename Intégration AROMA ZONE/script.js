function Increasment()
{
      var isNumber = parseInt(document.getElementById("incrementation" ).value);
      isNumber = isNumber+1;
      document.getElementById("incrementation" ).value = isNumber;
}

function Decreasment()
{
      var isNumber = parseInt(document.getElementById("incrementation" ).value);
      isNumber = isNumber-1;
      document.getElementById("incrementation" ).value = isNumber;

if ( isNumber < 1 )
    isNumber = 1;
                    document.getElementById("incrementation" ).value = isNumber;
}