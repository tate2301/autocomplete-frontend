const cors_api_base_url = "http://sentiment-cors.tenant-lorenzschmidt.knative.chi.coreweave.com"
export const generator_api_url = "https://sentiment-predictor-default.tenant-lorenzschmidt.knative.chi.coreweave.com/v1/models/sentiment:predict"
export const generator_api_url_cors = `${cors_api_base_url}/v1/models/sentiment:predict`

export const base_url = process.env.NODE_ENV === "production" ? "https://app.thot.ai" : "http://localhost:3000"