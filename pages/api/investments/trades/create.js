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

	let symb = req.query.symbol.toUpperCase(); // AAPL
	let action = req.query.action; // buy or sell
	let tax = req.query.tax; // stamp duty
	let sharePrice = req.query.sharePrice; // e.g 128.34
	let sharePriceCurrency = req.query.sharePriceCurrency;
	let totalCost = req.query.totalCost; // e.g 104.73
	let numShares = req.query.numShares; // e.g 0.34
	let fxRate = req.query.fxRate // e.g 1.2 (GBP->XXX)
	let ts = req.query.ts; // unix ts e.g 123902933

  if (symb == null) {
    addError({
      field: "symbol",
      error: "Enter the symbol of the stock to add.",
    });
	}
	
	if (action == null) {
    addError({
      field: "action",
      error: "Enter the symbol of the stock to add.",
    });
	}
	else if (action != "buy" && action != "sell") {
    addError({
      field: "action",
      error: "Only acceptable values are BUY or SELL.",
    });
  }

  if (!errors) {
    // Check we don't already have this stock added
    let data = await req.db
      .collection("investment_trade")
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
      .collection("investment_trade")
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
