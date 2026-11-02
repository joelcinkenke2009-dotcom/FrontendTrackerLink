const configuredApiUrl = import.meta.env.VITE_API_URL

export const apiUrl = (configuredApiUrl || "https://back-end-tracker-yhwf.onrender.com").replace(/\/$/, "")
export const metaApp = import.meta.env.VITE_META_APP_ID || "1083363634373087"
export const config_id = import.meta.env.VITE_META_CONFIG_ID || "1638883141127442"
