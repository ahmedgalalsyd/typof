import { typof, string } from '../src/main';

if (string(typof('Hi!')) !== '["string"]') throw new Error(`❌ Error: ${string(typof('Hi!'))}`);

if (string(typof('0')) !== '["string","number","integer"]') throw new Error(`❌ Error: ${string(typof('0'))}`);
if (string(typof(0)) !== '["number","integer"]') throw new Error(`❌ Error: ${string(typof(0))}`);

if (string(typof('0.5')) !== '["string","number","float"]') throw new Error(`❌ Error: ${string(typof('0.5'))}`);
if (string(typof(0.5)) !== '["number","float"]') throw new Error(`❌ Error: ${string(typof(0.5))}`);

if (string(typof('true')) !== '["string","boolean"]') throw new Error(`❌ Error: ${string(typof('true'))}`);
if (string(typof(true)) !== '["boolean"]') throw new Error(`❌ Error: ${string(typof(true))}`);

if (string(typof('{"key": "value"}')) !== '["string","object"]') throw new Error(`❌ Error: ${string(typof('{"key": "value"}'))}`);
if (string(typof({ key: 'value' })) !== '["object"]') throw new Error(`❌ Error: ${string(typof({ key: 'value' }))}`);

if (string(typof('["test"]')) !== '["string","array"]') throw new Error(`❌ Error: ${string(typof('["test"]'))}`);
if (string(typof(['test'])) !== '["array"]') throw new Error(`❌ Error: ${string(typof(['test']))}`);

if (string(typof('null')) !== '["string","null"]') throw new Error(`❌ Error: ${string(typof('null'))}`);
if (string(typof(null)) !== '["null"]') throw new Error(`❌ Error: ${string(typof(null))}`);

if (string(typof('undefined')) !== '["string","undefined"]') throw new Error(`❌ Error: ${string(typof('undefined'))}`);
if (string(typof(undefined)) !== '["undefined"]') throw new Error(`❌ Error: ${string(typof(undefined))}`);
