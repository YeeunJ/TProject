function getSettingAPI (req, res){
  res.status(200).json(
    {
    "success":true
    }
  );
}

module.exports = {
  getSettingAPI: getSettingAPI,
}
