# Notes
## TODO
### Frontend
- [x] Separate Components into Presentational and Container
- [ ] Move all axios code into Actions
    - [?] Stock
    - [?] Portfolio
    - [ ] (Account???)
    - [x] Search
- [ ] Charts: use charting library to render the chart
    - [ ] Display text data in Stock
    - [ ] render charts in stock
    - [ ] Display data in Dashboard
    - [ ] render charts in stock

### Backend
- [ ] Buy/Sell mechanics
    - [ ] Validation (backend)
        - [ ] Buy: check if enough cash in Account
        - [ ] Sell: check if enough quantity in Portfolio
    - [ ] Buy 
        - [ ] reduce cash in Account
        - [ ] add quantity and value in Portfolio
    - [ ] Sell
        - [ ] add cash in Account
        - [ ] reduce quantity and value in Porfolio
    - [ ] Portfolio gain/loss compared to selected date in the past
        - [ ] figure out formulas to use

### Authentication
    - [ ] front: Create login form
    - [ ] front: Create register form
    - [ ] front: call login with data
    - [ ] front: call register with data
    - [ ] back: login route
    - [ ] back: register route
    - [ ] back: verify token (JWT)
    - [ ] front: save token in localstorage
    - [ ] back: upon Register, createPortfolio() and link Account with Portfolio

### Later
- [ ] Landing page
- [ ] Demo information
- [ ] Responsive CSS
- [ ] Styling

## AJAX Routes
- DJI: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=1min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
- SPX: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=SPX&interval=1min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
- IWM: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IWM&interval=1min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
- Most active: `https://api.iextrading.com/1.0/stock/market/list/mostactive`
- Gainers: `https://api.iextrading.com/1.0/stock/market/list/gainers`
- Losers: `https://api.iextrading.com/1.0/stock/market/list/losers`
- Profile batch: `https://api.iextrading.com/1.0/stock/aapl/batch?types=price,quote,news,earnings,stats,chart&range=1m&last=10`

## UML Diagram Libraries
- [bpmn.io](https://bpmn.io/)
- [diagram-js](https://www.npmjs.com/package/diagram-js)
- [bpmn-js](https://github.com/bpmn-io/bpmn-js)

## Charting Libraries
- [react-vis](https://github.com/uber/react-vis)
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)

## CSS Libraries
### React-specific npm packages
- [Bootstrap React]()
- [React-bulma-components](https://github.com/couds/react-bulma-components)
### General
- [Notes on including Bootstrap](https://github.com/facebook/create-react-app/issues/201)
- [Notes on adding CSS preprocessor](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [PostCSS](https://github.com/postcss/postcss) - similar to Sass and Scss, major overlaps

## Data APIs
- [IEX API docs](https://iextrading.com/developer/docs/#getting-started)
    - [IEX Node wrapper](https://github.com/bilalq/iex-api)
- [Alpha Vantage API docs](https://www.alphavantage.co/documentation/)
- [Dow Jones DNA API docs](https://developer.dowjones.com/site/global/develop/introduction/index.gsp)
- [SEC developer resources](https://www.sec.gov/developer)
- [SEC accessing EDGAR data](https://www.sec.gov/edgar/searchedgar/accessing-edgar-data.htm)

## Quant Libraries
- [Quantopian Zipline](https://github.com/quantopian/zipline)
- [QuantConnect](https://www.quantconnect.com/docs)
- [Quandl](https://docs.quandl.com/docs)
- [StockSharp](https://github.com/StockSharp/StockSharp)
- [Stackexchange discussion on quant platforms](https://quant.stackexchange.com/questions/10905/what-open-source-trading-platform-are-available)

## Trade Lifecycle
- [Ten stages](https://www.allaboutfinancecareers.co.uk/industry/infrastructure/the-trade-life-cycle-explained)

# Login Auth Flow
- User enter email and password
- makes post call to /auth/login
    - Login component makes the axios.post call to /auth/login
    - auth.controller.login() generates token
    - login-action saves token, email, userid etc in local storate

When a user is making a call that calls verifyToken
e.g. get all Transactions:
- transaction-action makes GET call with token from storage
- in the route get(/all), verifyToken is called
- verifyToken creates a variable req.user
- req.user is used in the get request, only getting transactions by that user.