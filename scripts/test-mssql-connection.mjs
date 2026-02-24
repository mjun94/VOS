/**
 * MSSQL 연결 테스트 스크립트
 * 사용법: node scripts/test-mssql-connection.mjs
 * 환경변수: MSSQL_SERVER, MSSQL_PORT, MSSQL_USER, MSSQL_PASSWORD, MSSQL_DATABASE
 */
import sql from 'mssql';

const config = {
  server: process.env.MSSQL_SERVER || '172.19.100.5',
  port: parseInt(process.env.MSSQL_PORT || '1433', 10),
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE || 'ngroupware',
  options: {
    encrypt: process.env.MSSQL_ENCRYPT === 'true',
    trustServerCertificate: process.env.MSSQL_TRUST_SERVER_CERTIFICATE !== 'false',
  },
};

async function test() {
  if (!config.user || !config.password) {
    console.error('MSSQL_USER, MSSQL_PASSWORD 환경변수를 설정하세요.');
    process.exit(1);
  }
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT 1 AS test, @@VERSION AS version');
    console.log('연결 성공:', result.recordset);
    await pool.close();
    process.exit(0);
  } catch (err) {
    console.error('연결 실패:', err.message);
    process.exit(1);
  }
}

test();
