const box2=document.getElementById('box2')
    box2.style.boxShadow='6px 6px 15px rgb(20, 20, 20)'
    box2.style.borderRadius='10px'
    const container=document.getElementById('container')
    container.style.position='relative'
    const cartItem=JSON.parse(localStorage.getItem('copiedText'));
    console.log('cart',cartItem);
    
    cartItem.forEach(item => {
        const items2=document.createElement('div');
        items2.textContent=item;
        items2.style.marginBottom='10px'
        items2.style.marginLeft='8px'
        items2.style.paddingBottom='10px'

        box2.appendChild(items2);
    });    
    

    //total button
    const total=document.createElement('button')
    total.innerText='Total'
    total.style.width='120px'
    total.style.height='50px'
    total.style.backgroundColor='blue'
    total.style.border='none'
    total.style.outline='none'
    total.style.color='aliceblue'
    total.style.backgroundColor='#bc6c25'
    total.style.position='absolute'
    total.style.bottom='0'
    total.style.marginBottom='10px'
    total.style.marginLeft='90px'
    total.style.borderRadius='3px'
    total.style.cursor='pointer'

    container.appendChild(total)



    total.onclick=function(){

        let totalPrice=0;
        
        cartItem.forEach(item=>{
            const priceMatch = item.match(/Price\s*:\s*([\d.]+)/);
            totalPrice=totalPrice+parseFloat(priceMatch[1]);
            
        })
        const price=document.createElement('div')
        price.innerText=`Total Price = Rs ${totalPrice}`;
        price.style.width='190px'
        price.style.height='50px'
        price.style.color='aliceblue'
        price.style.position='absolute'
        price.style.bottom='0'
        price.style.marginBottom='80px'
        price.style.marginLeft='70px'
        price.style.display='flex'
        price.style.alignItems='center'
        price.style.fontSize='20px'
        price.style.fontWeight='bold'
        //price.style.backgroundColor='blue'
        
        container.appendChild(price);
    }
