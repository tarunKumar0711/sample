//swaping rg
function swapRedGreen(pix)
{
    x=pix.getRed();
    y=pix.getGreen();
    pix.setRed(y);
    pix.setGreen(x);
}

var a = new SimpleImage("T1a.jpg");
print(a);

for(var p of a.values())
{
    swapRedGreen(p);
}
print(a);
