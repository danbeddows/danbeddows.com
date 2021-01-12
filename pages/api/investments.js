const investments = async (req, res) => {
  errors = undefined;
  let status = "failed";

  res.json({
    status,
    errors,
  });
};

module.exports = investments;
