function PandigitalIterator(from,to,ascending) {
	this.numbers = [];
	from = from || 1;
	to = to || 9;
	
	for (var i=from; i<=to; i++) {
		this.numbers.push(i);
	}
	
	if (!ascending) {
		this.numbers = this.numbers.reverse();
	}
}

PandigitalIterator.prototype = {
	getNumber: function() {
		return this.numbers.join("");
	},
	next: function() {
		// search from right the first digit that is not greater than the previous one
		var marker = this.numbers.length-2;
		while(this.numbers[marker] > this.numbers[marker+1]) {
			marker--;
		}
		
		// search the smallest digit right of the marker-digit that is greater than the marker-digit
		var smallest = Number.MAX_VALUE;
		var smallestIndex;
		for (var i=marker+1; i<this.numbers.length; i++) {
			if (this.numbers[i] < smallest && this.numbers[i] > this.numbers[marker]) {
				smallestIndex = i;
				smallest = this.numbers[smallestIndex];
			}
		}
		
		// swap the found marker-digit with the last digit (as this is the smallest right from index)
		var swap = this.numbers[marker];
		this.numbers[marker] = this.numbers[smallestIndex];
		this.numbers[smallestIndex] = swap;
		
		// sort everything right from the index
		this.numbers = this.numbers.slice(0,marker+1).concat(this.numbers.slice(marker+1).sort());
		
		return this.getNumber();
	},
	previous: function() {
		
		// search from right the first digit that is not smaller than the previous one
		var marker = this.numbers.length-2;
		while(this.numbers[marker] < this.numbers[marker+1]) {
			marker--;
		}
		
		// search the biggest digit right of the marker-digit that is smaller than the marker-digit
		var biggest = -1;
		var biggestIndex;
		for (var i=marker+1; i<this.numbers.length; i++) {
			if (this.numbers[i] > biggest && this.numbers[i] < this.numbers[marker]) {
				biggestIndex = i;
				biggest = this.numbers[biggestIndex];
			}
		}
		
		// swap the found marker-digit with the last digit (as this is the smallest right from index)
		var swap = this.numbers[marker];
		this.numbers[marker] = this.numbers[biggestIndex];
		this.numbers[biggestIndex] = swap;
		
		// sort everything right from the index
		this.numbers = this.numbers.slice(0,marker+1).concat(this.numbers.slice(marker+1).sort().reverse());
		
		return this.getNumber();
	}
}

module.exports = PandigitalIterator;