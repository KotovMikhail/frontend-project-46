install:
	npm ci

publish:
	npm publish --dry-run
	npm link

gendiff:
	node bin/gendiff.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watch

lint:
	npx eslint .

fix:
	npx eslint --fix .
