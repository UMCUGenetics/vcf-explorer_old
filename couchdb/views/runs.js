// default samples
// /_design/default/_view/runs

function(doc) {
  emit(doc._id, {"samples": doc.HEADER.samples, "date": doc.HEADER.options.date});
}
