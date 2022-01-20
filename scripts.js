function filterFunction() 
{
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) 
  {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) 
    {
      a[i].style.display = "";
    } 
    else 
    {
      a[i].style.display = "none";
    }
  }
}
function search(form)
{
  var TestVar = document.getElementById("myInput").value;
  let text = TestVar;
  var loc = "https://www.countryreports.org/country/"+TestVar+".htm";
  // document.getElementById("demo2").innerHTML = loc;
  result = "<a href= "+loc+ ">" + text + "</a>";
  document.getElementById("demo2").innerHTML = result;
}