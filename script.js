const para = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac turpis in congue. Duis bibendum dolor mi, vitae accumsan ex rhoncus ut. Proin metus nisi, feugiat eget sapien eleifend, tincidunt vestibulum nunc. Curabitur vitae enim nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus interdum lobortis. Nulla turpis metus, porttitor in risus id, rhoncus feugiat elit. Aenean ut ligula a felis porttitor scelerisque nec in justo. Phasellus vitae quam et tellus sagittis euismod. Aliquam ornare libero quis eros volutpat, in bibendum ligula volutpat. Quisque nibh eros, placerat sit amet molestie eu, tincidunt non sapien. Pellentesque quis gravida augue, sit amet luctus orci. Morbi non tincidunt dolor, vitae malesuada metus.`,

    `Vestibulum sit amet libero vehicula, pharetra ligula non, rhoncus nisl. Pellentesque sit amet augue ante. Curabitur ac velit quis sem aliquam lacinia vitae nec augue. Cras vestibulum hendrerit consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non dapibus dui, eget lacinia mi. Integer facilisis nec erat ac hendrerit. Maecenas id ex fermentum, porta nisi a, rutrum magna. Aenean faucibus pulvinar purus, at egestas sem mattis nec. Morbi ultricies, ipsum eget semper maximus, leo leo mattis lectus, id rutrum magna dui sit amet arcu.`,

    `Suspendisse bibendum nulla tortor, in laoreet dui posuere vel. Phasellus porttitor dui augue, in pharetra risus sagittis ac. Phasellus feugiat nisl id orci porttitor, ac ultricies lectus venenatis. Aenean viverra arcu in magna elementum, non semper elit malesuada. Maecenas ut felis arcu. Etiam sed urna eu lorem varius pellentesque id sit amet metus. Vestibulum est ipsum, pulvinar quis tincidunt eu, dignissim nec libero. Nullam lobortis metus in euismod vulputate. Mauris pellentesque ante sit amet libero finibus, vel lobortis turpis efficitur. Vivamus eget suscipit leo. Aenean a metus sodales, hendrerit mi in, varius justo.`,

    `Donec enim neque, suscipit et justo et, venenatis faucibus urna. Phasellus efficitur viverra orci. Suspendisse potenti. Sed diam elit, finibus non erat sed, fringilla rhoncus erat. Donec tincidunt quam vel nulla commodo, nec consectetur enim consequat. Aliquam vel est vitae velit placerat dignissim vitae quis lorem. Donec pulvinar enim quis venenatis bibendum. Maecenas feugiat lobortis mauris, eu ornare lorem accumsan nec. Ut ligula enim, luctus sed turpis ac, elementum bibendum nisl. Morbi id mi faucibus, gravida eros at, varius mi. Quisque dictum non nunc mattis molestie. Pellentesque vitae neque vitae augue fermentum tempus.Nunc posuere libero vel nulla dapibus consectetur. In hac habitasse platea dictumst. Nulla facilisi. Cras lacinia erat non turpis ultricies efficitur. Sed consectetur tortor at euismod tincidunt. Suspendisse quis ligula iaculis, maximus tortor blandit, suscipit nisl.`,
    
    `Etiam sed urna eu lorem varius pellentesque id sit amet metus. Vestibulum est ipsum, pulvinar quis tincidunt eu, dignissim nec libero. Nullam lobortis metus in euismod vulputate. Mauris pellentesque ante sit amet libero finibus, vel lobortis turpis efficitur. Vivamus eget suscipit leo. Aenean a metus sodales, hendrerit mi in, varius justo.Donec enim neque, suscipit et justo et, venenatis faucibus urna. Phasellus efficitur viverra orci. Suspendisse potenti. Sed diam elit, finibus non erat sed, fringilla rhoncus erat. Donec tincidunt quam vel nulla commodo, nec consectetur enim consequat. Aliquam vel est vitae velit placerat dignissim vitae quis lorem. Donec pulvinar enim quis venenatis bibendum. Maecenas feugiat lobortis mauris, eu ornare lorem accumsan nec. Ut ligula enim, luctus sed turpis ac, elementum bibendum nisl.`,
];


const form= document.querySelector(".form");
const amount= document.getElementById('amount');
const result= document.querySelector('.text');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value= parseInt(amount.value);
    const random= Math.floor(Math.random()*para.length);


    if(value==='' || isNaN(value) || value<0 || value>9 || value===1){
        result.innerHTML= `<p class="result">${para[random]}</p>`;
    }

    else{
        let tempText= para.slice(0,value);
        tempText= tempText.map(function(item){
            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML=tempText;
    }

});




