// source1
// Type your program in here!
function is_close_enough(prev_guess, guess, x) {
    return relative_error(prev_guess, guess) < 0.0000001;
}

function relative_error(prev_guess, guess) {
    return abs(prev_guess-guess)/guess;
}

function abs(n) {
    return n<0 ? -n : n;
}

function sqr(n) {
    return n*n;
}

function improve_guess(guess, x) {
    return (x/sqr(guess)+2*guess)/3;
}

function cuberoot_iter(guess, prev_guess, x) {
    return is_close_enough(guess, prev_guess, x)
    ? guess
    : cuberoot_iter(improve_guess(guess,x), guess, x);
}

function cuberoot(x) {
    return cuberoot_iter(10.0, 1.0, x);
}

cuberoot(1e-9);
