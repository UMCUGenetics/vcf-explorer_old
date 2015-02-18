// sample variants
// /_design/default/_view/sample_vars

function(doc) {
	for (pos_i in doc.BODY){
		pos = doc.BODY[pos_i];
		for (pos_sample_i in pos.samples) {
			pos_sample = pos.samples[pos_sample_i]
			emit(pos_sample_i, {'chr': pos.chr, 'pos': pos.pos, 'ref': pos.ref, 'alt': pos.alt, 'data': pos_sample});
		}
	}
}
