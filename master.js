const images = [
    'https://images.nrc.nl/EMQgkYey4Z5xdO4EDZXfEOJYkZk=/1280x/filters:no_upscale()/s3/static.nrc.nl/images/gn4/stripped/data55213230-0c6b05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpGjZpejkhV6KxHRkxvEk1DNHr0TiGsL-n3AMtrX7F_ivsfm3i',
    'https://img.bleacherreport.net/img/images/photos/003/845/673/hi-res-e2496044a6094b9d2298800075cd32b4_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top',
    'https://s.hs-data.com/bilder/teamfotos/640x360/543.jpg',
    'https://www.rtlnieuws.nl/sites/default/files/styles/liggend/public/content/images/2019/07/04/ANP-66526237.jpg?h=99362da5&itok=5wwwddQI',
    'https://icdn.football-espana.net/wp-content/uploads/2020/02/pique-epa19022020.jpg',
    'https://images0.persgroep.net/rcs/eUpR9ZgAnRPPcOw8py2hV6io7_o/diocontent/141173678/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9',
    'https://images.daznservices.com/di/library/GOAL/75/8e/sergio-ramos-spain-2019_196otpsmty7t61uxo7awcqgu8i.jpg?t=280205261&quality=100',
    'https://media.nu.nl/m/mquxipfa2aai_wd1280.jpg/zirkzee-scoort-bij-grote-zege-bayern-in-bizarre-wedstrijd-bij-hoffenheim.jpg',
    'https://images.daznservices.com/di/library/GOAL/fb/13/mohamed-salah-sadio-mane-roberto-firmino-liverpool-2019-20_1qykhyuiszfhr1f2ac7wdpk37x.jpg?t=-1198053952&quality=100',
    'https://media.nu.nl/m/2utxcpra02qm_wd640.jpg/liverpool-lijdt-bij-watford-eerste-competitienederlaag-in-ruim-een-jaar.jpg',
    'https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2020/02/27/copyright-proshots-7149313.jpg/jcr:content/copyright-proshots-7149313.jpg',
    'https://www.telegraph.co.uk/content/dam/football/2020/03/03/TELEMMGLPICT000226822977_trans_NvBQzQNjv4Bqg0QhGUrJBLC1cMiJLC7a76ueEB3KkXZyY8pt0FWUtPs.jpeg?imwidth=450',
    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Valencia_CF_squad_-_Europa_League_2019.jpg',
    'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/02/29/15829948799291.jpg',
    'https://files.voetbalprimeur.nl/news/2019/09/17/v2_large_f06a9b86474591f320e785ca8c1adb81632f9f75.jpg',
    'https://files.voetbalprimeur.nl/news/2020/02/21/v2_large_7a6ce36e4db79b4d1687e8f2e08c456d4875b2c2.png',
    'https://images3.persgroep.net/rcs/iOmUZtsmCsz8KBXEDIeJ2rPMOyY/diocontent/168246508/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8',
    'https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2020/02/20/copyright-proshots-6992859.jpg/jcr:content/copyright-proshots-6992859.jpg',
];

const box = document.getElementById('box');

function uploadimg(url) {
    let div = document.createElement('div');
    div.className = 'imgdiv';
    let main = document.createElement('img');
    main.src = url;
    main.alt = 'Image loading';
    div.append(main);
    box.append(div);
}

for (let i = images.length; i > 0; i--) {
    let number = Math.floor(Math.random()* images.length)
    uploadimg(images[number]);
    images.splice(number, 1);
}
