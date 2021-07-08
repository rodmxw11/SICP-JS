// source1
// Type your program in here!
function is_close_enough(prev_guess, guess, x) {
    return relative_error(prev_guess, guess) < 0.0000001;
}

function relative_error(prev_guess, guess) {
    return abs(prev_guess-guess)/guess;
}

function sqr(n) {
    return n*n;
}

function abs(n) {
    return n<0 ? -n : n;
}

function improve_guess(guess, x) {
    return avg(x/guess, guess);
}

function avg(a, b) {
    return (a+b)/2;
}

function sqrt_iter(guess, prev_guess, x) {
    return is_close_enough(guess, prev_guess, x)
    ? guess
    : sqrt_iter(improve_guess(guess,x), guess, x);
}

function sqrt(x) {
    return sqrt_iter(10.0, 1.0, x);
}

sqrt(1e20);
