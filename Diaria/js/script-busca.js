function inputUpperCase(input){
    input.value = input.value.toUpperCase()
}

function addEventListenerInputs(){
    const inputs = document.querySelectorAll('input[type="text"]')
    for (let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('keyup', (el) => {
            inputUpperCase(inputs[i])
        })
    }
}

function clearRdbtns(){
    isRdbtnOficial.checked = false;
    isRdbtnPraca.checked = false;
}

const isRdbtnPraca = document.getElementById('praca')
isRdbtnPraca.addEventListener('change', (el) => { 
    completeOptionsPraca(isRdbtnPraca.checked)
})

const isRdbtnOficial = document.getElementById('oficial')
isRdbtnOficial.addEventListener('change', (el) => {  
    completeOptionsOficial(isRdbtnOficial.checked)
})

function completeOptionsOficial(checked){
    removeOptions()
    const select = document.querySelector('select')
    const option0 = document.createElement('option')
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    const option3 = document.createElement('option')
    const option4 = document.createElement('option')
    const option5 = document.createElement('option')
    const option6 = document.createElement('option')
    const option7 = document.createElement('option')

    if(checked){
        option0.setAttribute('value','')
        option0.innerText = ''
        select.appendChild(option0);
        option1.setAttribute('value','BR')
        option1.innerText = 'BR'
        select.appendChild(option1);
        option2.setAttribute('value','CL')
        option2.innerText = 'CL'
        select.appendChild(option2);
        option3.setAttribute('value','TC')
        option3.innerText = 'TC'
        select.appendChild(option3);
        option4.setAttribute('value','MJ')
        option4.innerText = 'MJ'
        select.appendChild(option4);
        option5.setAttribute('value','CP')
        option5.innerText = 'CP'
        select.appendChild(option5);
        option6.setAttribute('value','1T')
        option6.innerText = '1T'
        select.appendChild(option6);
        option7.setAttribute('value','2T')
        option7.innerText = '2T'
        select.appendChild(option7);
    }
}

function completeOptionsPraca(checked){
    removeOptions()
    const select = document.querySelector('select')
    const option0 = document.createElement('option')
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    const option3 = document.createElement('option')
    const option4 = document.createElement('option')
    const option5 = document.createElement('option')
    const option6 = document.createElement('option')
    const option7 = document.createElement('option')

    if(checked){
        option0.setAttribute('value','')
        option0.innerText = ''
        select.appendChild(option0);
        option1.setAttribute('value','SO')
        option1.innerText = 'SO'
        select.appendChild(option1);
        option2.setAttribute('value','1S')
        option2.innerText = '1S'
        select.appendChild(option2);
        option3.setAttribute('value','2S')
        option3.innerText = '2S'
        select.appendChild(option3);
        option4.setAttribute('value','3S')
        option4.innerText = '3S'
        select.appendChild(option4);
        option5.setAttribute('value','CB')
        option5.innerText = 'CB'
        select.appendChild(option5);
        option6.setAttribute('value','TM')
        option6.innerText = 'TM'
        select.appendChild(option6);
        option7.setAttribute('value','TF')
        option7.innerText = 'TF'
        select.appendChild(option7);
    } 
}

function removeOptions(){
    const selects = document.querySelectorAll('select')
    for (let k = 0; k < selects.length; ++k) {
        qtdOptions = selects[k].options.length
        for (let i = 0; i < qtdOptions; ++i) {
            selects[k].removeChild(selects[k][0])
        }
    }        
}

function load(){
    clearRdbtns()
    addEventListenerInputs()
} 

document.addEventListener("DOMContentLoaded",load,false)

const isSelectedPosto = document.getElementById('posto')
isSelectedPosto.addEventListener('change', (el) => { 
    completeOptionsName()
})
 
function completeOptionsName(){

    const vPosto = $("#posto option:selected").val()   
    const vUrl = `https://api12gt.herokuapp.com/posto/${vPosto}`
    const loading = document.querySelector('#loading').classList

    $.ajax({
        url: vUrl,
        type: 'GET',
        beforeSend: function () {
            loading.remove('hidden');
        },     
        success:function(dados){
            console.log(dados)
            $('#name').html('');
            $('<option value=""></option>').appendTo('#name');
            for (var i = 0; i < dados.length; i++) {
                $('<option value=\''+dados[i].trigrama+'\'>'+dados[i].nome+'</option>').appendTo('#name');
            };
            loading.add('hidden')
        }
    })
}



const isCbxName = document.getElementById('name')
isCbxName.addEventListener('change', (el) => {

    const name = document.querySelector('#name')
    const id = name.options[name.selectedIndex].value
    const btn = document.querySelector('#busca_militar')
    btn.setAttribute("href", `12gt.php?id=${id}`)
    
})