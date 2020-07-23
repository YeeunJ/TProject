function getRoiAPI (req, res){
  res.status(200).json(
    {
    "success":true
    }
  );
}

function postRoiAPI (req, res){
  const image = req.body.image;
  res.status(200).json(
    {
    "image":image
    }
  );
}

module.exports = {
  getRoiAPI: getRoiAPI,
  postRoiAPI: postRoiAPI,
}
