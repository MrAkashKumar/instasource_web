const fields = ['qty','high','low','hours','rate'].map(id => document.getElementById(id));
const output = document.getElementById('save');
function money(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Math.max(0,n||0));}
function calc(){
  const [qty, high, low, hours, rate] = fields.map(el => Number(el.value));
  const unitSpread = Math.max(0, high - low) * qty;
  const research = Math.max(0, hours * rate);
  output.textContent = money(unitSpread + research);
}
fields.forEach(el => el.addEventListener('input', calc));
calc();
