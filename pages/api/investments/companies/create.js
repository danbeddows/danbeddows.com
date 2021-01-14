import nextConnect from "next-connect";
import middleware from "../../../../middleware/database";
import { iexApiRequest } from "../../../../util/iex.ts";

const handler = nextConnect();

handler.use(middleware);

/*
 * Error var helper
 */
let errors = undefined;
const addError = (error) => {
  if (!errors) {
    errors = [];
  }

  errors.push(error);
};

handler.get(async (req, res) => {
  errors = undefined;

  let symb = req.query.symbol.toUpperCase();

  if (symb == null) {
    addError({
      field: "symbol",
      error: "Enter the symbol of the stock to add.",
    });
  }

  if (!errors) {
    // Check we don't already have this stock added
    let data = await req.db
      .collection("investment_company")
      .find({ symbol: symb })
      .toArray();

    if (data.length > 0) {
      addError({
        field: "symbol",
        error: "This stock has already been added.",
      });
    }
  }

  if (!errors) {
    const endpoint = `/stock/${symb}/company`;
    const companyData = await iexApiRequest(endpoint);

    let company = {
      symbol: companyData.symbol,
      name: companyData.companyName,
      website: companyData.website,
    };

    await req.db
      .collection("investment_company")
      .insertOne(company, (err, res) => {
        if (err) {
          addError({
            field: "symbol",
            error: "Failed to write company data to database.",
          });
        }
      });
  }

  res.json({
    status: !errors ? "success" : "failed",
    errors,
  });
});

module.exports = handler;
