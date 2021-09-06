function lesson1() {
    /* less 1 */
    let Tc = 36;
    let Tf;
    Tf = (9/5)*Tc + 32;
    alert(Tf);

    /* less 2 */
    let admin;
    let name = "Василий";
    admin = name;
    alert(admin);

    /* less 3 */
    let a = 1000;
    let b = "108";
    alert(a+b);

    /* less 4 */
    /* async и defer 
    общее: не блокируют отрисовку страницы
    различия: 
    async - кто загрузится первым, тот и сработает
    defer - как расположены в документе */
}

function lesson2() {
    /* less 1 */
    console.log("lesson 1");
   
    var a = 1, b = 1, c, d;
    /* 
    ++a - префикс-инкремент, сначала увеличили потом использовали
    a++ - пост-инкремент, сначала использовали потом увеличили
     */
    c = ++a; console.log(c);           // 2   a=2 c=2
    d = b++; console.log(d);           // 1   d=1 b=2
    c = (2+ ++a); console.log(c);      // 5   c=5 a=3
    d = (2+ b++); console.log(d);      // 4   d=4 b=3
    console.log(a);                    // 3   a=3
    console.log(b);                    // 3   b=3
 
    /* less 2 */
    console.log("lesson 2");
  
    var a2 = 2;
    var x = 1 + (a2 *= 2);   // x = 5, 1 + (2*2)
    console.log(x);

    /* less 3 */
    console.log("lesson 3");
   
    let a3 = 10;
    let b3 = 20;
    if ((a3 >= 0 ) && (b3 >= 0)) {
        console.log(a3-b3);
    }
    else if ((a3 < 0 ) && (b3 < 0)) {
        console.log(a3*b3);
    }
    else {
        console.log(a3+b3);
    }
 
    /* less 4 */
    console.log("lesson 4");
  
    let a4 = 7;
    switch(a4) {
        case 1: console.log(a4++); 
        case 2: console.log(a4++);
        case 3: console.log(a4++); 
        case 4: console.log(a4++); 
        case 5: console.log(a4++); 
        case 6: console.log(a4++); 
        case 7: console.log(a4++); 
        case 8: console.log(a4++); 
        case 9: console.log(a4++); 
        case 10: console.log(a4++); 
        case 11: console.log(a4++); 
        case 12: console.log(a4++); 
        case 13: console.log(a4++); 
        case 14: console.log(a4++); 
        case 15: console.log(a4); 
    }

    /* less 5 */
    console.log("lesson 5");
    
    function addition(a, b) {
        return(a+b);
    }

    function subtraction(a, b) {
        return(a-b);
    }

    function multiplication(a, b) {
        return(a*b);
    }

    function division(a, b) {
        return(a/b);
    }

    /* less 6 */
    console.log("lesson 6");
    
    function mathOperation(arg1, arg2, operation) {
        switch(operation) {
            case "add": return addition(arg1, arg2);
            case "sub": return subtraction(arg1, arg2);
            case "mul": return multiplication(arg1, arg2);
            case "div": return division(arg1, arg2);
        }
    }
    console.log(mathOperation(10, 20, "sub"));

    /* less 7 */
    console.log("lesson 7");
   
    console.log(null == 0); //false
    console.log(null > 0); //false
    console.log(null < 0); //false
    console.log(null >= 0); //true
    /* С точки зрения математики, если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему. */

    /* less 8 */
    console.log("lesson 8");
    
    function power(val, pow) {
        if (pow !== 1) {
            return val * power(val, pow-1);
        }
        return val;
    }
    console.log(power(3, 3));
}

