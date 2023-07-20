
/***
 * Una semplice griglia
 */

function grid(number) {
    let grid = '';
    for (let i = 0; i < number; i++) {
        for (let y = 0; y < number; y++) {
            grid += '#';
        }
        grid += '\n';
    }
    return grid;
}

/***
 * Giusto quel poco di matematica
 * 
 * Anche questo problema può essere risolto con l'uso di una variabile di appoggio accumulatore.
 * Notare il ciclo che parte dal numero MENO UNO: avendo inizializzato già l'accumulatore uguale al
 * numero, dobbiamo poi eseguire le moltiplicazioni successive a partire dal suo primo predecessore.
 */

function factorial(number) {
    let fact = number;
    for (let i = number - 1; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

/***
 * Media Aritmetica
 * 
 * Anche questo problema può essere risolto con l'uso di una variabile accumulatore di appoggio.
 * ATTENZIONE!: che succede se passo come argomento l'array vuoto?
 */

function average(numbersArray) {
    let avg = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        avg += numbersArray[i];
    }
    return avg / numbersArray.length;
}

/***
 * Math.Pow
 */

function pow(base, exponent) {
    let result = base;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}

/***
 * Push ma non su Github
 */

function push(array, newElement) {
    array[array.length] = newElement;
    return array.length;
}

/***
 * Pop quando no è Push
 */

function pop(array) {
    if (array.length === 0) {
        return 0;
    }
    const elementToRemove = array[array.length - 1];
    array.splice(array.length - 1, 1);
    return elementToRemove;
}

/***
 * Unshi(f)t 
 */

function unshift(array, newElement) {
    const initialLength = array.length;
    for (let i = initialLength; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = newElement;
    return array.length;
}

/** oppure, per chi proprio vuole partire dalla cima dell'array invece che dal fondo */

function unshift(array, newElement) {
    if (array.length === 0) {
        array.push(newElement);
    } else {
        let elementToInsert = newElement;
        let overwrittenElement;
        const initialLength = array.length;
        for (let i = 0; i < initialLength; i++) {
            overwrittenElement = array[i];
            array[i] = elementToInsert;
            elementToInsert = overwrittenElement;
        }
    }
    return array.length;
}

/*** oppure, per i sintetici */

function unshift(array, newElement) {
    return array.splice(0, 0, newElement);
}

/***
 * Ma era Shift o era Pop?
 */

function shift(array) {
    if (array.length !== 0) {
        const element = array[0];
        array.splice(0, 1);
        return element;
    } else {
        return undefined;
    }
}

/*** ... o ancora più contrita */

function shift(array) {
    if (array.length !== 0) {
        return array.splice(0, 1)[0];
    }
}

/***
 * Join the Party
 */

function join(array) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

/***
 * Banane? Split
 */

function split(word) {
    const array = [];
    for (let i = 0; i < word.length; i++) {
        array.push(word[i]);
    }
    return array;
}

/***
 * Con Cat o Con Dog?
 */

function concat(array1, array2) {
    const array = [];
    let h = 0;
    for (let i = 0; i < array1.length; i++) {
        array[h] = array1[i];
        h++;
    }
    for (let j = 0; j < array2.length; j++) {
        array[h] = array2[j];
        h++;
    }
    return array;
}

/***
 * (No) Filter
 */

function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const shouldBeIncluded = callback(array[i]);
        if (shouldBeIncluded === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/***
 * (No Odd) Filter
 */

function filterEven(numbersArray) {
    return filter(numbersArray, (number) => {
        return number % 2 === 0;
    });
}

/***
 * Finders Keepers
 */

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const isTheSearchedElement = callback(array[i]);
        if (isTheSearchedElement === true) {
            return array[i];
        }
    }
}

/***
 * Esrever
 */

function reverse(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

/***
 * Con Ripetizioni o Senza?
 * 
 * Notare il ciclo for esterno che va da zero alla lunghezza MENO UNO: al suo interno
 * confrontiamo l'elemento al suo indice con tutti quelli che vengono dopo. Fare questo
 * controllo sull'ultimo elemento dell'array, che non ha alcun successore, non ha alcun
 * senso. Ci possiamo fermare prima. Al contrario, il ciclo for interno parte dall'elemento
 * successivo a quello puntato dal ciclo for esterno e arriva in fondo all'array. Se trovo
 * mai due elementi uguali, posso subito restituire false. Per poter restituire true, devo
 * aspettare di aver finito tutti e due i cicli. Se arrivo a quel punto, vuol dire che non
 * ho mai incontrato due elementi uguali nell'array e posso restituire true.
 */

function unique(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            /***
             * Uguaglianza stretta (===) o uguaglianza debole (==)? A seconda di cosa scegliamo
             * cambia il senso che diamo al concetto di doppione. Es:
             *   - Se usiamo ==, allora il numero 3 si considera doppione della stringa '3'
             *   - Se usiamo ===, allora il numero 3 NON si considera doppione della stringa '3'
             */
            if (array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;
}


/***
 * La Map del Tesoro
 */

function map(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const transformedElement = callback(array[i]);
        newArray[i] = transformedElement; // o anche push(), fa lo stesso
    }
    return newArray;
}

/***
 * La Map del Tesoro di Strings
 */

function mapStringsToNumbers(stringsArray) {
    return map(stringsArray, (string) => {
        return parseInt(string);
    });
}

/*** Oppure, più brevemente */

function mapStringsToNumbers(stringsArray) {
    return map(stringsArray, parseInt);
}

/*** Oppure, altro modo ancora, leggermente diverso (perché?) */

function mapStringsToNumbers(stringsArray) {
    return map(stringsArray, String);
}

/***
 * Che la Sort ti sorrida
 */

function sort(numbersArray) {
    for (let i = 0; i < numbersArray.length - 1; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] > numbersArray[j]) {
                const temp = numbersArray[i];
                numbersArray[i] = numbersArray[j];
                numbersArray[j] = temp;
            }
        }
    }
    return numbersArray;
}

