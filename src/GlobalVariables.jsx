global.APIbaseURL = "https://webapp20211006.zsenia.com/data/";
global.myHeaders = new Headers();
global.myHeaders.append("DevAuth", "2399efa3-8141-41f4-8cdd-5bfc2efe8ded");
global.requestOptions = {
    method: 'GET',
    headers: global.myHeaders,
};
global.watchlistAPI = global.APIbaseURL+"ztrade/watchlist";
global.portfolioAPI_summary = global.APIbaseURL+"zportfolioTimeseries/ts/summary/";
global.APICharts_futuresAndDials = global.APIbaseURL+"zhome/dashboard/futuresAndDials";
global.marketsAPI = global.APIbaseURL+"marketService/getMarketWidgetsData";
global.newsAPI = global.APIbaseURL+"news/articleList/1/0/0";

global.APItopTickers = global.APIbaseURL+"zhome/dashboard/sectorwiseTopTickersData"; 

global.APIquote = global.APIbaseURL+"zhome/graph/custom";
global.APIdials_dialChartData225 = global.APIbaseURL+"zhome/dashboard/dialChartData/225";
global.dialChartBaseAPI_dialChartData = global.APIbaseURL+"zhome/dashboard/dialChartData/";
global.APIpopupTextAll = global.APIbaseURL+"marketService/popupTextAll";

global.newsResult = [];
global.chartAPIresult = [];
global.newsResult_summary = [];
global.newsResult_watchlistAPI = [];
global.newsResult_futuresAndDials = [];
global.dialsResult = [];
global.dialsEconomyResult = [];
global.dialsValuationResult = [];
global.dialsSentimentalResult = [];
global.newResult_marketsAPI = [];




