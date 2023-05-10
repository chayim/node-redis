import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import SCRIPT_EXISTS from './SCRIPT_EXISTS';

describe('SCRIPT EXISTS', () => {
  describe('transformArguments', () => {
    it('string', () => {
      assert.deepEqual(
        SCRIPT_EXISTS.transformArguments('sha1'),
        ['SCRIPT', 'EXISTS', 'sha1']
      );
    });

    it('array', () => {
      assert.deepEqual(
        SCRIPT_EXISTS.transformArguments(['1', '2']),
        ['SCRIPT', 'EXISTS', '1', '2']
      );
    });
  });

  testUtils.testWithClient('client.scriptExists', async client => {
    assert.deepEqual(
      await client.scriptExists('sha1'),
      [0]
    );
  }, GLOBAL.SERVERS.OPEN);
});
