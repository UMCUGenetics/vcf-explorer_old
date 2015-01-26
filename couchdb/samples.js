// default samples
// /_design/default/_view/samples

function(doc) {
  for each(sample in doc.HEADER.samples){
    emit(doc._id, sample);
  }
}
