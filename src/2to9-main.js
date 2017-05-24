
function isOddNumber(n)
{
  if (n%2===0) return true;
  else return false;
}

function loopDownFrom(n) {
  for (;n;n--) {}
  return n;
}

//////////////////////////////////////////////////////
function isPrime(n) //Optimus Prime
{
  if (!(Number(n) > 1))
	  throw "Not a positive number!";

  if (n % 1 !== 0)
    throw "Not an integer!";

  for (var i=2; i<n; i++)
	  if (n % i === 0) return false;

  return true;
}

function isPrimeDavid(n) //Optimus Prime
{
  if (!(Number(n) > 1))
	  throw "Not a positive number!";

  if (Math.abs(n-Math.round(n)) > 0) //if (n % 1 !== 0)
    throw "Not an integer!";

  for (var i=2; i<n; i++)
	  if (n % i === 0) return false;

  return true;
}
//////////////////////////////////////////////////////

function sortList(list)
{
	if (list instanceof Array)
		return list.sort();
	else
		throw "Not an Array!";
}
//////////////////////////////////////////////////////

function numberOfDays(month, year)
{
	var monthName = ['jan','feb','mar','apr','maj','jun','jul','aug','sep','okt','nov','dec'];
	var monthNumber = monthName.indexOf(month);

	if (!isNaN(year) && monthNumber > -1)
		return new Date(year, monthNumber+1, 0).getDate();
	else
		throw "Not a positive number!";
}
//////////////////////////////////////////////////////

function hypotenuse(a, b)
{
	if (Number(a) > 0 && Number(b) > 0)
		return Math.sqrt(a*a + b*b);
	else
		throw "Not a positive number!";
}
//////////////////////////////////////////////////////

function backwards(str)
{
	if (typeof str === 'string' || typeof str === 'number')
		return String(str).split("").reverse().join("");
	else
		throw "Not a string or number!";
}

//////////////////////////////////////////////////////

function sellProduct(obj)
{
	if (!(obj instanceof Object)) return null;

	if (obj.name && obj.price && !isNaN(obj.count)) {
		if (obj.count > 0) {
			obj.count--;
			return obj;
		}
		throw "No products left to sell!";
	}

	throw "Not a product object!";
}

//////////////////////////////////////////////////////

function isFingerNumber(n) {
	n = Number(n);
	if (isNaN(n)) return false;
	if (n > 5) return false;
	if (n < 1) return false;
	return true;
}

//////////////////////////////////////////////////////

module.exports = {
  isOddNumber,
  loopDownFrom,
  isPrime,
  sortList,
  numberOfDays,
  hypotenuse,
  backwards,
  sellProduct,
  isFingerNumber,
  isPrimeDavid
};
