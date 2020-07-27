var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "onida") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "registration") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}


var list1 = [];

var rb1
var rb2
var n = 1;
        
function AddRow(){
var AddRown = document.getElementById('show');
var NewRow = AddRown.insertRow(n);
list1[0] = document.getElementById("fname").value;
list1[1] = document.getElementById("lname").value;
if( !(list1[0]) || !(list1[1]))
{
  alert("Enter the Name correctly");
  return;
}
              
list1[2] = document.getElementById("email").value;
var em= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+)\.([a-zA-Z0-9\.-]+)/
if(!em.test(list1[2]) )
{
 alert("Enter the email correctly");
 document.getElementById("email").value='';
 return;
}
              
list1[3] = document.getElementById("age").value;

if(isNaN(list1[3]))
{
alert("Age cannot be "+list1[3]+"!!\n Enter Numeric values only!!");
document.getElementById('age').value='';
return; 
}
list1[4] = document.getElementById("model").value;
list1[5] = document.getElementById("quantity").value;
if(list1[5]=="")
{
  alert(" Quantity cannot be Empty !!\n Enter Numeric values only!!");
  document.getElementById('age').value='';
  return; 
}
if(isNaN(list1[5]))
{
  alert(" Quantity cannot be "+list1[5]+"!!\n Enter Numeric values only!!");
  document.getElementById('age').value='';
  return; 
}
              
rb1=document.getElementById("op")
rb2=document.getElementById("COD")
if(rb1.checked==true)
{
  list1[6]=rb1.value;
}
else if(rb2.checked==true)
{
  list1[6]=rb2.value;
}
else
{
  alert("Please Select Payment Option");
  return;
}
              
              

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);
var cel5 = NewRow.insertCell(4);
var cel6 = NewRow.insertCell(5);
var cel7 = NewRow.insertCell(6);
cel1.innerHTML = list1[0];
cel2.innerHTML = list1[1];
cel3.innerHTML = list1[2];
cel4.innerHTML = list1[3];
cel5.innerHTML = list1[4];
cel6.innerHTML = list1[5];
cel7.innerHTML = list1[6];
document.getElementByClass("form1").value='';
              

        
n++;
}
        