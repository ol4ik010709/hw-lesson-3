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
  let idEl = document.querySelector("#task2-output");
   let template=``;
  if (idEl) {
   template = `<ul>`;
   for (let i = 0; i < count; i++) {
    template+=`<li>item №${i+1}</li>`;
   }
   template += `</ul>`
    console.log(template);
    idEl.insertAdjacentHTML("afterbegin", template)
     console.log(idEl);
  }
}
task2(4);


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

function task5 () {
	// ваш код тут
    const btn = document.querySelector(`.button`);
	if (btn) {
		btn.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
})
	}
	
    }
    task5();

// Задача №6
// Посилання з класом 'link'.
// Додати data-атрибут data-value="100".
// Якщо значення < 200 - колір тексту червоний.

function task6() {
	// ваш код тут
	const linkEl = document.querySelector(`.link`);
    
        linkEl.setAttribute("data-value", "100");
        console.log(linkEl);
    if(parseFloat(linkEl.getAttribute("data-value")) < 200) {
	// if (parseFloat(linkEl.dataset.value) < 200) {
        linkEl.style.color=`red`;
       } 
    }

// task6()
// function task6() {
//   let linkElement = document.querySelector(".link");
//   if (linkElement) {
//     linkElement.setAttribute("data-value", "100");
//     // const value = parseFloat(linkElement.getAttribute("data-value"));
//     const value = parseFloat(linkElement.dataset.value);
//     if (value < 200) {
//       linkElement.style.color = "red";
//     }
//   }
// }


// Не чіпати - потрібно і для тестів, і для браузера
if (typeof module !== 'undefined') module.exports = { task1, task2, task3, task4, task5, task6 };
export { task1, task2, task3, task4, task5, task6 };
