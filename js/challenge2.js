function challenge2(){

   let bill = document.querySelector('#bill')

   let home = document.querySelector('#home')

 

    console.log('this works')

 

    if(document.querySelector('#sameAddress').checked){

        home.value=bill.value;

        home.disabled=true;

    }

    else{

        home.value = ""

        home.disabled = false

    }

}
