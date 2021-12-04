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
    // w funkcji reset po prostu usuń elementy z DOMu;
    figuresData=[]
    evenDataHTML=''
    oddDataHTML=''
}
const loadTable=(figuresData)=>{
    // Zamiast używać i modyfikować figuresData na górze dużo lepiej byłoby aby funkcja to zwracała
    // const figuresData = getFiguresData();
    getFiguresData()
    
    // Masz na górze już tables, więc możesz zrobić tables.getElementById('evenTableData');
    const evenTableBody=document.getElementById('evenTableData');
    const oddTableBody=document.getElementById('oddTableData')
 
    
    // Ponownie - przenieś evenDataHtml i oddDataHtml tutaj, nie używaj globalnych zmiennych.
    /*
        Dodatkowo zamiast operować na stringach dużo lepiej byłoby tworzyć elementy.
        const evenDataHtml = document.createElement('tr');
        
        const td = document.createElement('td');
        td.innerHTML = data;
        
        evenData.appendChild(td)
    */
    for(let data of figuresData){
        if(data % 2 == 0){
            evenDataHTML += `<tr><td>${data}</td></tr>`}
            else{
                oddDataHTML += `<tr><td>${data}</td></tr>`}
        }
        tables.forEach((table)=>table.className='active')   
        evenTableBody.innerHTML=evenDataHTML;
        oddTableBody.innerHTML=oddDataHTML;
    
        // funkcję reset przerzuć do click listenera
        /*
        btn.addEventListener('click', ()=>{
            resetTables();
            loadTable();
        });
        */
        reset()

}

btn.addEventListener('click', ()=>{
    loadTable(figuresData)
    
});
