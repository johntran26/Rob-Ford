function onload(){
	
	resultsarrow.addEventListener('click', expand, false);
	resultshead.addEventListener('click', expand, false);
	surveyarrow.addEventListener('click', expand, false);
	surveyhead.addEventListener('click', expand, false);
	promisesarrow.addEventListener('click', expand, false);
	promiseshead.addEventListener('click', expand, false);
	attendancearrow.addEventListener('click', expand, false);
	attendancehead.addEventListener('click', expand, false);
	wardarrow.addEventListener('click', expand, false);
	wardhead.addEventListener('click', expand, false);
	timelinearrow.addEventListener('click', expand, false);
	timelinehead.addEventListener('click', expand, false);
	bioarrow.addEventListener('click', expand, false);
	biohead.addEventListener('click', expand, false);
	
	function expand(){
		if (this == resultsarrow || this == resultshead) {
			TweenLite.to(results, 0.5, {className: "expanded"});
			TweenLite.to(resultsarrow, 0.5, {rotationZ: 180});
			resultsarrow.removeEventListener('click', expand, false);
			resultshead.removeEventListener('click', expand, false);
			resultsarrow.addEventListener('click', collapse, false);
			resultshead.addEventListener('click', collapse, false);
		}
		if (this == surveyarrow || this == surveyhead) {
			TweenLite.to(survey, 0.5, {className: "expanded"});
			TweenLite.to(surveyarrow, 0.5, {rotationZ: 180});
			surveyarrow.removeEventListener('click', expand, false);
			surveyhead.removeEventListener('click', expand, false);
			surveyarrow.addEventListener('click', collapse, false);
			surveyhead.addEventListener('click', collapse, false);
		}
		if (this == promisesarrow || this == promiseshead) {
			TweenLite.to(promises, 1.5, {className: "expanded"});
			TweenLite.to(promisesarrow, 1.5, {rotationZ: 180});
			promisesarrow.removeEventListener('click', expand, false);
			promiseshead.removeEventListener('click', expand, false);
			promisesarrow.addEventListener('click', collapse, false);
			promiseshead.addEventListener('click', collapse, false);
		}
		if (this == attendancearrow || this == attendancehead) {
			TweenLite.to(attendance, 0.5, {className: "expanded"});
			TweenLite.to(attendancearrow, 0.5, {rotationZ: 180});
			attendancearrow.removeEventListener('click', expand, false);
			attendancehead.removeEventListener('click', expand, false);
			attendancearrow.addEventListener('click', collapse, false);
			attendancehead.addEventListener('click', collapse, false);
		}
		if (this == wardarrow || this == wardhead) {
			TweenLite.to(wardmap, 0.5, {className: "expanded"});
			TweenLite.to(wardarrow, 0.5, {rotationZ: 180});
			wardarrow.removeEventListener('click', expand, false);
			wardhead.removeEventListener('click', expand, false);
			wardarrow.addEventListener('click', collapse, false);
			wardhead.addEventListener('click', collapse, false);
		}
		if (this == timelinearrow || this == timelinehead) {
			TweenLite.to(timeline, 1, {className: "expanded"});
			TweenLite.to(timelinearrow, 1, {rotationZ: 180});
			timelinearrow.removeEventListener('click', expand, false);
			timelinehead.removeEventListener('click', expand, false);
			timelinearrow.addEventListener('click', collapse, false);
			timelinehead.addEventListener('click', collapse, false);
		}
		if (this == bioarrow || this == biohead) {
			TweenLite.to(bio, 1, {className: "expanded"});
			TweenLite.to(bioarrow, 1, {rotationZ: 180});
			bioarrow.removeEventListener('click', expand, false);
			biohead.removeEventListener('click', expand, false);
			bioarrow.addEventListener('click', collapse, false);
			biohead.addEventListener('click', collapse, false);
		}
	}
	
	
	function collapse(){
		if (this == resultsarrow || this == resultshead) {
			TweenLite.to(results, 0.5, {className: "collapsed"});
			TweenLite.to(resultsarrow, 0.5, {rotationZ: 0});
			resultsarrow.removeEventListener('click', collapse, false);
			resultshead.removeEventListener('click', collapse, false);
			resultsarrow.addEventListener('click', expand, false);
			resultshead.addEventListener('click', expand, false);
		}
		if (this == surveyarrow || this == surveyhead) {
			TweenLite.to(survey, 0.5, {className: "collapsed"});
			TweenLite.to(surveyarrow, 0.5, {rotationZ: 0});
			surveyarrow.removeEventListener('click', collapse, false);
			surveyhead.removeEventListener('click', collapse, false);
			surveyarrow.addEventListener('click', expand, false);
			surveyhead.addEventListener('click', expand, false);
		}
		if (this == promisesarrow || this == promiseshead) {
			TweenLite.to(promises, 1.5, {className: "collapsed"});
			TweenLite.to(promisesarrow, 1.5, {rotationZ: 0});
			promisesarrow.removeEventListener('click', collapse, false);
			promiseshead.removeEventListener('click', collapse, false);
			promisesarrow.addEventListener('click', expand, false);
			promiseshead.addEventListener('click', expand, false);
		}
		if (this == attendancearrow || this == attendancehead) {
			TweenLite.to(attendance, 0.5, {className: "collapsed"});
			TweenLite.to(attendancearrow, 0.5, {rotationZ: 0});
			attendancearrow.removeEventListener('click', collapse, false);
			attendancehead.removeEventListener('click', collapse, false);
			attendancearrow.addEventListener('click', expand, false);
			attendancehead.addEventListener('click', expand, false);
		}
		if (this == wardarrow || this == wardhead) {
			TweenLite.to(wardmap, 0.5, {className: "collapsed"});
			TweenLite.to(wardarrow, 0.5, {rotationZ: 0});
			wardarrow.removeEventListener('click', collapse, false);
			wardhead.removeEventListener('click', collapse, false);
			wardarrow.addEventListener('click', expand, false);
			wardhead.addEventListener('click', expand, false);
		}
		if (this == timelinearrow || this == timelinehead) {
			TweenLite.to(timeline, 1, {className: "collapsed"});
			TweenLite.to(timelinearrow, 0.5, {rotationZ: 0});
			timelinearrow.removeEventListener('click', collapse, false);
			timelinehead.removeEventListener('click', collapse, false);
			timelinearrow.addEventListener('click', expand, false);
			timelinehead.addEventListener('click', expand, false);
		}
		if (this == bioarrow || this == biohead) {
			TweenLite.to(bio, 1, {className: "collapsed"});
			TweenLite.to(bioarrow, 1, {rotationZ: 0});
			bioarrow.removeEventListener('click', collapse, false);
			biohead.removeEventListener('click', collapse, false);
			bioarrow.addEventListener('click', expand, false);
			biohead.addEventListener('click', expand, false);
		}
	}
	
}