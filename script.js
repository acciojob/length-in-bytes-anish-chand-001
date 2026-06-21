const byteSize = (str) => {
  // write your code here
	function byteSize(str){
		return new TextEncoder().encode("hello").length
	}
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
