function nextBinomial (p, trials) {
        var counter, sum;

        if ('number' !== typeof p) {
            throw new TypeError('nextBinomial: p must be number.');
        }
        if ('number' !== typeof trials) {
            throw new TypeError('nextBinomial: trials must be number.');
        }
        if (p < 0 || p > 1) {
            throw new TypeError('nextBinomial: p must between 0 and 1.');
        }
        if (trials < 1) {
            throw new TypeError('nextBinomial: trials must be greater than 0.');
        }

        counter = 0;
        sum = 0;

        while(counter < trials){
            if (Math.random() < p) {
                sum += 1;
            }
            counter++;
        }

        return sum;
    };