function numbers ()
{
    let n = 1;
    return function ()
    {
        return n++;
    };
}

let f = numbers ();
let f2 = numbers ();

for (let i=0; i<100; i++)
{
    console.log (f());

}

console.log (f2());