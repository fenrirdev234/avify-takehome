import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: { globals: globals.browser },
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: [
			'dist',
			'build',
			'package.json',
			'package-lock.json',
			'node_modules',
			'public',
			'.husky',
		],
		plugins: { js, 'simple-import-sort': simpleImportSort },
		extends: ['js/recommended', eslintPluginPrettier],
		rules: {
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			eqeqeq: 'error',
			'no-empty-function': 'error',
			'no-implicit-coercion': 'error',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'prettier/prettier': 'warn',
		},
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
])
