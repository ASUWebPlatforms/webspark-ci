import {Plugin} from "ckeditor5/src/core";
import AnimatedTextCommand from './animatedtextcommand';

export default class WebsparkAnimatedTextEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'WebsparkAnimatedTextEditing';
	}

	/**
	 * @inheritDoc
	 */
	constructor(editor) {
		super(editor);

		editor.config.define('highlight', {
			options: [
				{
					model: 'yellowMarker',
					class: 'marker-yellow',
					title: 'Yellow marker',
					color: 'var(--ck-highlight-marker-yellow)',
					type: 'marker'
				},
				{
					model: 'greenMarker',
					class: 'marker-green',
					title: 'Green marker',
					color: 'var(--ck-highlight-marker-green)',
					type: 'marker'
				},
				{
					model: 'pinkMarker',
					class: 'marker-pink',
					title: 'Pink marker',
					color: 'var(--ck-highlight-marker-pink)',
					type: 'marker'
				},
				{
					model: 'blueMarker',
					class: 'marker-blue',
					title: 'Blue marker',
					color: 'var(--ck-highlight-marker-blue)',
					type: 'marker'
				},
				{
					model: 'yellowPen',
					class: 'pen-yellow',
					title: 'Yellow animated',
					color: 'var(--ck-highlight-marker-yellow)',
					type: 'pen'
				},
				{
					model: 'greenPen',
					class: 'pen-green',
					title: 'Green animated',
					color: 'var(--ck-highlight-pen-green)',
					type: 'pen'
				},
				{
					model: 'redPen',
					class: 'pen-red',
					title: 'Red animated',
					color: 'var(--ck-highlight-pen-red)',
					type: 'pen'
				},
				{
					model: 'bluePen',
					class: 'pen-blue',
					title: 'Blue animated',
					color: 'var(--ck-highlight-marker-blue)',
					type: 'pen'
				},

			]
		});
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow highlight attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: 'highlight' });

		const options = editor.config.get('highlight.options');

		// Set-up the two-way conversion.
		editor.conversion.attributeToElement(_buildDefinition(options));

		editor.commands.add('highlight', new AnimatedTextCommand(editor));
	}
}

/**
 * Converts the options array to a converter definition.
 *
 * @param options An array with configured options.
 */
function _buildDefinition(options) {
	const definition = {
		model: {
			key: 'highlight',
			values: []
		},
		view: {}
	};

	for (const option of options) {
		definition.model.values.push(option.model);
		definition.view[option.model] = {
			name: 'mark',
			classes: option.class
		};
	}

	return definition;
}
