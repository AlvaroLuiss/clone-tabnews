const { Client } = require('pg')

async function testConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'docker',
    password: 'docker',
    database: 'docker'
  })

  try {
    await client.connect()
    console.log('Database connection successful')
    await client.end()
  } catch (error) {
    console.error('Database connection failed:', error)
  }
}

testConnection()
