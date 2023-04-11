function addPara(content){
   const para = document.createElement('p')
   para.innerText = content
   document.body.appendChild(para)
   para.style.color = 'blue'
   para.style.fontSize = 'x-large'
}

addPara('This is the Paragraph element which is created by Javascript')