let data = new Date();
document.body.style.backgroundColor = 'orange'
document.body.style.fontFamily = 'Roboto'

let a2 = setInterval(() => {
    let aa1 = new Date();
    t.textContent = aa1.getHours();
    t2.textContent = aa1.getMinutes();
    t3.textContent = aa1.getSeconds();
}, 1000);

let a1 = document.createElement('div');
a1.style.backgroundColor = 'white'
a1.style.width = '800px'
a1.style.height = '300px'
a1.style.borderRadius = '10px'
a1.style.display = 'flex'
a1.style.justifyContent = 'space-evenly'
a1.style.alignItems = 'center'
a1.style.margin = '200px auto'
document.body.appendChild(a1);

let a = document.createElement('div');
a.style.backgroundColor = 'black'
a.style.color = 'white'
a.style.width = '200px'
a.style.height = '200px'
a.style.borderRadius = '10px'
a1.appendChild(a);

let t = document.createElement('p');
t.textContent = data.getHours();
t.style.fontSize = '70px'
t.style.textAlign = 'center'
t.style.margin = '40px 0'
t.style.height = '0'
t.style.fontWeight = '800'
a.appendChild(t);

let p = document.createElement('p');
p.textContent = "Hours"
p.style.textAlign = 'center'
p.style.fontSize = '20px'
p.style.fontWeight = '700'
p.style.padding = '50px 0'
a.appendChild(p)

let b = document.createElement('div');
b.style.backgroundColor = 'black'
b.style.color = 'white'
b.style.width = '200px'
b.style.height = '200px'
b.style.borderRadius = '10px'
a1.appendChild(b);

let t2 = document.createElement('p');
t2.textContent = data.getMinutes();
t2.style.fontSize = '70px'
t2.style.textAlign = 'center'
t2.style.margin = '40px 0'
t2.style.height = '0'
t2.style.fontWeight = '800'
b.appendChild(t2);

let p2 = document.createElement('p');
p2.textContent = "Minutes"
p2.style.textAlign = 'center'
p2.style.fontSize = '20px'
p2.style.fontWeight = '700'
p2.style.padding = '50px 0'
b.appendChild(p2)

let c = document.createElement('div');
c.style.backgroundColor = 'black'
c.style.color = 'white'
c.style.width = '200px'
c.style.height = '200px'
c.style.borderRadius = '10px'
a1.appendChild(c);

let t3 = document.createElement('p');
t3.textContent = data.getSeconds();
t3.style.fontSize = '70px'
t3.style.textAlign = 'center'
t3.style.margin = '40px 0'
t3.style.height = '0'
t3.style.fontWeight = '800'
c.appendChild(t3);

let p3 = document.createElement('p');
p3.textContent = "Seconds"
p3.style.textAlign = 'center'
p3.style.fontSize = '20px'
p3.style.fontWeight = '700'
p3.style.padding = '50px 0'
c.appendChild(p3)