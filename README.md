# thelaundrybasket
#### To schedule today's pickup on http://thelaundrybasket.in/schedule-pickup.html 

```
document.getElementById('datepicker').value =  ['getDate', 'getMonth', 'getFullYear'].map(i => new Date()[i]()).map(i => i < 10 ? '0' + i : i).join('-')
```
