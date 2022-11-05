let appInsights = require('applicationinsights');

// Configure the local SDK by calling 
// appInsights.setup('YOUR_CONNECTION_STRING');, 
// Or put it in the APPLICATIONINSIGHTS_CONNECTION_STRING 
// environment variable and call appInsights.setup() without parameters.

appInsights.setup()
.setAutoDependencyCorrelation(true)
.setAutoCollectRequests(true)
.setAutoCollectPerformance(true, true)
.setAutoCollectExceptions(true)
.setAutoCollectDependencies(true)
.setAutoCollectConsole(true)
.setUseDiskRetryCaching(true)
.setSendLiveMetrics(false)
.start();

export default appInsights.defaultClient;