import React from 'react';
import Svg, {
	Circle,
	Ellipse,
	G,
	LinearGradient,
	RadialGradient,
	Line,
	Path,
	Polygon,
	Polyline,
	Rect,
	Symbol,
	Text,
	Use,
	Defs,
	Stop
} from 'react-native-svg';

export default (props) => {
	console.log(props);
	return (
	<Svg style={props.style} viewBox="0 0 500 500" width="100%" height="360">
		<Rect x="-0.5" y="1" fill="#F8F8F8" width="500" height="500" />
		<G>
			<Path fill="#777777" d="M182.315 196.75v106.5h135.37v-106.5H182.315L182.315 196.75z M306.78,291.703H193.864v-83.404H306.78 V291.703L306.78 291.703z"/>
			<Polygon fill="#777777"  points="199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 275.262,242.711 301.827,282.865" />
			<Circle fill="#777777" cx="226.719" cy="229.417" r="10.21" />
		</G>
	</Svg>
)};
{/* <svg version="1.1" id="uikit_placeholder" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
<rect x="-0.5" y="1" fill="#F8F8F8" width="500.25" height="500"/>
<g>
	<path fill="#777777" d="M182.315,196.75v106.5h135.37v-106.5H182.315L182.315,196.75z M306.78,291.703H193.864v-83.404H306.78
		V291.703L306.78,291.703z"/>
	<polygon fill="#777777" points="199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 
		275.262,242.711 301.827,282.865 	"/>
	<circle fill="#777777" cx="226.719" cy="229.417" r="10.21"/>
</g>
</svg> */}