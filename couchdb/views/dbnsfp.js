// default pos
// /_design/default/_view/pos

function(doc) {
  for (pos_i in doc.BODY){
    pos = doc.BODY[pos_i];
      emit([pos.chr,pos.pos,pos.ref,pos.alt],pos);
  }
}

// default pos
// /_design/default/_view/header

function(doc) {
  emit(doc._id, doc.HEADER)
}
