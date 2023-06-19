import browsersync from "browser-sync"; // локальный сервер
import notify from "gulp-notify"; // сообщения, подсказки
import plumber from "gulp-plumber"; // обработка ошибок
import replace from "gulp-replace"; // поиск, замена

export const plugins = {
    browsersync,
    notify,
    plumber,
    replace,

}
