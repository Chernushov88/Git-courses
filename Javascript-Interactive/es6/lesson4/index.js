document.title = `- Декораторы классов
- Настройка babel для декораторов
- Декораторы в react + mobx
- Идеи компонентного подхода
- Поток данных и генерация событий
- Небольшая пародия на javascript фреймворк`;

let div = document.createElement('div');
document.body.append(div);
//div.innerHTML = `<div class="sample"></div>`;
div.className = 'sample';


import Cart from './components/cart';

(new Cart()).bindMount('.sample').render();