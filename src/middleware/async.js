/**
 * The wrapper function takes another function 'fn' as an argument and
 *  returns a new function ( async function that has three arguments: req,res,next.
 *  If fn throws an error, it catches the error and passes it to the next middleware in express.
 */
/**
 * The async wrapper uses currying in Javascript to access
 * the internal controller methods like req, res, next
 */
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
/**
 * why use try/cathc block again and again in your controllers when you can use
 *  this wrapper to worry about the error catching.
 */
module.exports = asyncWrapper;
