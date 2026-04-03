// services/geocodingService.js
const opencage = require('opencage-api-client');

const OPENCAGE_KEY = process.env.OPENCAGE_API_KEY || '346b714cadf94d47ad3f22c51fd58800';

exports.reverseGeocode = async (lat, lon) => {
  try {
    const response = await opencage.geocode({ q: `${lat},${lon}`, key: OPENCAGE_KEY });

    if (response?.results?.length > 0) {
      return response.results[0].formatted;
    }
    return null;
  } catch (err) {
    console.error('[Geocoding Error]', err.message);
    return null;
  }
};
