let productBox=document.querySelector('.products-box');
let products=productBox.querySelectorAll('div')
let search=document.querySelector('#search')

search.addEventListener('keyup',function()
{
    let enteredValue=event.target.value.toUpperCase();

    for(let i=0;i<products.length;i++)
        {
            let productName=products[i].querySelector('p').textContent;

            if(productName.toUpperCase().indexOf(enteredValue)<0)
                {
                    products[i].style.display="none";
                }
            else
            {
                products[i].style.display="block";

            }
        }
})

