let total = document.getElementById("totals");
for (let i = 1; i < 19; i++) 
{
  let elem = document.getElementById(i.toString());
  elem.children[4].children[0].onclick = function(){add1(elem);};
  elem.children[4].children[1].onclick = function(){subtract1(elem);};
  elem.children[4].children[2].onclick = function(){clear(elem);};
  total.children[1].innterHTML += Number.parseInt(elem.children[1].innerHTML);
}



function add1 (elem) 
{
  let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "-") 
  {
    elem.children[2].innerHTML = "1";
    elem.children[3].innerHTML = 1 - Number.parseInt(par);
    if(total.children[2].innerHTML == "-")
    {
      total.children[2].innerHTML = Number.parseInt(elem.children[2].innerHTML);
      total.children[3].innerHTML = Number.parseInt(elem.children[3].innerHTML);
    }
    else
    {
      total.children[2].innerHTML += 1;
      total.children[3].innerHTML += Number.parseInt(elem.children[3].innerHTML);
    }
  }
  else 
  {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    elem.children[3].innerHTML = (currentScore + 1) - Number.parseInt(par);
    currentScore = Number.parseInt(total.children[2].innerHTML);
    total.children[2].innerHTML = currentScore + 1;
    total.children[3].innerHTML = (currentScore + 1) - Number.parseInt(par);
  }
}

function subtract1 (elem) 
{
  let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "1" || elem.children[2].innerHTML == "-") 
  {
    if(total.children[2].innerHTML == elem.children[2].innerHTML)
    {
      total.children[2].innerHTML = "-";
      total.children[3].innerHTML = "-";
    }
    else
    {
      total.children[2].innerHTML -= Number.parseInt(elem.children[2].innerHTML);
      total.children[3].innerHTML -= Number.parseInt(elem.children[3].innerHTML);
    }
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";  
  }
  else
  {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    elem.children[3].innerHTML = (currentScore - 1) - Number.parseInt(par);
    currentScore = Number.parseInt(total.children[2].innerHTML);
    total.children[2].innerHTML = currentScore - 1;
    total.children[3].innerHTML = (currentScore - 1) - Number.parseInt(par);
  }
}

function clear (elem) 
{
  if(total.children[2].innerHTML == elem.children[2].innerHTML)
  {
    total.children[2].innerHTML = "-";
    total.children[3].innerHTML = "-";
  }
  else
  {
    total.children[2].innerHTML -= Number.parseInt(elem.children[2].innerHTML);
    total.children[3].innerHTML -= Number.parseInt(elem.children[3].innerHTML);
  }
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}
