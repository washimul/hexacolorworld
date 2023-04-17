//globaal variable
let div = null;

window.onload=()=>{
  main()
};

function main(){
  const root = document.getElementById('root');
  const output = document.getElementById('output');
  const changeBtn = document.getElementById('change-btn');
  const copyBtn = document.getElementById('copy-btn');

  changeBtn.addEventListener('click', function(){
    const bgColor = generateHexColor();
    root.style.backgroundColor=bgColor;
    output.value = bgColor.substring(1);
  })

  copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(`#${output.value}`)
    if(div !== null){
      div.remove();
      div = null;
    }
    if(isValidHexa(output.value)){
      generateToastMessage(`#${output.value} copied`);
    }else{
      alert('Invalid Hexa Code')
    }
  });

output.addEventListener('keyup', function(e){
  const color = e.target.value;
  if(color){
    output.value = color.toUpperCase();
    if(isValidHexa(color)){
      root.style.backgroundColor= `#${color}`;
      }
    }
  })
}  

function generateHexColor() {
	// #000000 #ffffff
	// 255, 255, 255 -> #FFFFFF
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

function generateToastMessage(message){
  div = document.createElement('div');
  div.innerText = message;
  div.className='toast-message';
  div.className = 'toast-message toast-message-slide-in';

  div.addEventListener('click', function(){
    div.classList.remove('toast-message-slide-in');
    div.classList.add('toast-message-slide-out');
    
    div.addEventListener('animationend', function(){
      div.remove();
      div = null;
    })
  })

  document.body.appendChild(div);
}

/**
 * @param{string} color: ;
 */
function isValidHexa(color){
  if(color.length !==6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color)
};

// declar window.onload fucntion
// fucntion main from window onload fucntion
// identify constant variable form html by id
// generate function for color code hexa decimal
// change in return use to string 16 for coversion
// colick event and Eevent listener, command for changing bg color
// define outpur an assign bgcolor code
// rgb(0,0,0); rgb(255,255,255)
// we take another button is name copy, with specific id
// write the refernce const
//another evernt listener added with function- use navigator.clipboard.writetext fucntion deafault from browser
//add a toast message
//activate toast message
//create dynamic taoast message
//clear toast message
//input disbale removed
// user can write on input box
//check Hexa code valid or not
// also validation applied in copy function