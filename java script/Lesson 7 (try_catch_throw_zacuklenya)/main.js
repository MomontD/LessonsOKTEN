
function divider(a, b)
{
    if (b === 0)
    {
        throw new Error('ouououou B is - Zero');
    }
    return a / b;
}

console.log(divider(10, 2));

try {divider(10, 0)}
catch (res)
{
    console.error(res);
}
console.log("end");

let user
console.log(user?.name);
// - зациклення
const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createMessage = (operationType, credits) => ({operationType, credits, operationTime: new Date()});

    const getCardOptions = () => ({balance, historyLog, transactionLimit, key});

    const putCredits = (money) => {
        balance += money;
        historyLog.push(createMessage('putCredits', money));
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money;
            historyLog.push(createMessage('takeCredits', money))
        } else {
            historyLog.push(createMessage('takeCreditsError'));
            console.error('not enough money');
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits
    }

}