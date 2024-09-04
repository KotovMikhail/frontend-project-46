install:
	npm ci

gendiff:
	@node gendiff.js -h

lint:
	npx eslint .

fix:
	npx eslint --fix .
