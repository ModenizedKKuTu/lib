import db from './db'

(async () => {
  try {
    await db()
  } catch (error) {
    console.error(error)
  } finally {
    process.exit(0)
  }
})()
