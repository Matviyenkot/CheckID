'use strict';

const addID = document.querySelector('#addID'),
      input = document.querySelector('input'),
      output = document.querySelector('.idWrapper'),
      table = document.querySelector('table'),
      clear = document.querySelector('#clear'),
      ded = document.querySelector('.ded'),
      body = document.querySelector('body');


let arr = [];
input.value = '111';

ded.classList.add('hiden');
        

        for( let i = 1; i <= localStorage.getItem('counter'); i++){
            arr.push(localStorage.getItem(i));
            // console.log(i);

            let tr = document.createElement('tr');
                //tr.setAttribute('tr-bin-to', arr.length -1);
                tr.innerHTML = `<td style = "max-width: 250px;">${arr[arr.length -1]} </td>
                <td class = "bins"><img src ="img/recycledBin.png" style = "width: 32px; height: 32px;" ></td>`;
                table.append(tr);
        }
        // console.log(arr);

addID.addEventListener('click', ()=>{
    
    if(input.value){

        if(arr){
            
            if(arr.includes(input.value) || input.value == 'ID already excist!!'){ 
                addID.classList.add('disabled');
                input.value = 'ID already excist!!';
                body.style.backgroundColor = 'red';
                setTimeout(()=>{
                    body.style.backgroundColor = '';
                },100);
        } 
        else {
            addID.classList.remove('disabled');

            if( input.value != 'ID already excist!!'){
                arr.push(input.value);

                arr.forEach((e) => {
                    localStorage.setItem(arr.length, e);
                    localStorage.setItem('counter', arr.length);           
                });
        
                let tr = document.createElement('tr');
                tr.setAttribute('tr-bin-to', arr.length -1);
                tr.innerHTML = `<td style = "max-width: 250px;">${arr[arr.length -1]} </td>
                <td class = "bins"><img src ="img/recycledBin.png" style = "width: 32px; height: 32px;" ></td>`;
                table.append(tr);

                deleteBin();
                // const bins = document.querySelectorAll('.bins');

                // bins.forEach((bin) => {
                //     bin.addEventListener('click' , () =>{
                //         console.log('yaa');
                //     });
                // });
            }
            
            output.classList.add('hiden');
            ded.classList.remove('hiden');
            


            setTimeout(() =>{
                output.classList.remove('hiden');
                ded.classList.add('hiden');
            },400);
    
        }
        addID.classList.remove('disabled');   
        }

        }
        
        
    console.log(arr);

    
    
});


clear.addEventListener('click', ()=>{
        localStorage.clear();
        table.innerHTML = '';
        arr = [];
        input.value = '111';
});

deleteBin();

function deleteBin(){
    const bins = document.querySelectorAll('.bins');

    bins.forEach((bin) => {
        bin.addEventListener('click' , (e) =>{
            console.log('yaa');
            const binTo = e.target.getAttribute('tr-bin-to');
            localStorage.removeItem(bins.length);
            arr.splice(binTo, 1);
            bin.closest("tr").remove();
            localStorage.setItem('counter', arr.length);
        });
    });

}
