function mostrarVideos(){
    const videos = [
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/-wm6F89rXhI?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers , La Vida es Hermosa Disuacidio  - Bromato de Armonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title : 'La Vida es Hermosa Disuacidio ',
        },
        {
            code: '<iframe width="300" height="300" src="https://www.youtube.com/embed/M5HhIbSyYgg?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="La Yegua Mía · Aquí Les Luthiers · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'La Yegua Mía'
        },
        {
            code: '<iframe width="300" height="300" src="https://www.youtube.com/embed/YnEJg5qYjgY?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Amor a Primera Vista - Bossa Libidinossa - Los Premios Mastropiero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Amor a Primera Vista'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/lrKPY7WB2sI?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Los Jovenes de Hoy en Día - Todo Por Que Rias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Los Jovenes de Hoy en Día'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/6vHn_U80rs8?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers - Manuel Darío - Unen Canto con Humor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Manuel Darío'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/QLd8Bxzyh1k?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Encuentro en el Restaurante -  Grandes Hitos Antología 1995" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title : 'Encuentro en el Restaurante'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/VENkNeay3jE?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers - La Gallina Dijo Eureka - Hacen Muchas Gracias De Nada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'La Gallina Dijo Eureka'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/7ydlVCj94x4?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Payada de la Vaca · Aquí Les Luthiers · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Payada de la Vaca'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/MeEnkNNvTSk?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Perdónala (Bolérolo) · El Grosso Concerto · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'El Grosso Concerto'
        },
        {
            code : '<iframe width="300" height="300" src="https://www.youtube.com/embed/OXrYNPJQoTA?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Teorema de Thales · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Teorema de Thales'
        }
    ]
    const videoList = document.getElementById("video-list");
    const repeat = document.getElementById("cantidad").value;

    videoList.innerHTML = '';


for (let index = 0; index < repeat; index++) {
    let r = Math.floor(Math.random() * 10)
    videoList.innerHTML += '<li class="caja"> ' + videos[r].title + ' ' + videos[r].code + '</li>';
}
}


mostrarVideos();