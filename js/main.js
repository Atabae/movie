const elList = document.getElementById('list')
const Kinolar = [
    {
        NOMI: 'Asalarichi premyera uzbek tilida',
        DAVLATI: 'Aqsh',
        SANASI: '2024',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 40 minut',
        IMG: 'http://images.uzmovi.com/2024-02-01/2ce1d7e13a97b0add146ca198ddf061e.jpg',
        link: 'https://www.youtube.com/watch?v=kfFPxGyPRCc',
        RATING: 8.6 
    },
    {
        NOMI: 'Xavfli poyezd premyera',
        DAVLATI: 'Aqsh',
        SANASI: '2021',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 34 minut',
        IMG: 'http://images.uzmovi.com/ii/1633072085/84fdaefb/36079782.jpg',
        link: 'https://www.youtube.com/watch?v=58r-Rq_TuEI',
        RATING: 7.6 
    },
    {
        NOMI: 'Ekipaj',
        DAVLATI: 'Rossiya',
        SANASI: '2018',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 52 minut',
        IMG: 'http://images.uzmovi.com/ii/1557540004/b56f7a69/26490167.jpg',
        link: 'https://www.youtube.com/watch?v=5nlaow5dmk0',
        RATING: 6.8 
    },
    {
        NOMI: 'Uyda Yolgiz 6 premyera uzbek tilida',
        DAVLATI: 'Aqsh',
        SANASI: '2021',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 34 minut',
        IMG: 'http://images.uzmovi.com/ii/1640926849/b5e3e88d/37350880.jpg',
        link: 'https://www.youtube.com/watch?v=_yswCHGekSM',
        RATING: 9.5 
    },
    {
        NOMI: 'Xavfli uy premyera',
        DAVLATI: 'Aqsh',
        SANASI: '2024',
        JANR: 'Qorqinchili',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 40 minut',
        IMG: 'http://images.uzmovi.com/2024-01-05/7a0a92271bb8a8caa1bdf33177e47751.jpg',
        link: 'https://www.youtube.com/watch?v=HjX2EX58MKQ',
        RATING: 7.5 
    },
    {
        NOMI: 'Yengilmas Boqiy Gvardiya premyera',
        DAVLATI: 'Aqsh',
        SANASI: '2020',
        JANR: 'Qorqinchili',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 06 minut',
        IMG: 'http://images.uzmovi.com/ii/1594868867/6bcbb712/31086510.jpg',
        link: 'https://www.youtube.com/watch?v=_HytoKOoAg0',
        RATING: 6.8 
    },
    {
        NOMI: 'Orgimchak Odam : Uydan Olisdan',
        DAVLATI: 'Aqsh',
        SANASI: '2019',
        JANR: 'Jangari, Dramma',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 47 minut',
        IMG: 'http://images.uzmovi.com/ii/1568837736/55f93f5f/27909758.jpg',
        link: 'https://www.youtube.com/watch?v=Cb7Tfkoln7U',
        RATING: 4.6 

    },
    {
        NOMI: 'Qutqaruvchilar premyera',
        DAVLATI: 'Xitoy',
        SANASI: '2021',
        JANR: 'Melodrama',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 34 minut',
        IMG: 'http://images.uzmovi.com/ii/1617437792/57a2ab53/33928130.jpg',
        link: 'https://www.youtube.com/watch?v=Oh6hSeN4Nag',
        RATING: 8.6 
    },
    {
        NOMI: 'omadli omadsizlar',
        DAVLATI: 'Aqsh',
        SANASI: '2020',
        JANR: 'Jangari, Komediya, Sarguzasht',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 47 minut',
        IMG: 'http://images.uzmovi.com/2022-03-20/c8d8cb297d557604328e868d285dc629.jpg',
        link: 'https://www.youtube.com/watch?v=SSnk3WcorqQ',
        RATING: 8.1 
    },
    {
        NOMI: 'Xatarli topshiriq Qaltis vazifa havfli premyera',
        DAVLATI: 'Janubiy Koreya',
        SANASI: '2019',
        JANR: 'Jangari, Dramma',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 30 minut',
        IMG: 'http://images.uzmovi.com/ii/1574811112/552090f2/28706540.jpg',
        link: 'https://www.youtube.com/watch?v=NLox-acbwvc',
        RATING: 8.8 
    },
    {
        NOMI: 'Samolardan Balantda 2 / три метра над уровнем неба 2',
        DAVLATI: 'Ispaniya',
        SANASI: '2016',
        JANR: 'Jangari, melodrama',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 52 minut',
        IMG: 'http://images.uzmovi.com/ii/1554059572/70bb80c3/26001800.jpg',
        link: 'https://www.youtube.com/watch?v=VG80P9UEPC0',
        RATING: 8.7 
    },
    {
        NOMI: 'Ota va ogil premyera',
        DAVLATI: 'Xitoy',
        SANASI: '2023',
        JANR: 'Jangari, Dramma',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat',
        IMG: 'http://images.uzmovi.com/2023-11-09/61e80ddd6b4a42144307025e4ad3aaa7.jpg',
        link: 'https://www.youtube.com/watch?v=T3RF3DD2cdQ',
        RATING: 8.5
    },
    {
        NOMI: 'Xaloskor 1 Adolat tarafdori Himoyachisi Ximoyachisi',
        DAVLATI: 'Aqsh',
        SANASI: '2016',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '2 soat 10 minut',
        IMG: 'http://images.uzmovi.com/ii/1613889491/19c920d1/33415734.jpg',
        link: 'https://www.youtube.com/watch?v=vak6zs9jRX4',
        RATING: 8.1 
    },
    {
        NOMI: 'Dovyurak 1 yuqori sifatda original premyera',
        DAVLATI: 'Aqsh',
        SANASI: '2021',
        JANR: 'Jangari, Dramma',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '1 soat 58 minut',
        IMG: 'http://images.uzmovi.com/ii/1613281662/1e39dba8/33327169.jpg',
        link: 'https://www.youtube.com/watch?v=em32zHWZqbs',
        RATING: 8.6 

    },
    {
        NOMI: 'forsaj 9',
        DAVLATI: 'Aqsh',
        SANASI: '2020',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '2 soat 20 minut',
        IMG: 'http://images.uzmovi.com/ii/1604422168/85d977f7/32172061.jpg',
        link: 'https://www.youtube.com/watch?v=2yKcmpUTR_s',
        RATING: 9
    },
    {
        NOMI: 'Yigit sozi: Kocha bolasi Premyera yangi serial uzbek ozbek tilida barcha qismlari',
        DAVLATI: 'Rossia',
        SANASI: '2023',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: '55 minut',
        IMG: 'http://images.uzmovi.com/2023-12-08/1c3ad23e8495ce562e0451db404e9bda.jpg',
        link: 'https://www.youtube.com/watch?v=Km8n0zmJ0r0',
        RATING: 11
    },
    {
        NOMI: 'Sahro ovchilari badland ovchisi premyera',
        DAVLATI: 'Janubiy Koreya',
        SANASI: '2024',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: ' 1soat 47 minut',
        IMG: 'http://images.uzmovi.com/2024-01-31/c74ee3092bc79421bfd08adf51f48864.jpg',
        link: 'https://www.youtube.com/watch?v=i7H3cd6wAxo',
        RATING: 11
    },
    {
        NOMI: 'Sirli orol 2 sirli sayohat',
        DAVLATI: 'AQSH',
        SANASI: '2016',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: ' 1soat 47 minut',
        IMG: 'http://images.uzmovi.com/ii/1601036721/f0769ef7/31740659.jpg',
        link: 'https://www.youtube.com/watch?v=4Khm_9NTWq4',
        RATING: 9
    },
    {
        NOMI: 'Fortuna Operatsiyasi premyera',
        DAVLATI: 'AQSH',
        SANASI: '2023',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: ' 1soat 47 minut',
        IMG: 'http://images.uzmovi.com/2023-03-12/b5df93b0b69da770d54985a8491e3d03.jpg',
        link: 'https://www.youtube.com/watch?v=Jqz72V3KFmM',
        RATING: 11
    },
    {
        NOMI: 'Havo Marshali',
        DAVLATI: 'AQSH',
        SANASI: '2016',
        JANR: 'Jangari',
        TILI: 'Ozbek tilida',
        DAVOMIYLIGI: ' 1soat 52 minut',
        IMG: 'http://images.uzmovi.com/ii/1555873529/0158bbc5/26273264.jpg',
        link: 'https://www.youtube.com/watch?v=U3s16Pizxgo',
        RATING: 11
    },




   
]

Kinolar.forEach((item, index) => {
    const elItem = document.createElement('li');
    const elLink = document.createElement('a');
    const elMovie = document.createElement('img');
    const elMovieName = document.createElement('h4');
    const elText1 = document.createElement('p');
    const elText2 = document.createElement('p');
    const elDiv1 = document.createElement('div');

    elMovie.src = item.IMG
    elMovieName.textContent = item.NOMI.slice(0, 15) + '....'
    elLink.href = item.link 
    elText1.textContent = item.DAVOMIYLIGI
    elText2.textContent = item.SANASI
    elDiv1.style.display = 'flex'
    elText2.style.marginLeft = '30px'
    elMovieName.style.color = 'white';
    elMovieName.style.fontSize = '20px';
    elLink.style.color = 'white'
    elLink.style.fontSize = '20px'






    elList.append(elItem)       
    elItem.append(elLink)
    elLink.append(elMovie)
    elItem.append(elMovieName)
    elLink.append(elDiv1)
    elDiv1.append(elText1)
    elDiv1.append(elText2)
})