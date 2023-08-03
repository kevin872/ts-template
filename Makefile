all:
	npx eslint main.ts
	npx prettier . --write