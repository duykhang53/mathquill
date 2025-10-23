require('child_process').execSync(
  'docker-compose up --build --force-recreate',
  { stdio: 'inherit' }
);
