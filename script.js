let money = prompt('Ваш бюджет?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : null,
    income : [],
    savings : false
};

let tmp1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
    tmp2 = prompt('Во сколько обойдется?', ""),
    tmp3 = prompt('Введите обязательную статью расходов в этом месяце', ""),
    tmp4 = prompt('Во сколько обойдется?', "");

appData.expenses[tmp1] = tmp2;
appData.expenses[tmp3] = tmp4;

alert("Бюджет на день" + appData.budget / 30);