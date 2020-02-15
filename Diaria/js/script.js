window.onbeforeunload = clearInputs()

function completeOptions(){
    const select = document.querySelectorAll('select')
    for (let j = 0; j <= 3 ; j++){
        for (let i = 1; i <= 50; i++) {
            const option = document.createElement('option')
            option.setAttribute('value',i)
            option.innerText = i
            select[j].appendChild(option);
        } 
    }
}

function clearInputs(){
    const inputs = document.querySelectorAll('input')
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    }
}

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
function hiddendailyHalf(ckecked) {
    const dailyHalf = document.querySelector('[half-daily]').classList            
    if(ckecked){
        dailyHalf.add('hidden')
    }else{
        dailyHalf.remove('hidden')
    }  
}

const isForeign = document.querySelector('[hidden-half-daily]')
isForeign.addEventListener('change', (el) => {  
    hiddendailyHalf(isForeign.checked)
})

isForeign.dispatchEvent(new Event("change"))

let countStep = 0;
const step = document.querySelector('step')

function includeStep(){
        countStep++
        const divrow = document.createElement('div')
        divrow.setAttribute('class','row')
        step.appendChild(divrow)
        const divcol = document.createElement('div')
        divcol.setAttribute('class','col')
        divrow.appendChild(divcol)
        const divcol1 = document.createElement('div')
        divcol1.setAttribute('class','col col-2 col-4')
        const divflex1 = document.createElement('div')
        divflex1.setAttribute('class','flex-container')
        const divlabel1 = document.createElement('div')
        divlabel1.setAttribute('class','label-text')
        const label1 = document.createElement('label')
        label1.setAttribute('for','localityStep'+ countStep)
        label1.innerText = countStep + '° Pernoite'
        const divinput1 = document.createElement('div')
        divinput1.setAttribute('class','input-text')
        const input1 = document.createElement('input')
        input1.setAttribute('type','text')
        input1.setAttribute('name','localityStep'+countStep)
        input1.setAttribute('id','localityStep'+countStep)
        input1.setAttribute('maxlength', '4')
        input1.setAttribute('placeholder', 'Ex.: SBBR')
        divcol.appendChild(divcol1)
        divcol1.appendChild(divflex1)
        divflex1.appendChild(divlabel1)
        divflex1.appendChild(divinput1)
        divlabel1.appendChild(label1)
        divinput1.appendChild(input1)

        const divcol2 = document.createElement('div')
        divcol2.setAttribute('class','col col-2 col-4')
        const divflex2 = document.createElement('div')
        divflex2.setAttribute('class','flex-container')
        const divinput2 = document.createElement('div')
        divinput2.setAttribute('class','input-text')
        const input2 = document.createElement('input')
        input2.setAttribute('type','checkbox')
        input2.setAttribute('name','auxDesloc'+countStep)
        input2.setAttribute('id','auxDesloc'+countStep)
        const label2 = document.createElement('label')
        label2.setAttribute('for','auxDesloc'+countStep)
        label2.innerText = ' Aux. Desloc.? '
        const divinput3 = document.createElement('div')
        divinput3.setAttribute('class','input-text')
        const input3 = document.createElement('input')
        input3.setAttribute('type','checkbox')
        input3.setAttribute('name','isForeignStep'+countStep)
        input3.setAttribute('id','isForeignStep'+countStep)
        const label3 = document.createElement('label')
        label3.setAttribute('for','isForeignStep'+countStep)
        label3.innerText = ' Exterior ou Acolhida?'
        divcol.appendChild(divcol2)
        divcol2.appendChild(divflex2)
        divflex2.appendChild(divinput2)
        divinput2.appendChild(input2)
        divinput2.appendChild(label2)
        divflex2.appendChild(divinput3)
        divinput3.appendChild(input3)
        divinput3.appendChild(label3)

        const divcol4 = document.createElement('div')
        divcol4.setAttribute('class','col col-2 col-4')
        const divflex4 = document.createElement('div')
        divflex4.setAttribute('class','flex-container')
        const divlabel4 = document.createElement('div')
        divlabel4.setAttribute('class','label-text')
        const label4 = document.createElement('label')
        label4.setAttribute('for','dateStart'+ countStep)
        label4.innerText = 'Início do Pernoite'
        const divinput4 = document.createElement('div')
        divinput4.setAttribute('class','input-text')
        const input4 = document.createElement('input')
        input4.setAttribute('type','date')
        input4.setAttribute('name','dateStart'+countStep)
        input4.setAttribute('id','dateStart'+countStep)
        divcol.appendChild(divcol4)
        divcol4.appendChild(divflex4)
        divflex4.appendChild(divlabel4)
        divflex4.appendChild(divinput4)
        divlabel4.appendChild(label4)
        divinput4.appendChild(input4)

        const divcol5 = document.createElement('div')
        divcol5.setAttribute('class','col col-2 col-4')
        const divflex5 = document.createElement('div')
        divflex5.setAttribute('class','flex-container')
        const divlabel5 = document.createElement('div')
        divlabel5.setAttribute('class','label-text')
        const label5 = document.createElement('label')
        label5.setAttribute('for','dateEnd'+countStep)
        label5.innerText = 'Fim do Pernoite'
        const divinput5 = document.createElement('div')
        divinput5.setAttribute('class','input-text')
        const input5 = document.createElement('input')
        input5.setAttribute('type','date')
        input5.setAttribute('name','dateEnd'+countStep)
        input5.setAttribute('id','dateEnd'+countStep)
        divcol.appendChild(divcol5)
        divcol5.appendChild(divflex5)
        divflex5.appendChild(divlabel5)
        divflex5.appendChild(divinput5)
        divlabel5.appendChild(label5)
        divinput5.appendChild(input5)                
        
        const divlinha = document.createElement('div')
        divlinha.setAttribute('class','row')
        divlinha.innerHTML = "<hr>"
        step.appendChild(divlinha)
        addEventListenerInputs()
        
        calculateDaily()
}

