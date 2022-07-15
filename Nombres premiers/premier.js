var n = new Number,
    estPrem = new Boolean(true);

function tester()
{
    n = Number(document.test.nbre.value);
    estPrem = true;

    for (j=2; j<n; j++)
        if (n%j == 0)estPrem = false;
        document.test.rep.value = estPrem;
}