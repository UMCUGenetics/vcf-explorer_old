// default samples
// /_design/default/_view/var_pos

function(doc) {
  for (pos_i in doc.BODY){
    pos = doc.BODY[pos_i];
    for (pos_sample_i in pos.samples) {
      pos_sample = pos.samples[pos_sample_i]

      if (pos_sample.GT == "0/0"){
        emit([pos.chr,pos.pos,pos.ref,pos.alt],[2,0]);
      } else if (pos_sample.GT == "1/0"){
        emit([pos.chr,pos.pos,pos.ref,pos.alt],[1,1]);
      } else if (pos_sample.GT == "1/1"){
        emit([pos.chr,pos.pos,pos.ref,pos.alt],[0,2]);
      }
    }
  }
}

// Reduce
function (key, values) {
    return sum(values);
}

function(key, values) {
  ref_count = 0
  alt_count = 0
  for (i in values){
    ref_count += values[i][0]
    alt_count += values[i][1]
  }
  return [ref_count,alt_count]
}