const button = document.querySelector('button')

function calculateDaily(){
    
    const valueNumberGen = document.querySelector('#numberGen').value 
    const numberGen = valueNumberGen * 1.43220339
    const valueNumberSup = document.querySelector('#numberSup').value
    const numberSup = valueNumberSup * 1.19491525
    const valueNumberBas = document.querySelector('#numberBas').value
    const numberBas = valueNumberBas * 1
    const valueNumberPra = document.querySelector('#numberPra').value
    const numberPra = valueNumberPra * 0.83050874
    const groups = createGroups() 

    let totalDaily = 0
    if (countStep > 0){
        totalDaily += calculateDailyStep(groups) 
    }

    totalDaily += calculateDailyHalf(groups)
    totalDaily *= (numberGen + numberSup + numberBas + numberPra)
    totalDaily += calculateAuxTransp()
    const result = document.querySelector('label[for="result"]')          
    result.innerText = 'R$ ' + totalDaily.toFixed(2)
}

function calculateDailyHalf(groups){
    const dateStart = document.querySelector('#dateStart').value
    const dateEnd = document.querySelector('#dateEnd').value
    const hourStart = document.querySelector('#hourStart').value
    const hourEnd = document.querySelector('#hourEnd').value            
    const isForeign = document.querySelector('#isForeign')
    const hourStartDecimal = changeOfHourToDecimal(hourStart)
    const hourEndDecimal = changeOfHourToDecimal(hourEnd)
    const hourDiference = diferenceBetweenDecimalHour(hourStartDecimal, hourEndDecimal)
    const dailyHalf =  document.querySelector('#dailyHalf').value          
    const dateStartMoreOne = toSumOneONDay(dateStart)
    const dateEndModify = createEndDate(dateEnd)            
    const isSameDayAndMoreEightHours = checkSameDayAndMoreEightHours(dateStart,dateEnd, hourStartDecimal, hourEndDecimal)
    const isSequencialDayAndMOreEightHour = checkSequencialDayAndMoreEight(dateStartMoreOne,dateEndModify, hourDiference)
    
    const isDatesNotEmpty = checkHoursNotEmpty(dateStart, dateEnd)
    
    const isHoursNotEmpty = checkHoursNotEmpty(hourStart, hourEnd)
    
    const isMoreOfADay = checkMoreOfADay(dateStartMoreOne, dateEndModify)
    
    const isNotForeign = checkNotForeign(isForeign)
    
    const isNotEmptyDailyHalf = checkNotEmptyDailyHalf(dailyHalf)
    let valueDailyHalf = 0
    
    if(isDatesNotEmpty && isNotForeign){
        if(((isSameDayAndMoreEightHours || isSequencialDayAndMOreEightHour) && (isHoursNotEmpty)) || (isMoreOfADay)){
            if(isNotEmptyDailyHalf){
                const index = getValueGroupsDaily(dailyHalf)
                valueDailyHalf += (0.5 * groups[index])
            }  
        }       
    }
    return valueDailyHalf
}

function checkDatesNotEmpty(dateStart, dateEnd){
    isNotEmpty = (dateStart != '') && (dateEnd != '')
    return isNotEmpty
}

function checkHoursNotEmpty(hourStart, hourEnd){
    isNotEmpty = (hourStart != '' && hourEnd != '')
    return isNotEmpty
}

function checkMoreOfADay(dateStartMoreOne, dateEndModify){
    isNotEmpty = (dateStartMoreOne < dateEndModify)
    return isNotEmpty
}

function checkSameDayAndMoreEightHours(dateStart, dateEnd, hourStart, hourEnd){
    isChecked = (dateStart === dateEnd && isMoreEightHoursInSameDay(hourStart, hourEnd))
    return isChecked
}

