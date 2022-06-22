const HttpError = require("../utils/http-error");

const Request = require("../models/requestModel");

const newRequest = (req, res, next) => {
  const { type, weight, address, dtm } = req.body;
  const createrequest = new Request({
    user:req.userData.userId,
    type,
    weight,
    address,
    dtm,
  });
  try{
    await createrequest.save();
  }catch(err){
    const error = new HttpError(
        "cant create request try again",
        500
      );
      return next(error);
  }
  res
    .status(201)
    .json({ message:"success"});
};
const delRequest=(req,res,next)=>{
  const rid = req.params.rid;

  let place;
  try {
    place = await Place.findById(rid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete request.",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError("Could not find request with this id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete request.",
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, (err) => {
    console.log(err);
  });

  res.status(200).json({ message: "request place." });
}



exports.newRequest=newRequest;
exports.delRequest=delRequest;
