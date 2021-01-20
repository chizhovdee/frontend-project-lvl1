install:
		npm install

publish:
		npm publish --dry-run

brain-games:
		node bin/brain-games.js

brain-even:
		node bin/brain-even.js

reshim:
		asdf reshim nodejs

lint:
	npx eslint .
