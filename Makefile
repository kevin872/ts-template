all:
	npx eslint src/main.ts
	npx prettier . --write
	node src/main.js