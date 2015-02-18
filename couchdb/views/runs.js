// default samples
// /_design/default/_view/runs

function(doc) {
  emit(doc._id, doc.HEADER);
}
