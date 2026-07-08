// ============================================================
// УРОК 3 - DOM: отримання елементів, класи, стилі, атрибути
// ============================================================

// Задача №1
// Отримати елемент <body> в константу

function task1() {
	// поверніть константу з body
	// ваш код тут
	const bodyEl = document.body;
	return bodyEl;
}
task1();

// Задача №2
// Функція додає в елемент з ID 'task2-output' список UL з N елементами LI.
// де count - кількість LI, за замовченням 3

function task2(count = 3) {
	// ваш код тут
    const output = document.querySelector(`#task2-output`);
    let template = ``;

    if(output) {
        template += `<ul>`;
for (let i = 0; i < count; i++) {
    template += `<li>Елемент №${i+1}</li>`;
}
template += `</ul>`;
    }
	
    output.insertAdjacentHTML("afterbegin", template);
    
}
task2(8);



// Задача №3
// Додати клас 'loaded' до body.
// Якщо клас є - зробити колір тексту зеленим.

function task3() {
	// ваш код тут
	const bodyEl = document.body;
if(bodyEl) {
bodyEl.classList.add(`loaded`);
if(bodyEl.classList.contains(`loaded`)) {
bodyEl.style.color = `green`;
   }
}
}
task3();


// Задача №4
// Дано три елементи з класом 'item'.
// Кожному додати клас 'active' та змінити контент на "Елемент №N" (з 1).

function task4(root = document) {
	// ваш код тут
	const items = root.querySelectorAll(`.item`);
if(items.length) {
    items.forEach((el, i) =>{
        el.classList.add(`active`);
        el.innerHTML=`Елемент №${i+1}`
    })
}
}
task4()

// Задача №5
// Прокрутити скрол до елементу з класом 'button'.
// Функція має викликати scrollIntoView на цьому елементі.

const btn = document.querySelector(`.button`);

function task5 (el) {
	// ваш код тут
	
		const block = el.dataset.scroll || 'start';
        console.log(block);
el.scrollIntoView({
    block: block,
    inline: "nearest",
    behavior: "smooth"
})
    }
    task5(btn);




// Задача №6
// Посилання з класом 'link'.
// Додати data-атрибут data-value="100".
// Якщо значення < 200 - колір тексту червоний.

function task6() {
	// ваш код тут
	const linkEl = document.querySelector(`.link`);
    if(linkEl) {
        const valueEl = linkEl.dataset.value || 100;
        console.log(valueEl);
       if(+valueEl < 200) {
        linkEl.style.color=`red`;
       } 
    }
}
task6()


// Не чіпати - потрібно і для тестів, і для браузера
if (typeof module !== 'undefined') module.exports = { task1, task2, task3, task4, task5, task6 };
export { task1, task2, task3, task4, task5, task6 };
