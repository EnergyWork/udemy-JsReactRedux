let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let tmp1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
        tmp2 = prompt('Во сколько обойдется?', "");
    if ( (typeof(tmp1)) == 'string' && (typeof(tmp1) != null && (typeof(tmp2)) != null) && tmp1 != '' && tmp2 != '' && tmp1.length < 50) {
        console.log('done');
         appData.expenses[tmp1] = tmp2;
    } else {
        --i;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на день " + appData.moneyPerDay);

switch(appData.moneyPerDay) {
    case appData.moneyPerDay < 100: 
        console.log('Минимальный уровень достатка');
        break;
    case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
        console.log('Средний уровень достатка');
        break;
    case appData.moneyPerDay > 2000:
        console.log('Высокий уровень достатка');
        break;
    default: 
        console.log('Произошла ошибка');
        break;
}