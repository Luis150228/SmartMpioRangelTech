// const btn = document.querySelector('#btn-menu');
const imgApp = document.querySelector('#img-app');
const menu = document.querySelector('#sidemenu');
const headerMain = document.querySelector('#main-content');
const headerFix = document.querySelector('header');
const ham = document.querySelector('#hamburger');
const btnmin = document.querySelectorAll('.la-angle-up');
const upper = document.querySelector('.up-area');
const progressArea = document.querySelector('.progress-area');
const uploadedArea = document.querySelector('.uploaded-area');

const fileInput = upper.querySelector('.file-input');
// const form = document.querySelector('form')

// hamburger.addEventListener('click', e=>{
//     // toggle.classList.toggle('active');
//     console.log('object');
// });

ham.addEventListener('click', e=>{
    ham.classList.toggle('active');
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});



imgApp.addEventListener('mouseenter', e=>{
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});

imgApp.addEventListener('mouseout', e=>{
    menu.classList.toggle('sidebar-min')
    menu.classList.toggle('sidebar-full')
    headerMain.classList.toggle('main-content-min')
    headerMain.classList.toggle('main-content-full')
    headerFix.classList.toggle('head-min')
    headerFix.classList.toggle('head-full')
});

/**/

const uploadFile = (nombre)=>{
    let xhr = new XMLHttpRequest()// Create new obj Ajax
    let formData = new FormData();
    formData.append("inpFile", fileInput.files[0]);

    xhr.open('POST', 'php/upload.php');
    xhr.upload.addEventListener('progress', ({loaded, total})=>{
       let fileLoaded = Math.floor((loaded/total) * 100);
       let fileTotal = Math.floor(total/1000);

    //    console.log(`El total es : ${fileTotal} y el prc de avance es de ${fileLoaded}`);
    let progressHTML = `
            <li class="row">
                <i class="las la-archive"></i>
                <div class="content">
                    <div class="details">
                        <span class="name-file">${nombre} &bull; Subiendo </span>
                        <span class="porcent">${fileLoaded}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${fileLoaded}%"></div>
                    </div>
                </div>
            </li>
    `;
    progressArea.innerHTML = progressHTML;

    // let uploadedHTML = `
    //         <li class="row">
    //             <i class="las la-file-alt"></i>
    //             <div class="content">
    //                 <div class="details">
    //                     <span class="name-file">imagen_01.png &bull; Correcto </span>
    //                     <span class="size-file">5.0 kb</span>
    //                 </div>
    //             </div>
    //             <i class="icon las la-save"></i>
    //         </li>
    // `;
    // uploadedArea.innerHTML = uploadedHTML;

    });
    // xhr.upload.addEventListener('progress', e=>{
    //     console.log(e);
    // });
    xhr.send(formData);
}


upper.addEventListener('click', ()=>{
    fileInput.click();
})

fileInput.onchange = ({target}) =>{
    // console.log(target.files);
    let file = target.files[0];/*Si existe el archivo en la posision [0] significa que se ahn seleccionado varios archivos y con esto obtendremos solo el primero*/
    if (file) {
        let fileName = file.name;
        console.log(fileName); 
        uploadFile(fileName);
    }
}


/*
fileInput.addEventListener('change', e=>{
    // console.log(e);
    const endpoint = "../php/upload.php"
    const formData = new FormData();
    // console.log(fileInput.files[0]);
    formData.append("inpFile", fileInput.files[0]);
    fetch(endpoint,{
        method: 'POST',
        body: formData
    }).catch(console.error)
})
*/

/** */