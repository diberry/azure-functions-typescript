import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import appInsightsClient from "../shared/applicationInsights";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    context.log('/api/status');
 
    // Azure Monitor logs
    appInsightsClient.trackTrace({ message: '/api/status' });
    appInsightsClient.trackTrace({ message:  process.env.NODE_ENV});

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            env: process.env
        }
    };

};

export default httpTrigger;