function lesson3() {
    /* less 1 */
    console.log("lesson 1");
    let i3 = 2;
    while (i3 < 100) {
        if (primeNumbers(i3)) {
            console.log(i3);
        }
        i3++;
    }
    function primeNumbers (num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    /* less 2 */
    console.log("lesson 2");
    let basket = [
        ['Товар 1', 1000],
        ['Товар 2', 2000],
    ];
    function priceBasket (basket) {
        let priceAll = 0;
        for (let i=0; i < basket.length; i++) {
            priceAll += basket[i][1];
        }
        return priceAll;
    }
    console.log('Цена корзины: ' + priceBasket(basket));

    /* less 3 */
    console.log("lesson 3");
    for (let i = 0; i <= 9; console.log(i++)) {
 
    }

    /* less 4 */
    console.log("lesson 4");
    for (let i = 1; i <= 20; i++) {
        let x = '';
        for (let y = 1; y <= i; y++) {
            x += 'x';
        }
    console.log(x);    
    }

}

function lesson4() {
    /* less 1 */
    console.log("lesson 1");

    let x=58;
    function ObjNumbers (num) {
	    let obj = {};
	    if ((num < 0) || (num > 999)) {
		    console.log('Число не из диапазона 0 - 999');
		    return obj;
        } else {
	        let mas = num.toString().split(''); 
	        while (mas.length < 3) {
		        mas.unshift(0);
            }
	        obj = {
                'единицы': mas[mas.length-1],
                'десятки':  mas[mas.length-2],
                'сотни':  mas[mas.length-3],
            }
            return obj;
        }
    }
    console.log(ObjNumbers(x));

    /* less 2 */
    console.log("lesson 2");
    let basketObj = {
        items: [
            {
                id_item: 1,
                name_item: "Товар 1",
                price_item: 1000,
            },
            {
                id_item: 2,
                name_item: "Товар 2",
                price_item: 2000,
            }
        ],
        priceBasketObj() {
            return this.items.reduce(
                (sum, elem) => sum + elem.price_item, 0
            );
        }
    }
    console.log('Цена корзины: ' + basketObj.priceBasketObj());

}

function lesson5() {
    /* less 1 */
    let chess = document.createElement('table');
    chess.setAttribute('id', 'chess');
    main.appendChild(chess);	
    
    const сhessBoard = {
        chessEl: document.getElementById('chess'),

        playingField() {
            const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

            for (let numbersI = -1; numbersI <= numbers.length; numbersI++) {
                const tr = document.createElement('tr');
                this.chessEl.appendChild(tr);
                for (let lettersI = -1; lettersI <= letters.length; lettersI++) {
                    const td = document.createElement('td');
                    tr.appendChild(td);
                    if (((numbersI < 0) && (lettersI < 0)) || ((numbersI > 7) && (lettersI < 0)) || ((numbersI < 0) && (lettersI > 7)) || ((numbersI > 7) && (lettersI > 7))) {
                        td.innerHTML = '';
                    } else if ((numbersI < 0) || (numbersI > 7)) {
                        td.innerHTML = letters[lettersI];
                    } else if ((lettersI < 0) || (lettersI > 7)) {
                        td.innerHTML = numbers[numbersI];
                    } else if (((lettersI % 2 !== 0) && (numbersI % 2 !== 0)) || ((lettersI % 2 == 0) && (numbersI % 2 == 0))) {
                        td.classList.add('color-white');	
                    } else {
                        td.classList.add('color-gray');
                    }
                }
            }
        },

    };
    сhessBoard.playingField();

    /* less 2 */
    console.log("lesson 2");

    const item = {
        links() {
            this.itemEl = document.querySelector('.basket');
            this.render();
        },
        items: [
            {
                id_item: 1,
                name_item: "Товар 1",
                price_item: 1000,
            },
            {
                id_item: 2,
                name_item: "Товар 2",
                price_item: 2000,
            }
        ],
        itemRender(item) {
            return `                
                <div class="items">
                    <p>Название: ${item.name_item}</p>  
                    <p>Цена: ${item.price_item}</p>
                </div>
            `;
        },
        priceBasket() {
            return this.items.reduce(
                (sum, elem) => sum + elem.price_item, 0
            );
        },
        render() {
            if (this.items.length) {
                this.items.forEach(item => {
                    this.itemEl.insertAdjacentHTML('beforeend', this.itemRender(item));
                });
                this.itemEl.insertAdjacentHTML ('beforeend', `В корзине ${this.items.length}`);
                this.itemEl.insertAdjacentHTML ('beforeend', ` товара(ов) на сумму: ${this.priceBasket()} руб.`);
            } else {
                this.itemEl.insertAdjacentHTML ('beforeend', `Корзина пуста`);
            }
        },
    }
    
    item.links();
}

function lesson6() {
    /* less 1 */
    // объект каталога и объект корзины, в каталоге метод на кнопке"добавить в корзину", в корзине метод - если есть такой товар - добавить кол-во, если нет - добавить в корзину и рендером обновить
    const Catalog = { // товары в каталоге
        links(classCatalog, Basket) {
            this.classCatalog = document.querySelector(classCatalog);
            this.renderCatalog();
            this.basket = Basket;
            
            this.buttonAdd();
        },

        itemsCatalog: [
            {
                id_item: 1,
                name_item: "Товар 1",
                price_item: 1000,
            },
            {
                id_item: 2,
                name_item: "Товар 2",
                price_item: 2000,
            }
        ],

        renderCatalog() {
            this.classCatalog.insertAdjacentHTML('beforeend', `<p>Каталог</p>`);
            this.itemsCatalog.forEach(item => {
                this.classCatalog.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
            });
        },
        renderCatalogItem(item) {
            return `                
                <div class="catalog_item">
                    <p>Название: ${item.name_item}</p>  
                    <p>Цена: ${item.price_item}</p>
                    <button class="addItemBasket"  data-id_item_button="${item.id_item}">Добавить в корзину</button>
                </div>
            `;
        },

        buttonAdd() {
            this.classCatalog.addEventListener('click', event => this.addTobasket(event));
        },

        addTobasket(event) {
            if (!event.target.classList.contains('addItemBasket')) return;
            const id_itemNew = +event.target.dataset.id_item_button;
            const itemAdd = this.itemsCatalog.find((item) => item.id_item === id_itemNew);
            this.basket.addBasket(itemAdd);
        }
    }
        
        
    const Basket = {
        links(classBasket) {
            this.classBasket = document.querySelector(classBasket);
            this.renderBasket();
        },

        itemsBasket: [

        ],

        renderBasket() {
            this.classBasket.innerHTML = '';
            this.classBasket.insertAdjacentHTML('beforeend', `<p>Корзина</p>`);
            this.itemsBasket.forEach(item => {
                this.classBasket.insertAdjacentHTML('beforeend', this.renderBasketItem(item));
            });
        },
        renderBasketItem(item) {
            return `                
                <div class="basket_item">
                    <p>Название: ${item.name_item}</p>  
                    <p>Цена: ${item.price_item}</p>
                    <p>Количество: ${item.quantity}</p>
                </div>
            `;
        },

        addBasket(itemBasket) {
            if (itemBasket) {
                const newItemBasket = this.itemsBasket.find((item) => itemBasket.id_item === item.id_item);
                if (newItemBasket) {
                    newItemBasket.quantity++;
                } else {
                    this.itemsBasket.push({...itemBasket, quantity: 1});
                    console.log(this.itemsBasket);
                }
                this.renderBasket();
            }
        }
    }

    Catalog.links('.catalog', Basket);
    Basket.links('.basket6');
}
