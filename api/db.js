const { Pool, types } = require('pg');

// Return DATE columns as raw 'YYYY-MM-DD' strings instead of JS Date objects.
// pg's default DATE parser builds a Date at local-timezone midnight, and
// converting that back to ISO (e.g. via toISOString()) can shift the date
// across the UTC day boundary depending on server timezone. The app only
// ever wants the plain date string anyway.
types.setTypeParser(types.builtins.DATE, (val) => val);

if (!process.env.DATABASE_URL) {
  console.warn('[db] DATABASE_URL is not set — queries will fail until it is configured.');
}

// Railway's managed Postgres requires SSL on its public proxy URL but not
// on the private internal network URL. Default to SSL on; set DB_SSL=false
// if connecting over Railway's private network (DATABASE_URL host ends in .internal).
const useSSL = process.env.DB_SSL !== 'false';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
