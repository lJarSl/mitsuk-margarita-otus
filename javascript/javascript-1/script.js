function AdderCreate(startValue = 0) {
	console.log(`start count - ${startValue}`);
	this.value = startValue;

	this.func = function () {
	  	if(arguments.length && arguments[0]) {
	  		this.value += arguments[0];
	  	} else {
			console.log(this.value);
	  	}
	  	return this.func.bind(this);
	};

  return this.func.bind(this);
}

var sumInstance1 = new AdderCreate();

sumInstance1(5)(2)()(22)();

var sumInstance2 = new AdderCreate(100);

sumInstance2(6)(2)()(6)();

var sumInstance3 = new AdderCreate();

sumInstance3(6)(2)()(6)();
