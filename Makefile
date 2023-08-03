all:
	npx eslint main.ts
	npx prettier . --write
	node main.js