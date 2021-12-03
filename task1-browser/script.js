const btn = document.getElementById('btn');
const tables=document.querySelectorAll('table')
let figuresData=[]
let evenDataHTML=''
let oddDataHTML=''

const getFiguresData=()=>{ 
    for(let i = 0; i<20; i++){
    const number=Math.floor(Math.random()*100)
    figuresData.push(number)
    }
    return (figuresData.sort((a,b)=>a-b));
}
const reset=()=>{
    figuresData=[]
    evenDataHTML=''
    oddDataHTML=''
}
const loadTable=(figuresData)=>{
    getFiguresData()
    const evenTableBody=document.getElementById('evenTableData');
    const oddTableBody=document.getElementById('oddTableData')
 
    
    for(let data of figuresData){
        if(data % 2 == 0){
            evenDataHTML += `<tr><td>${data}</td></tr>`}
            else{
                oddDataHTML += `<tr><td>${data}</td></tr>`}
        }
        tables.forEach((table)=>table.className='active')   
        evenTableBody.innerHTML=evenDataHTML;
        oddTableBody.innerHTML=oddDataHTML  ; 
        reset()

}

btn.addEventListener('click', ()=>{
    loadTable(figuresData)
    
}
)