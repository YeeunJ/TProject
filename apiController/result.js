function postImageAPI (req, res){
  const image = req.body.image;
  res.status(200).json(
    {
    "image":image
    }
  );
}

module.exports = {
  getSettingAPI: getSettingAPI,
}
