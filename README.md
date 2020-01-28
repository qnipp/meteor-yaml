# meteor-yaml
Compiler plugin to import YAML files wih endings .yaml and .yml

## Usage

### Import yaml files as JavaScript objects

```javascript
import config from './config.yaml';
```

Importing YAML files is restricted to the safe schema, so functions and regexps are not supported.

### Use js-yaml

Example: Load a configuration file from the assets located in the `private` directory.

```javascript
import yaml from 'meteor/qnipp:yaml';

const mainConfig = yaml.load(Assets.getText('config/main.yaml'));
```

See https://github.com/nodeca/js-yaml for the complete API.

## License

MIT