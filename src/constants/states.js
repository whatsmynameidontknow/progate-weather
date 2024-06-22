const States = Object.freeze({
    LOADING: Symbol('loading'),
    SUCCESS: Symbol('success'),
    NOT_FOUND: Symbol('not_found'),
    FAILED: Symbol('failed'),
    FIRST_LOAD: Symbol('first_load'),
});

export default States;
