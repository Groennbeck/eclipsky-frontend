export default function convertMarkers(markers) {
	return markers.map(function(mark) {
		return {
			startRow: mark.lineNumber - 1, 
			startCol: mark.start,
			endRow: mark.lineNumber - 1, 
			endCol: mark.end, 
			className: 'error-marker', 
			type: 'background'
		}
	})
}