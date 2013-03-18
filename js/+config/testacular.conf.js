basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/angular/angular.js',
  'components/angular-mocks/angular-mocks.js',
  'app/**/*.js',
  '+tests/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: '+test_out/unit.xml',
  suite: 'unit'
};
