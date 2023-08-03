all:
	npx eslint src/main.ts
	tsc src/main.ts
	npx prettier . --write > /dev/null
	node src/main.js