/***
 * Every (-breathyoutake)
 */

function every(array, predicate) {
    let predicateAlwaysReturnedTrue = true;
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i]) == false) {
            predicateAlwaysReturnedTrue = false;
        }
    }
    return predicateAlwaysReturnedTrue;
}

/***
 * Some (-whereovertheraimbow)
 */

function some(array, predicate) {
    let predicateSometimesReturnedTrue = false;
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i]) == true) {
            predicateSometimesReturnedTrue = true;
        }
    }
    return predicateSometimesReturnedTrue;
}

/**
 * Forìc
 */

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

/***
 * Hover Crafted
 */

function hover(selector) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', () => {
            elements[i].classList.add('hover');
        });
        elements[i].addEventListener('mouseleave', () => {
            elements[i].classList.remove('hover');
        });
    }
}

/***
 * Modal da Sfliata
 */

function modalify(container, opener, closer) {
    opener.addEventListener('click', () => {
        container.classList.add('open');
    });
    closer.addEventListener('click', () => {
        container.classList.remove('open');
    });
}

/* Versione alternativa: ascolto il click sul pulsante di chiusura SOLO mentre il modale è aperto */

function modalify(container, opener, closer) {
    opener.addEventListener('click', () => {
        const onClose = () => {
            container.classList.remove('open');
            closer.removeEventListener('click', onClose);
        };
        container.classList.add('open');
        closer.addEventListener('click', onClose);
    });
}

/***
 * Che poi alla fine il Carosello lo puoi scrive' in Tre Righe
 */

function carousellify(container, slides) {
    let current = 0;
    let interval;
    slides[current].classList.add('active');
    const onTimerExpire = () => {
        slides[current].classList.remove('active');
        if (current === slides.length - 1) {
            current = 0;
        } else {
            current++;
        }
        slides[current].classList.add('active');
    };
    container.addEventListener('mouseenter', () => {
        if (interval != null) {
            clearInterval(interval);
            interval = null;
        }
    });
    container.addEventListener('mouseleave', () => {
        if (interval == null) {
            interval = setInterval(onTimerExpire, 4000);
        }
    });
    interval = setInterval(onTimerExpire, 4000);
}

/***
 * Accordion in Sol Maggiore
 */

/* Con variabile di appoggio... */
function accordionify(drawers) {
    let activeDrawer = null;
    for (let i = 0; i < drawers.length; i++) {
        drawers[i].addEventListener('click', () => {
            if (i === activeDrawer) {
                this.classList.remove('active');
                activeDrawer = null;
            } else {
                this.classList.add('active');
                if (activeDrawer != null) {
                    drawers[activeDrawer].classList.remove('active');
                }
                activeDrawer = i;
            }
        });
    }
}

/* ... o, ancora meglio, senza. */
function accordionify(drawers) {
    for (let i = 0; i < drawers.length; i++) {
        drawers[i].addEventListener('click', () => {
            if (drawers[i].classList.contains('active')) {
                drawers[i].classList.remove('active');
            } else {
                for (let j = 0; j < drawers.length; j++) {
                    drawers[j].classList.remove('active');
                }
                drawers[i].classList.add('active');
            }
        });
    }
}

/***
 * Timer proprio quello da Cucina
 */

function timerify(
    secondElement,
    minuteElement,
    hourElement,
    dayElement,
    monthElement,
    yearElement,
) {
    const format = (number) => {
        return number.toLocaleString('it-IT', { minimumIntegerDigits: 2, });
    };
    const update = () => {
        const currentDate = new Date();
        yearElement.innerText = currentDate.getFullYear();
        monthElement.innerText = format(currentDate.getMonth());
        dayElement.innerText = format(currentDate.getDay());
        hourElement.innerText = format(currentDate.getHours());
        minuteElement.innerText = format(currentDate.getMinutes());
        secondElement.innerText = format(currentDate.getSeconds());
    };
    setInterval(update, 1000);
    update();
}