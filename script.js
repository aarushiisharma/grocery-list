
const myArray=[];

    const box=document.getElementById('box')
    const container=document.getElementById('container')
    container.style.position='relative'
    const add=document.getElementById('add')
    const input=document.getElementById('input')


    add.onclick=function(){
        const items=document.createElement('div');
        const [name,price]=input.value.split(',');
        items.dataset.name=name.trim();
        items.dataset.price=price.trim();
        items.textContent=`Name : ${name} , Price : ${price}`
        box.appendChild(items);
        input.value='';
        items.style.marginBottom='10px'


        //add to cart button
        const addToCart=document.createElement('button')
        addToCart.innerText='Add To Cart'
        addToCart.style.backgroundColor='#bc6c25'
        addToCart.style.color='aliceblue'
        addToCart.style.outline='none'
        addToCart.style.border='none'
        addToCart.style.borderRadius='3px'
        addToCart.style.float='right'
        addToCart.style.cursor='pointer'
        items.appendChild(addToCart);

        addToCart.onclick=function(){
            addToCart.style.backgroundColor='#a95308'
            //local storage
            myArray.push(`Name : ${name} , Price : ${price}`)
            localStorage.setItem('copiedText',JSON.stringify(myArray));
        }
    }


    //go to cart button
    const goToCart=document.createElement('button')
        goToCart.innerText='Go To Cart'
        goToCart.style.backgroundColor='#bc6c25'
        goToCart.style.color='aliceblue'
        goToCart.style.outline='none'
        goToCart.style.border='none'
        goToCart.style.borderRadius='3px'
        goToCart.style.cursor='pointer'
        goToCart.style.width='120px'
        goToCart.style.height='50px'
        goToCart.style.position='absolute'
        goToCart.style.bottom='0'
        goToCart.style.marginBottom='10px'
        goToCart.style.marginLeft='90px'
        
        container.appendChild(goToCart)


    goToCart.onclick=function(){
        window.open('index2.html')
    }