function checkSequencialDayAndMoreEight(dateStartMoreOne, dateEndModify, hourDiference){
    isChecked = (dateStartMoreOne - dateEndModify == 0 && isMoreEightHours(hourDiference) )
    return isChecked
}

function checkNotForeign(isForeign){
    const isNotForeign = !isForeign.checked
    return isNotForeign
}

function checkNotEmptyDailyHalf(dailyHalf){
    isNotEmpty = (dailyHalf != '' && dailyHalf.length == 4)
    return isNotEmpty
}

function diferenceBetweenDecimalHour(hourStart, hourEnd){
    const diference = hourEnd - hourStart < 0 ? 1 - (hourStart - hourEnd) : 1 - (hourEnd - hourStart)           
    return diference
}

function changeOfHourToDecimal(hour){
    const onlyHour = parseInt(hour.substr(0,2))
    const onlyMinute = parseInt(hour.substr(3,2))
    const decimal = (onlyHour+(onlyMinute/60))/24
    return decimal
}

function isMoreEightHours(hourDiference){
    isChecked = hourDiference >= 0.3333333333
    return isChecked
}

function isMoreEightHoursInSameDay(hourStart, hourEnd){
    ischecked = hourStart + 0.33333333 <= hourEnd
    return ischecked
}

function toSumOneONDay(date){
    const dayMoreOne = new Date(date.slice(0,4),date.slice(5,7)-1,parseInt(date.slice(8,10))+1)
    return dayMoreOne
}

function createEndDate(date){
    const newEndDate = new Date(date.slice(0,4),date.slice(5,7)-1,date.slice(8,10))
    return newEndDate
}

function createGroups(){
    const groups = [224.2,212.4,200.6,177]  
    return groups
}

function calculateDailyStep(groups){
    let totalDailyStep = 0
    for (let k = 1; k <= countStep; k++){
        const dateStartStep = document.querySelector('#dateStart'+k).value
        const dateEndStep = document.querySelector('#dateEnd'+k).value
        const isForeignStep = document.querySelector('#isForeignStep'+k) 
        dateStartTransformed = changeInputInDate(dateStartStep)
        dateEndTransformed = changeInputInDate(dateEndStep)
        const qtyDaily = daysBetweenDates(dateStartTransformed, dateEndTransformed)
        const localityStep = document.getElementById('localityStep'+k).value
        const index = getValueGroupsDaily(localityStep)
        if((dateStartStep != '') && (dateEndStep != '') && (!isForeignStep.checked)) {
            if((dateStartStep<dateEndStep) && (dateEndStep<=dateEnd)){
                if(localityStep != '' && localityStep.length == 4){
                    totalDailyStep += qtyDaily * groups[index]  
                } 
            }          
        }
    }
    return totalDailyStep
}

function calculateAuxTransp(){
    let totalAuxTransp = 0
    for (let k = 1; k <= countStep; k++) {
        const auxDeslocStep = document.querySelector('#auxDesloc'+k)
        totalAuxTransp += auxDeslocStep.checked ? 95 : 0
    }
    return totalAuxTransp
}

function changeInputInDate(dateInput){
    return new Date(dateInput.slice(0,4), dateInput.slice(5,7)-1,dateInput.slice(8,10))            
}

function daysBetweenDates(dateStart, dateEnd){
    return (dateEnd - dateStart)/86400000
}

function getValueGroupsDaily(loc){
    const localitys = new Map()
    localitys.set('SBBR',0)
    localitys.set('SBMN',0)
    localitys.set('SBEG',0)
    localitys.set('SBGL',0)
    localitys.set('SBSC',0)
    localitys.set('SBAF',0)
    localitys.set('SBRJ',0)
    localitys.set('SBSP',1)
    localitys.set('SBMT',1)
    localitys.set('SBSV',1)
    localitys.set('SBBH',1)
    localitys.set('SBFZ',1)
    localitys.set('SBPA',1)
    localitys.set('SBRF',1)
    localitys.set('SBAR',2)
    localitys.set('SBBE',2)
    localitys.set('SBBI',2)
    localitys.set('SBBV',2)
    localitys.set('SBCG',2)
    localitys.set('SBCY',2)
    localitys.set('SBFL',2)
    localitys.set('SBGO',2)
    localitys.set('SBJP',2)
    localitys.set('SBMQ',2)
    localitys.set('SBPJ',2)
    localitys.set('SBPV',2)
    localitys.set('SBRB',2)
    localitys.set('SBSL',2)
    localitys.set('SBTE',2)
    localitys.set('SBVT',2)
    return localitys.get(loc) === undefined ? 3 : localitys.get(loc.toUpperCase())
}

function load(){
    const eventList = document.querySelector(".container")
    eventList.addEventListener("change",calculateDaily,false)
    completeOptions()
    addEventListenerInputs()
    console.log("ok")
}       
document.addEventListener("DOMContentLoaded",load,false)