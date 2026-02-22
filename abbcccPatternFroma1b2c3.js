let str = '1a2b3c';
//let str = 'a1b2c3';

function isNumber(char)
{
	return /^[0-9]$/.test(char);

}

if(!isNumber(str.charAt(0)))
{
	for(let i=0; i<str.length; i+=2)
	{
		let len = parseInt(str.charAt(i+1));
		for(let j=0; j<len; j++)
		{
			process.stdout.write(str.charAt(i));
		}
		process.stdout.write('\n');
	}
}

else if(isNumber(str.charAt(0)))
{
	for(let i = 0; i < str.length; i+=2)
	{
		let len = parseInt(str.charAt(i));
		for(let j = 0; j < len; j++)
		{
			process.stdout.write(str.charAt(i+1));
		}

		process.stdout.write('\n');
	}
}