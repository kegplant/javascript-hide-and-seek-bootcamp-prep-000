function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  const subTree=document.querySelector('#nested')
  const targ=subTree.querySelector('.target')
  return targ;
}
function increaseRankBy(n){
  const lists=document.querySelectorAll('ul.ranked-list li')
  for (let i=0;i<lists.length; i++){
    lists[i].innerHTML=parseInt(lists[i].innerHTML)+n;
  }
}
function deepestChild(){
  const grandNode=document.querySelector('div#grand-node')
  var current=grandNode;
  var next=[]
  var last=[]
  while (current){
    last=current;
    //flatten
    const child=current.querySelector('div>div')//using the fact that single child only
    next.push(child);
    current=next.pop();
  }
  return last
}
