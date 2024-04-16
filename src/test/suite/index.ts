import { glob } from 'glob';
import * as Mocha from 'mocha';
import * as path from 'path';

export async function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true,
    timeout: 50000
  });

  const testsRoot = path.resolve(__dirname, '..');
  const setupPath = path.resolve(__dirname, 'setup.js');

  const files = await glob('**/**.test.js', { cwd: testsRoot });

  mocha.addFile(path.resolve(setupPath));

  // Add files to the test suite
  files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

  try {
    // Run the mocha test
    mocha.run((failures) => {
      if (failures > 0) {
        throw new Error(`${failures} tests failed.`);
      }
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
