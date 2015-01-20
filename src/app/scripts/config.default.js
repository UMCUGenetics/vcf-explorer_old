angular.module('vcfExplorerApp.production',[])
.constant('appConfig', {
    couchdbURL: 'http://localhost:8080',
    couchdbDatabase: 'vcf'
});

angular.module('vcfExplorerApp.development',[])
.constant('appConfig', {
    couchdbURL: 'http://localhost:8080',
    couchdbDatabase: 'vcf_dev'
});
