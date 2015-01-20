// sample variants
// /_design/default/_view/sample_vars

function(doc) {
	for (pos_i in doc.BODY){
		pos = doc.BODY[pos_i];
		for (pos_sample_i in pos.samples) {
			pos_sample = pos.samples[pos_sample_i]
			emit(pos_sample_i, [pos.chr, pos.pos, pos.ref, pos.alt, pos_sample.GT, pos_sample.GQ, pos_sample.DP]);
		}
	}
}
