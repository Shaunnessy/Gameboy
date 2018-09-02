/* 

-- Javascript Library of genral use function calls --
-- Last revision date 29.05.18 --

-- 1.0 Expected Format --

//  Function Description, simplified. type of operation
//  Date of addition(birth).  - Date of deprecation(death).
//  Reason for need and long description of function.  If function becomes obsolete or deprecated, why. 
//
//  function(args){ 
		
		function process;
		console.log(verification function call ran in console);  
		return process;
	}



-- 1.1 Rules --

1. To qualify, function must be able to run without needing added user input
2. Functions can be reduced to more efficient process states. 
3. If this initial function class becomes too large, will begin to be split by operation type
4. Must be a scalable, multi use, and easily callable function

--  END PSA --
*/


// sleep/wait/delay function.  Time.
// 28.05.18 - in use.
// JS does not have callable wait function AFAIK. millisecond format to measure wait in seconds.
//dammit there's one called setTimeout() - fuck
function wait(seconds){

	console.log("beginning wait for " + seconds + "...");
	startWait = Date.now();
	endWait = Date.now() + (Number(seconds) * 1000);
	while(Date.now() < endWait){
		//empty while iterator, don't know how "legal" this is but it works
	}
	console.log("waiting complete.");
	//return alert(((endWait - startWait)/1000) + " wait achieved");
	return;
}


