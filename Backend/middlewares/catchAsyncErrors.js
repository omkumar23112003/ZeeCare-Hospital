export const catchAsyncErrors = (theFuntion)=>{
    return (req,res,next)=>{
        Promise.resolve(theFuntion(req,res,next)).catch(next);
    };
};