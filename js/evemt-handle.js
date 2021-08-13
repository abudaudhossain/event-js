function justFunction(){
    const p = document.getElementById('click-method');
    p.innerText = 'Add just fuction text';
}
document.getElementById('directAddEvent').onclick = function(){
    const p = document.getElementById('click-method');
    p.innerText = 'Add direct add event listener fuction text';
}

  //call function
  function updateName(){
    const p = document.getElementById('click-method');
    const name = document.getElementById('name');
    console.log(name.value);
    p.innerText =  name.value;
   name.value = "";
   }

   //direct function
   document.getElementById('update-name').addEventListener('click', function(){
    const p =document.getElementById('click-method');
    const name = document.getElementById('name');
    p.innerText = name.value;
    name.value = '';
   });