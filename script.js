let map1 = document.querySelector('.map1');
let map2 = document.querySelector('.map2');
let map3 = document.querySelector('.map3');
let map4 = document.querySelector('.map4');
let map5 = document.querySelector('.map5');
let map6 = document.querySelector('.map6');
let map7 = document.querySelector('.map7');
let embedMap = document.querySelector('.embed-map');


map1.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13524.709661000192!2d74.18271155000001!3d32.06444985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d5340abc0dc1%3A0x6da4f2db61cf4e34!2sOpera%20Cinema%20Citi%20Housing%20Grw!5e0!3m2!1sen!2s!4v1727885302482!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map2.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13524.709661000192!2d74.18271155000001!3d32.06444985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d54c96b86e1d%3A0x599d0df312668179!2sBar%20BQ%20Tonight%20Gujranwala!5e0!3m2!1sen!2s!4v1727963577499!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map3.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29214.240655085217!2d74.1710614096799!3d32.066791476204756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d53b6d64caa5%3A0xf5ac9950de86df99!2sCiti%20Theme%20Park!5e0!3m2!1sen!2s!4v1727963718472!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map4.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6260.854889095474!2d74.19109107640399!3d32.06793333860975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d533a7b655a1%3A0x64bb0139ed409681!2sBroasters!5e0!3m2!1sen!2s!4v1727963782872!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map5.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4690.197383408452!2d74.18975034315685!3d32.070739965156655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d533e2d9f10d%3A0x946bdb913b12e0d3!2sCiti%20Fitness%20Center!5e0!3m2!1sen!2s!4v1727963873431!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map6.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.6919504627117!2d74.18991905589425!3d32.06849894302543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d55a0e593f21%3A0x18ce85a4725fa28c!2sCup%20Of%20Joy%20Cafe%20Gujranwala!5e0!3m2!1sen!2s!4v1727963917703!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})
map7.addEventListener('click',()=>{
    embedMap.innerHTML = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.6919504627117!2d74.18991905589425!3d32.06849894302543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918d54c1a463b7d%3A0x4a1888139fab619c!2sCiti%20Mart!5e0!3m2!1sen!2s!4v1727963949191!5m2!1sen!2s"
                width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})


let question1 = document.querySelector('.question1');
let question2 = document.querySelector('.question2');
let question3 = document.querySelector('.question3');
let question4 = document.querySelector('.question4');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');


question1.addEventListener('click',()=>{
    answer1.setAttribute('id',"answer-active")
    answer2.id = 'none'
    answer3.id = 'none'
    answer4.id = 'none'
})
question2.addEventListener('click',()=>{
    answer1.id = 'none'
    answer2.setAttribute('id',"answer-active")
    answer3.id = 'none'
    answer4.id = 'none'
})
question3.addEventListener('click',()=>{
    answer1.id = 'none'
    answer2.id = 'none'
    answer3.setAttribute('id',"answer-active")
    answer4.id = 'none'
})
question4.addEventListener('click',()=>{
    answer1.id = 'none'
    answer2.id = 'none'
    answer3.id = 'none'
    answer4.setAttribute('id',"answer-active")
})


// console.log(map1,map2,map3,map4,map5,map6,map7)