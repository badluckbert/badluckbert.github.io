for (let i = 1; i < 19; i++) 
{
  let elem = document.getElementById(i.toString());
  elem.children[4].children[0].onclick = function(){add1(elem);};
  elem.children[4].children[1].onclick = function(){subtract1(elem);};
  elem.children[4].children[2].onclick = function(){clear(elem);};
}

function add1 (elem) 
{
  let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "-") 
  {
    elem.children[2].innerHTML = "1";
    elem.children[3].innerHTML = 1 - Number.parseInt(par);
  }
  else 
  {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    elem.children[3].innerHTML = (currentScore + 1) - Number.parseInt(par);
  }
    setTotals(elem);  
}

function subtract1 (elem) 
{
  let par = elem.children[1].innerHTML;
  if(elem.children[2].innerHTML == "1") 
  {
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
  }
  else
  {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    elem.children[3].innerHTML = (currentScore - 1) - Number.parseInt(par);
  }
  setTotals(elem);
}

function clear (elem) {
  elem.children[2].innerHTML == "-";
  elem.children[3].innerHTML == "-";
  setTotals(elem);
}

function setTotals (elem)
{
  totals.children[2].innerHTML = Number.parseInt(totals.children[2].innerHTML) + Number.parseInt(elem.children[2].innerHTML);
}
