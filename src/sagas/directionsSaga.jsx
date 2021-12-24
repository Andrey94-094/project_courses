import italy from "../../src/assets/Images/HotImages/italy.jpeg"
import spain from "../../src/assets/Images/HotImages/spain.jpeg"
import japan from "../../src/assets/Images/HotImages/japan.jpeg"
import africa from "../../src/assets/Images/HotImages/africa.jpeg"
import turkish from "../../src/assets/Images/HotImages/turkish.jpg"
import georgia from "../../src/assets/Images/HotImages/georgia.jpg"
import polish from "../../src/assets/Images/HotImages/polish.jpg"

import { put, takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* fetchDirections() {
  yield put({ type: 'START_FETCH_DIRECTIONS' });
  yield delay(1000);

  const directions = [
    { id: 0, img: italy, country: "italy", title: "300 £ + Скидки", text: "От древних культур до удивительных пейзажей - найдите самые лучшие скидки" },
    { id: 1, img: spain, country: "spain", title: "Праздники Испании", text: "Высокие горы, залитые солнцем побережья, мавританское наследие и более изысканная кухня" },
    { id: 2, img: japan, country: "japan", title: "Велосипедные Каникулы", text: "Пробудите давно потерянное в детстве чувство свободы или бросьте вызов приключениям" },
    { id: 3, img: africa, country: "africa", title: "Праздники Африки", text: "Экзотические базары, древние чудеса, уникальная дикая природа и огромные песчаные дюны в бесконечных пустынях." },
    { id: 4, img: turkish, country: "turkish", title: "Море Турции", text: "Побережья Эгейского и Средиземного морей климат средиземноморский с очень мягкой зимой." },
    { id: 5, img: georgia, country: "georgia", title: "Горы грузии", text: "Страна с тысячелетней историей, богатая интереснейшими обычаями и традициями." },
    { id: 6, img: polish, country: "polish", title: "Фантазия Польши", text: "Польская еда невероятно вкусная, а сами поляки очень гордятся высоким качеством своих продуктов питания." },
  ];
  yield put({ type: 'SUCCES_FETCH_DIRECTIONS', payload: { directions } });

  const companyName = "Seven";
  yield put({ type: 'COMPANY_NAME_DIRECTIONS', payload: { companyName } });
}

export default function* directionsSaga() {
  yield takeEvery('FETCH_DIRECTIONS', fetchDirections);
}