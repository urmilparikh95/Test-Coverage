let subject = require('/Users/urmilparikh/csc519_testgeneration/TestGeneration/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(1, undefined); } catch (e) {} 
try { subject.inc(1, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, "werw"); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, "werw"); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, "werw"); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, "werw"); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, 'NEQ - strict'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('', '', ''); } catch (e) {} 
try { subject.blackListNumber(''); } catch (e) {} 
