let money = 'Ваш бюджет?';
let time = 'Введите дату в формате YYYY-MM-DD';
let addData = {
    yourMoney : money,
    timeData : time,
    expenses : {},
    optionalExpenses : null,
    income : [],
    savings : false
};

let tmp1 = prompt('Введите обязательную статью расходов в этом месяце', "");
let tmp2 = prompt('Во сколько обойдется?', "");
if (isNaN(tmp2)) {
    alert("Значение должно быть численным");
} else {
    addData.expenses[tmp1] = tmp2;
    let tmp3 = addData.expenses[tmp1] / 30;
    alert("Бюджет на день" + tmp3.toString());
}

