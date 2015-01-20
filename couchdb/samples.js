// default samples
// /_design/default/_view/samples

function(doc) {
  for (sample in doc.HEADER.samples){
    emit(doc._id, doc.HEADER.samples[sample]);
  }
}