// default samples
// /_design/default/_view/var_pos

function(doc) {
  for (pos_i in doc.BODY){
    pos = doc.BODY[pos_i];
    for (pos_sample_i in pos.samples) {
      pos_sample = pos.samples[pos_sample_i]
      emit([pos.chr,pos.pos,pos.ref,pos.alt],1);
    }
  }
}

// Reduce
function (key, values) {
    return sum(values);
}
