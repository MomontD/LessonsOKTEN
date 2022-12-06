
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