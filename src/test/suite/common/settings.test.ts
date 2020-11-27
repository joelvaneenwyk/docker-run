import * as assert from 'assert';
import { ConfigurationTarget } from 'vscode';

import { CONFIGURATION } from '../../../common/constants';
import { isSettingsDisabled, updateSettings } from '../../../common/settings';

suite('Settings Tests', async () => {
  test('Should return auto generate config disabled false by default', async () => {
    const isAutoGenerateDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG);
    assert.strictEqual(isAutoGenerateDisabled, false);
  });

  test('Should return auto stop non related disabled false by default', async () => {
    const isAutoStopDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED);
    assert.strictEqual(isAutoStopDisabled, false);
  });

  test('Should set auto generate config disabled true in workspace settings', async () => {
    await updateSettings(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG, true, ConfigurationTarget.Workspace);
    const isAutoGenerateDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG);
    await updateSettings(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG, false, ConfigurationTarget.Workspace);
    assert.strictEqual(isAutoGenerateDisabled, true);
  });

  test('Should set auto generate config disabled true in global settings', async () => {
    await updateSettings(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG, true, ConfigurationTarget.Global);
    const isAutoGenerateDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG);
    await updateSettings(CONFIGURATION.DISABLE_AUTO_GENERATE_CONFIG, false, ConfigurationTarget.Global);
    assert.strictEqual(isAutoGenerateDisabled, true);
  });

  test('Should set auto stop non related disabled true in workspace settings', async () => {
    await updateSettings(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED, true, ConfigurationTarget.Workspace);
    const isAutoGenerateDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED);
    await updateSettings(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED, false, ConfigurationTarget.Workspace);
    assert.strictEqual(isAutoGenerateDisabled, true);
  });

  test('Should set auto stop non related disabled true in global settings', async () => {
    await updateSettings(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED, true, ConfigurationTarget.Global);
    const isAutoGenerateDisabled = isSettingsDisabled(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED);
    await updateSettings(CONFIGURATION.DISABLE_AUTO_STOP_NON_RELATED, false, ConfigurationTarget.Global);
    assert.strictEqual(isAutoGenerateDisabled, true);
  });
});